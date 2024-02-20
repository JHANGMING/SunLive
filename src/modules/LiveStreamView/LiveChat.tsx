import { mutate } from 'swr';
import { useDispatch } from 'react-redux';
import { BsCursorFill } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Image from '@/common/components/CustomImage';
import { nextRoutes } from '@/constants/apiPaths';
import { setToast } from '@/redux/features/messageSlice';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { LiveChatProps, Message } from './data';

const LiveChat = ({ liveId }: LiveChatProps) => {
  const [chatroomId] = useState(`live-${liveId}`);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState({
    userIdSender: 0,
    nameSender: '',
    photoSender: '',
  });
  const [isConnected, setIsConnected] = useState(false);
  const chatHubProxyRef = useRef<SignalR.Hub.Proxy | null>(null);
  const messagesEndRef = useRef<HTMLUListElement | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
  const dispatch = useDispatch();
  useEffect(() => {
    if (messagesEndRef.current) {
      const { current: messagesContainer } = messagesEndRef;
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const setupSignalRConnection = async () => {
      try {
        const { hubConnection } = await import('signalr-no-jquery');
        const connection = hubConnection(apiUrl);
        const chatHubProxy = connection.createHubProxy(
          'chathub'
        ) as unknown as SignalR.Hub.Proxy;

        chatHubProxy.on('receiveMessage', (message: Message) => {
          mutate(`/api${nextRoutes['live']}?id=${liveId}`);
          setMessages((prevMessages) => [...prevMessages, message]);
        });

        chatHubProxyRef.current = chatHubProxy;

        await connection
          .start()
          .done(() => {
            console.log('Connected to SignalR server!');
            setIsConnected(true);
            JoinChatRoom(chatroomId);
          })
          .fail((error: Error) => {
            console.error('Failed to connect to SignalR server:', error);
          });
      } catch (error) {
        console.error('Failed to connect to SignalR server:', error);
      }
    };
    setupSignalRConnection();
    return () => {
      chatHubProxyRef.current?.connection.stop();
    };
  }, [chatroomId]);
  const JoinChatRoom = async (chatroomId: string) => {
    if (!chatHubProxyRef.current || !isConnected) {
      return;
    }
    try {
      await chatHubProxyRef.current?.invoke('JoinLiveRoom', chatroomId);
      callApi();
    } catch (error) {
      console.error('ChatHubProxy is not initialized or join failed:', error);
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
      handleSendMessage();
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
      console.log('Message sent successfully');
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
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
                {msg.photo !== null ? (
                  <Image
                    src={msg.photo}
                    alt="Sender"
                    roundedStyle="rounded-full object-cover"
                    className="w-24 h-24"
                  />
                ) : (
                  <BsPersonCircle size={24} className=" text-darkGray" />
                )}
                <p className="mr-2 text-darkGray">{msg.nickName}</p>
                <p className="text-14 break-words w-full pr-24">
                  {msg.message}
                </p>
              </>
            ) : (
              <>
                <p className="text-14 break-words w-full flex justify-end pl-24">
                  {msg.message}
                </p>
                {user.photoSender ? (
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
        {/* 要用token鎖住 */}
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
