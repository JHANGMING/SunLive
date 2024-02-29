import { mutate } from 'swr';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { BsCursorFill } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import { useEffect, useRef, useState } from 'react';
import Image from '@/common/components/CustomImage';
import { useDebounceFn } from '@/common/hooks/useDebounceFn';
import { setLiveRoomId, setToast } from '@/redux/features/messageSlice';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { LiveChatProps, Message } from './data';

const LiveChat = ({ liveId, liveFarmerId, setViewerCount }: LiveChatProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [chatroomId] = useState(`live-${liveId}`);
  const apiUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLUListElement | null>(null);
  const chatHubProxyRef = useRef<SignalR.Hub.Proxy | null>(null);
  const [user, setUser] = useState({
    userIdSender: 0,
    nameSender: '',
    photoSender: '',
  });

  useEffect(() => {
    if (messagesEndRef.current) {
      const { current: messagesContainer } = messagesEndRef;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!liveId) return;
    dispatch(setLiveRoomId(liveId));
  }, [liveId]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setupSignalRConnection();
    return () => {
      chatHubProxyRef.current?.connection.stop();
      setIsConnected(false);
    };
  }, [chatroomId]);

  //判斷是否離開頁面
  useEffect(() => {
    const handleRouteChange = async (url: string) => {
      if (!url.includes('/livestream')) {
        try {
          chatHubProxyRef.current?.invoke('LeftLiveRoom', chatroomId);
        } catch (error) {
          console.error('Error leaving live room:', error);
        }
      }
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);
  const setupSignalRConnection = async () => {
    if (chatHubProxyRef.current && isConnected) {
      return;
    }
    try {
      const { hubConnection } = await import('signalr-no-jquery');
      const connection = hubConnection(apiUrl);
      const chatHubProxy = connection.createHubProxy(
        'chathub'
      ) as unknown as SignalR.Hub.Proxy;

      chatHubProxy.on('receiveLiveMessage', (message: Message) => {
        mutate(`/api${nextRoutes['live']}?id=${liveId}`);
        setMessages((prevMessages) => [...prevMessages, message]);
      });
      chatHubProxy.on('receivePeople', (message) => {
        setViewerCount(message);
      });

      chatHubProxyRef.current = chatHubProxy;

      await connection
        .start()
        .done(() => {
          setIsConnected(true);
          JoinChatRoom(chatroomId)
            .then(() => callApi())
            .catch((error) => console.error(error));
        })
        .fail((error: Error) => {
          setIsConnected(false);
        });
    } catch (error) {
      console.error('Failed to connect to SignalR server:', error);
    }
  };
  const JoinChatRoom = async (chatroomId: string) => {
    if (!chatHubProxyRef.current) {
      return;
    }
    try {
      await chatHubProxyRef.current?.invoke('JoinLiveRoom', chatroomId);
    } catch (error) {
      console.error('Failed to connect to SignalR server:', error);
    }
  };

  const callApi = async () => {
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['check'],
      method: 'GET',
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setUser({
          userIdSender: result.data.senderId,
          nameSender: result.data.senderName,
          photoSender: result.data.senderPhoto,
        });
        dispatch(setToast({ message: '歡迎來到直播特賣會' }));
      } else {
        dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && user.userIdSender) {
      event.preventDefault();
      debouncedSendMsg();
    }
  };
  const handleSendMessage = async () => {
    if (!isConnected || !user.userIdSender || newMessage.trim() === '') {
      return;
    }
    try {
      await chatHubProxyRef.current?.invoke(
        'SendMessageToLiveRoom',
        chatroomId,
        user.userIdSender,
        user.nameSender,
        user.photoSender,
        newMessage
      );
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  const handerShare = async () => {
    const farmerMsg = `歡迎揪親朋好友來加入我的直播特賣: https://sun-live.vercel.app/livestream/${liveId}`;
    if (!isConnected || !user.userIdSender) {
      return;
    }
    try {
      await chatHubProxyRef.current?.invoke(
        'SendMessageToLiveRoom',
        chatroomId,
        user.userIdSender,
        user.nameSender,
        user.photoSender,
        farmerMsg
      );
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  const debouncedSendMsg = useDebounceFn(handleSendMessage, 300);
  return (
    <>
      <ul
        className="px-24 pb-16 flex flex-col gap-16 overflow-y-auto max-h-[445px] flex-grow"
        ref={messagesEndRef}>
        {user.nameSender && (
          <p className="text-12 text-center text-darkGray">
            歡迎{user.nameSender}進入聊天室
          </p>
        )}
        {messages.map((msg, index) => (
          <li
            key={index}
            className={`flex gap-8 ${msg.userIdSender === user.userIdSender ? 'justify-end' : 'justify-start'}`}>
            {msg.userIdSender !== user.userIdSender ? (
              <>
                {msg.userIdSender === liveFarmerId ? (
                  msg.photo ? (
                    <Image
                      src={msg.photo}
                      alt="Live Host"
                      roundedStyle="rounded-full object-cover"
                      className="w-24 h-24 border-[2px] border-primary-yellow rounded-full flashing-border "
                    />
                  ) : (
                    <BsPersonCircle size={24} className=" text-darkGray" />
                  )
                ) : msg.photo ? (
                  <Image
                    src={msg.photo}
                    alt="Sender"
                    roundedStyle="rounded-full object-cover"
                    className="w-24 h-24"
                  />
                ) : (
                  <BsPersonCircle size={24} className=" text-darkGray" />
                )}
                <div className="flex flex-col mr-2 text-darkGray">
                  <span className="whitespace-nowrap">{msg.nickName}</span>
                </div>
                <p className="break-all text-14 break-words w-full">
                  {msg.message}
                </p>
              </>
            ) : (
              <>
                <p className="break-all text-14 break-words w-full flex justify-end">
                  {msg.message}
                </p>
                {liveFarmerId === user.userIdSender ? (
                  <Image
                    src={user.photoSender}
                    alt="Live Host"
                    roundedStyle="rounded-full object-cover"
                    className="w-24 h-24 border-[2px] border-primary-yellow rounded-full flashing-border "
                  />
                ) : user.photoSender ? (
                  // 一般用戶的圖片
                  <Image
                    src={user.photoSender}
                    alt="Sender"
                    roundedStyle="rounded-full object-cover"
                    className="w-24 h-24"
                  />
                ) : (
                  <BsPersonCircle size={24} className=" text-darkGray" />
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      {user.userIdSender === liveFarmerId && (
        <div className=" text-end mb-8 mr-8">
          <button
            type="button"
            className="text-white bg-primary-green rounded-8 text-14 leading-[30px] py-[5px] px-26 hover:opacity-80"
            onClick={handerShare}>
            分享網址
          </button>
        </div>
      )}
      <div className="border-t border-lightGray p-24 gap-16 flex items-center justify-between">
        {user.photoSender ? (
          <Image
            src={user.photoSender}
            alt="viewPerson1"
            roundedStyle="rounded-full object-cover"
            className="w-24 h-24"
          />
        ) : (
          <BsPersonCircle size={24} className="text-darkGray" />
        )}
        <input
          type="text"
          placeholder="輸入聊天訊息 ..."
          className="tracking-widest text-darkGray bg-SoftGray py-8 pl-16 rounded-8 w-[287px] focus-visible:outline-none "
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <BsCursorFill
          size={24}
          className={`${user.userIdSender ? 'text-primary-red hover:opacity-60' : 'text-darkGray'} cursor-pointer`}
          onClick={user.userIdSender ? debouncedSendMsg : undefined}
        />
      </div>
    </>
  );
};

export default LiveChat;
