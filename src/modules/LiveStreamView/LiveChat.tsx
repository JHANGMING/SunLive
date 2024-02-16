import { BsCursorFill } from 'react-icons/bs';
import Image from '@/common/components/CustomImage';
import { useEffect, useRef, useState } from 'react';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';
type Message = {
  userIdSender: number;
  message: string;
};
const LiveChat = () => {
  const [chatroomId] = useState('live');
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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
          console.log('Received message:', message);
          setMessages((prevMessages) => [...prevMessages, message]);
        });

        chatHubProxyRef.current = chatHubProxy;

        await connection.start();
        console.log('Connected to SignalR server!');
        setIsConnected(true);
        JoinChatRoom(chatroomId);
      } catch (error) {
        console.error('Failed to connect to SignalR server:', error);
      }
    };

    setupSignalRConnection();

    return () => {
      chatHubProxyRef.current?.connection.stop();
    };
  }, [apiUrl, chatroomId]);
  const JoinChatRoom = async (chatroomId: string) => {
    try {
      await chatHubProxyRef.current?.invoke('JoinLiveRoom', chatroomId);
      console.log('JoinLiveRoom:', chatroomId);
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
        console.log('check', result);
        if (result.statusCode === 200) {
          setUser({
            userIdSender: result.data.senderId,
            nameSender: result.data.senderName,
            photoSender: result.data.senderPhoto,
          });
          dispatch(setToast({ message: "歡迎來到直播特賣會" }));
        } else {
          dispatch(setToast({ message: `${result.message || '未知错误'}` }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    const handleKeyPress = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSendMessage();
      }
    };
  const handleSendMessage = async () => {
    if (!isConnected || !user.userIdSender || newMessage.trim() === '') {
      console.error(
        'SignalR connection is not established or message is empty.'
      );
      return;
    }

    try {
      await chatHubProxyRef.current?.invoke(
        'SendMessageToLiveRoom',
        chatroomId,
        user.userIdSender,
        newMessage
      );
      console.log('Message sent successfully');
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
// {userIdSender: 7, message: 'aaaa'}
  return (
    <>
      <ul
        className="px-24 pb-16 flex flex-col gap-16 overflow-y-auto max-h-[445px] flex-grow"
        ref={messagesEndRef}>
        {/* <li className="flex items-center gap-16">
          <Image
            src="/images/liveStream/viewPerson2.png"
            alt="viewPerson2"
            className="w-24 h-24"
          />
          <h6 className="text-14 font-normal">Ann</h6>
          <p className="text-14">哈囉哈囉</p>
        </li>
        <li className="flex items-center gap-16">
          <Image
            src="/images/liveStream/viewPerson2.png"
            alt="viewPerson2"
            className="w-24 h-24"
          />
          <h6 className="text-14 font-normal">Ann</h6>
          <p className="text-14">哈囉哈囉</p>
        </li> */}
        <p className='text-12 text-center text-darkGray'>歡迎{user.nameSender}進入聊天室</p>
        {messages.map((msg, index) => (
          <li
            key={index}
            className={`flex items-center gap-16 ${msg.userIdSender === user.userIdSender ? 'justify-end' : ''}`}>
            <div
              className={`message ${msg.userIdSender === user.userIdSender ? 'message-sender' : 'message-receiver'}`}>
              {/* 可以根据需要添加图片 */}
              <p className="text-14">{msg.message}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t border-lightGray p-24 gap-16 flex items-center justify-between">
        <Image
          src={
            user.photoSender
              ? user.photoSender
              : '/images/liveStream/viewPerson1.png'
          }
          alt="viewPerson1"
          className="w-24 h-24"
          roundedStyle="rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="輸入聊天訊息 ..."
          className=" text-darkGray bg-SoftGray py-8 pl-16 rounded-8 w-[287px] focus-visible:outline-none "
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {/* 要用token鎖住 */}
        <BsCursorFill
          size={24}
          className=" text-primary-red cursor-pointer hover:opacity-60"
          onClick={handleSendMessage}
        />
      </div>
    </>
  );
};

export default LiveChat;