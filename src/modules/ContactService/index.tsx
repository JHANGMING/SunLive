import Logo from '@/common/components/Logo';
import LogoImg from '@/common/components/Logo/LogoImg';
import Image from '@/common/components/CustomImage';
import { BsFillXCircleFill} from 'react-icons/bs';
import { useState } from 'react';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import useSWR from 'swr';
import { fetcher } from '@/common/helpers/fetcher';
import { nextRoutes } from '@/constants/apiPaths';
import { ChatDataType } from './data';
import PersonalChatRoom from './PersonalChatRoom';

const ContactService = () => {
  const { authStatus } = useAuthStatus();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes['getmessage']}` : null,
    fetcher
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [chatroomId, setChatroomId] = useState<number | null>(null);
  const chatData = data?.chatList;
  console.log('chat', chatData);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isChatExpanded) {
      setIsChatExpanded(false);
    }
  };

  const handlerOpenChat = (id:number) => {
    setChatroomId(id);
    setIsExpanded(true);
    setIsChatExpanded(true);
  };
  return (
    <div className="fixed bottom-0 right-[72px] z-50">
      {!isExpanded && (
        <div
          className="w-[240px] h-[48px] bg-primary-yellow rounded-tl-20 rounded-tr-20 py-12 flex justify-center items-center gap-16 cursor-pointer"
          onClick={toggleExpand}>
          <LogoImg classProps="w-24 h-24" />
          <p>即時聊聊</p>
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
                您可以點選下方聊天室中的小農頭像，查看歷史訊息或進行對話。
              </span>
            </div>
            <p className=" text-darkGray text-14">
              諮詢量多請耐心等候，小農會盡快回覆您
            </p>
          </div>

          <ul className=" bg-SoftGray pl-36 pr-30 py-32  flex flex-col gap-16 h-[292px] overflow-y-auto pb-20">
            {chatData?.map((chat: ChatDataType) => (
              <>
                <li className=" rounded-12 bg-white py-24 px-42">
                  <div className=" flex justify-between mb-16 items-center">
                    <div className="flex gap-8 items-center">
                      <Image
                        src={
                          chat.famrerPhoto
                            ? chat.famrerPhoto
                            : '/images/home/live/liveComingPerson1.png'
                        }
                        alt="liveComingPerson1"
                        className="w-50 h-50"
                        roundedStyle="rounded-full object-cover"
                      />
                      <h6 className="text-16 font-normal">
                        {chat.famrerNickName}
                      </h6>
                    </div>
                    <p>{chat.lastMessageDate}</p>
                  </div>
                  <button
                    type="button"
                    className=" bg-primary-yellow font-bold py-10 w-full rounded-6"
                    onClick={() => handlerOpenChat(chat.chatroomId)}>
                    開啟聊天室
                  </button>
                </li>
              </>
            ))}
          </ul>
          <div className="bg-SoftGray h-16 rounded-bl-20 rounded-br-20"></div>
        </div>
      )}
      {isChatExpanded && chatroomId && (
        <PersonalChatRoom
          toggleExpand={toggleExpand}
          setIsChatExpanded={setIsChatExpanded}
          id={chatroomId}
        />
      )}
    </div>
  );
};

export default ContactService;
