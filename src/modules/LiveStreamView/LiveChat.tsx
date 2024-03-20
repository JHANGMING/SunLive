import { mutate } from 'swr';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { BsCursorFill, BsPersonCircle } from 'react-icons/bs';
import Image from '@/common/components/CustomImage';
import { nextRoutes } from '@/constants/api/apiPaths';
import useDebounceFn from '@/common/hooks/useDebounceFn';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { liveCheckParams } from '@/constants/api/nextApiParams';
import { setLiveRoomId, setToast } from '@/redux/features/messageSlice';
import { LiveChatProps, Message } from './data';
import { Avatar, NameTag } from './MessageItem';

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
  const callApi = async () => {
    try {
      const result = await fetchNextApi(liveCheckParams);
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
  const JoinChatRoom = async (roomId: string) => {
    if (!chatHubProxyRef.current) {
      return;
    }
    try {
      await chatHubProxyRef.current?.invoke('JoinLiveRoom', roomId);
    } catch (error) {
      console.error('Failed to connect to SignalR server:', error);
    }
  };
  const setupSignalRConnection = async () => {
    if (chatHubProxyRef.current && isConnected) {
      return;
    }
    try {
      const { hubConnection } = await import('signalr-no-jquery');
      const connection = hubConnection(apiUrl);
      const chatHubProxy = connection.createHubProxy(
        'chathub',
      ) as unknown as SignalR.Hub.Proxy;

      chatHubProxy.on('receiveLiveMessage', (message: Message) => {
        mutate(`/api${nextRoutes.live}?id=${liveId}`);
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
          console.error('Failed to start SignalR connection:', error);
          setIsConnected(false);
        });
    } catch (error) {
      console.error('Failed to connect to SignalR server:', error);
    }
  };
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
    if (typeof window === 'undefined') {
      return () => {};
    }
    setupSignalRConnection();
    return () => {
      chatHubProxyRef.current?.connection.stop();
      setIsConnected(false);
    };
  }, [chatroomId]);

  // 判斷是否離開頁面
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

  const handleSendMessage = useDebounceFn(async () => {
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
        newMessage,
      );
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }, 300);
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && user.userIdSender) {
      event.preventDefault();
      handleSendMessage();
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
        farmerMsg,
      );
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  return (
    <>
      <ul
        className="px-24 pb-16 flex flex-col gap-16 overflow-y-auto max-h-[445px] flex-grow"
        ref={messagesEndRef}
      >
        {user.nameSender && (
          <p className="text-12 text-center text-darkGray">
            歡迎
            {user.nameSender}
            進入聊天室
          </p>
        )}
        {messages.map((msg) => (
          <li
            key={uuidv4()}
            className={`flex gap-8 items-start ${msg.userIdSender === user.userIdSender ? 'flex-row-reverse' : 'justify-start'}`}
          >
            <Avatar
              photo={msg.photo}
              alt={msg.userIdSender === liveFarmerId ? 'Live Host' : 'Sender'}
            />
            <div className="flex gap-6 text-14 items-baseline">
              {msg.userIdSender !== user.userIdSender && (
                <NameTag
                  nickName={msg.nickName}
                  isLiveFarmer={msg.userIdSender === liveFarmerId}
                />
              )}
              <p className="break-all break-words">{msg.message}</p>
            </div>
          </li>
        ))}
      </ul>
      {user.userIdSender === liveFarmerId && (
        <div className=" text-end mb-8 mr-8">
          <button
            type="button"
            className="text-white bg-primary-green rounded-8 text-14 leading-[30px] py-[5px] px-26 hover:opacity-80"
            onClick={handerShare}
          >
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
          onClick={user.userIdSender ? handleSendMessage : undefined}
        />
      </div>
    </>
  );
};

export default LiveChat;
