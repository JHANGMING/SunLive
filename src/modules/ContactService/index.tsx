import useSWR, { mutate } from 'swr';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillXCircleFill, BsChatText } from 'react-icons/bs';
import { RootState } from '@/redux/store';
import Logo from '@/common/components/Logo';
import useAuth from '@/common/hooks/useAuth';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import Image from '@/common/components/CustomImage';
import LogoImg from '@/common/components/Logo/LogoImg';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import { clearFamerId, setToast} from '@/redux/features/messageSlice';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { JoinChatRoom } from './signalRService';
import PersonalChatRoom from './PersonalChatRoom';
import { ChatDataType, ChatcontentType } from './data';

const ContactService = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { authStatus } = useAuthStatus();
  const [userId, setUserId] = useState(0);
  const [chatroomId, setChatroomId] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const chatHubProxyRef = useRef<SignalR.Hub.Proxy | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatcontentType[]>([]);
  const [farmer, setFarmer] = useState({
    farmerId: 0,
    farmerName: '',
    farmerPhoto: '',
  });
  const { isReadyToShowChat, farmerId } = useSelector(
    (state: RootState) => state?.message
  );
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['getmessage']}` : null,
    fetcher
  );
  const { data: notify } = useSWR(
    authStatus ? `/api${nextRoutes['notify']}` : null,
    fetcher
  );
  
  const id= Number(auth?.id);
  const chatData = data?.chatList;
  const isFarmer = auth?.category === '1';
  const isReady = notify?.haveUnreadMessage;
  const apiUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
  useEffect(() => {
    if (!isReadyToShowChat) return;
    setFarmer((prevFarmer) => ({
      ...prevFarmer,
      farmerId,
    }));
    getChatApi(farmerId);
    setIsExpanded(true);
    setIsChatExpanded(true);
  }, [isReadyToShowChat]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setupSignalRConnection();
    return () => {
      chatHubProxyRef.current?.connection.stop();
      setIsConnected(false);
    };
  }, [chatroomId]);

  useEffect(() => {
    if (!isConnected) {
      setupSignalRConnection();
    }
  }, [isConnected]);

   const setupSignalRConnection = async () => {
    if (chatHubProxyRef.current && isConnected) {
      return;
    }
    try {
      const { hubConnection } = await import('signalr-no-jquery');
      const connection = hubConnection(apiUrl);
      const chatHubProxy = connection.createHubProxy('chathub');

      chatHubProxy.on('receiveMessage', (message) => {
        const newMessages = message.chatcontent;
        mutate(`/api${nextRoutes['notify']}`);
        setChatMessages(newMessages);
      });
      chatHubProxy.on('notifyMessage', (message) => {
        dispatch(setToast({message:message}));
      });
      chatHubProxy.on('notifyShipment', (message) => {
        dispatch(setToast({ message: message }));
      });

      chatHubProxyRef.current = chatHubProxy as any;
      await connection
        .start()
        .done(() => {
          setIsConnected(true);
          if(id){
            chatHubProxyRef.current?.invoke('AddintoSocket', id);
          }
          if (chatroomId ) {
            JoinChatRoom(
              chatHubProxyRef.current,
              chatroomId
            );
          }
        })
        .fail((error:Error) => {
          setIsConnected(false);
        });
        connection.disconnected(() => {
          setIsConnected(false); 
        });
    } catch (error) {
      setIsConnected(false);
    }
  };

  const getChatApi = async (farmerId: number) => {
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['joinroom'],
      method: 'POST',
      data: { receiverId: farmerId },
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setUserId(result.currentUserId);
        setChatMessages(result.chatcontent);
        setChatroomId(result.chatroomId);
        setFarmer((prevFarmer) => ({
          ...prevFarmer,
          farmerName: isFarmer ? result.userName : result.farmName,
          farmerPhoto: isFarmer ? result.userPhoto : result.farmPhoto,
        }));
      } else {
        console.error('Error fetching user data:', result.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const toggleExpand = () => {
    dispatch(clearFamerId());
    setIsExpanded((prevState) => !prevState);
    mutate(`/api${nextRoutes['notify']}`);
    mutate(`/api${nextRoutes['getmessage']}`);
    if (isChatExpanded) {
      setIsChatExpanded(false);
    }
  };
  
  const handlerOpenChat = async (
    farmerId: number,
    nickName: string,
    photo: string
  ) => {
    const farmerObj = {
      farmerId,
      farmerName: nickName,
      farmerPhoto: photo,
    };
    setFarmer(farmerObj);
    setIsExpanded(true);
    setIsChatExpanded(true);
    getChatApi(farmerId);
  };
  if (!authStatus) return null;
  return (
    <div className="fixed bottom-0 right-[72px] z-50">
      {!isExpanded && (
        <div
          className="w-[240px] h-[48px] bg-primary-yellow rounded-tl-20 rounded-tr-20 py-12 flex justify-center items-center gap-16 cursor-pointer relative"
          onClick={toggleExpand}>
          <LogoImg classProps="w-24 h-24" />
          <p>即時聊聊</p>
          {isReady && (
            <BsInfoCircleFill
              size={30}
              className=" text-primary-red absolute -top-[7px] right-10"
            />
          )}
        </div>
      )}

      {isExpanded && !isChatExpanded && (
        <div className=" absolute bottom-16 right-0 w-[422px] z-30 shadow-chatRoom rounded-20">
          <div className=" bg-primary-yellow px-32 py-16 rounded-tl-20 rounded-tr-20 flex flex-col gap-16 relative">
            <BsFillXCircleFill
              size={24}
              className="w-24 h-24 text-white absolute top-12 right-12 cursor-pointer hover:bg-black hover:rounded-full"
              onClick={toggleExpand}
            />
            <Logo textSytle="text-20" classProps="h-32 w-32" />
            <div>
              <p className=" text-14">嗨！歡迎來到搶鮮購聊天室</p>
              <span className="text-14">
                您可以點選下方聊天室中的{isFarmer ? '消費者' : '小農'}
                頭像，查看歷史訊息或進行對話。
              </span>
            </div>
            {isFarmer || (
              <p className=" text-darkGray text-14">
                諮詢量多請耐心等候，小農會盡快回覆您
              </p>
            )}
          </div>
          <ul className=" bg-SoftGray pl-36 pr-30 py-32  flex flex-col gap-16 h-[292px] overflow-y-auto pb-20">
            {chatData?.length === 0 && (
              <li className="text-24 text-darkGray flex flex-col items-center justify-center gap-32 h-full">
                <BsChatText size={80} />
                <div className="flex items-center gap-16">
                  <LogoImg classProps="w-32 h-32" />
                  <p>歡迎來到搶鮮購聊天室</p>
                </div>
              </li>
            )}
            {chatData?.map((chat: ChatDataType, index: number) => (
              <li
                className=" rounded-12 bg-white py-24 px-42"
                key={`${isFarmer ? chat.userId : chat.farmerId}-${index}`}>
                <div className=" flex justify-between mb-16 items-center relative">
                  {chat.isRead || (
                    <BsInfoCircleFill
                      size={30}
                      className=" text-primary-red absolute -top-16 -right-24"
                    />
                  )}
                  <div className="flex gap-8 items-center">
                    <Image
                      src={
                        isFarmer
                          ? chat.userPhoto
                            ? chat.userPhoto
                            : '/images/home/live/liveComingPerson1.png'
                          : chat.famrerPhoto
                            ? chat.famrerPhoto
                            : '/images/home/live/liveComingPerson1.png'
                      }
                      alt="liveComingPerson1"
                      className="w-50 h-50"
                      roundedStyle="rounded-full object-cover"
                    />
                    <h6 className="text-16 font-normal">
                      {isFarmer ? chat.userNickName : chat.famrerNickName}
                    </h6>
                  </div>
                  <p>{chat.lastMessageDate}</p>
                </div>
                <button
                  type="button"
                  className=" bg-primary-yellow font-bold py-10 w-full rounded-6 hover:opacity-70"
                  onClick={() =>
                    handlerOpenChat(
                      isFarmer ? chat.userId : chat.farmerId,
                      isFarmer ? chat.userNickName : chat.famrerNickName,
                      isFarmer ? chat.userPhoto : chat.famrerPhoto
                    )
                  }>
                  開啟聊天室
                </button>
              </li>
            ))}
          </ul>
          <div className="bg-SoftGray h-16 rounded-bl-20 rounded-br-20"></div>
        </div>
      )}
      {isChatExpanded && (
        <PersonalChatRoom
          toggleExpand={toggleExpand}
          setIsChatExpanded={setIsChatExpanded}
          setChatMessages={setChatMessages}
          setupSignalRConnection={setupSignalRConnection}
          userId={userId}
          chatMessages={chatMessages}
          farmerInfo={farmer}
          chatroomId={chatroomId}
          setFarmer={setFarmer}
          isConnected={isConnected}
          chatHubProxyRef={chatHubProxyRef.current}
        />
      )}
    </div>
  );
};

export default ContactService;
