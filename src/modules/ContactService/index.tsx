import Logo from '@/common/components/Logo';
import LogoImg from '@/common/components/Logo/LogoImg';
import Image from 'next/image';
import { BsFillXCircleFill, BsChevronLeft, BsCursorFill } from 'react-icons/bs';
import { useState } from 'react';

const ContactService = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isChatExpanded) {
      setIsChatExpanded(false);
    }
  };

  const handlerOpenChat = () => {
    setIsExpanded(true);
    setIsChatExpanded(true);
  };
  return (
    <div className="fixed bottom-0 right-[72px] z-50">
      {!isExpanded && (
        <div
          className="w-[240px] h-[48px] bg-primary-yellow rounded-tl-20 rounded-tr-20 py-12 flex justify-center items-center gap-16 cursor-pointer"
          onClick={toggleExpand}>
          <LogoImg widthProps={24} heightProps={24} />
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
            <Logo textSytle="text-20" widthProps={32} heightProps={32} />
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
            <li className=" rounded-12 bg-white py-24 px-42">
              <div className=" flex justify-between mb-16 items-center">
                <div className="flex gap-8 items-center">
                  <Image
                    src="/images/home/live/liveComingPerson1.png"
                    alt="liveComingPerson1"
                    width={50}
                    height={50}
                  />
                  <h6 className="text-16 font-normal">陳雅安</h6>
                </div>
                <p>2023/12/25</p>
              </div>
              <button
                type="button"
                className=" bg-primary-yellow font-bold py-10 w-full rounded-6"
                onClick={handlerOpenChat}>
                開啟聊天室
              </button>
            </li>
            <li className=" rounded-12 bg-white py-24 px-42">
              <div className=" flex justify-between mb-16 items-center">
                <div className="flex gap-8 items-center">
                  <Image
                    src="/images/home/live/liveComingPerson1.png"
                    alt="liveComingPerson1"
                    width={50}
                    height={50}
                  />
                  <h6 className="text-16 font-normal">陳雅安</h6>
                </div>
                <p>2023/12/25</p>
              </div>
              <button
                type="button"
                className=" bg-primary-yellow font-bold py-10 w-full rounded-6"
                onClick={handlerOpenChat}>
                開啟聊天室
              </button>
            </li>
          </ul>
          <div className="bg-SoftGray h-16 rounded-bl-20 rounded-br-20"></div>
        </div>
      )}
      {isChatExpanded && (
        <div className=" absolute bottom-16 right-0 w-[422px] z-30 shadow-chatRoom rounded-20">
          <div className=" bg-primary-yellow px-32 pt-24 pl-24 pb-16 rounded-tl-20 rounded-tr-20 flex flex-col gap-16 relative">
            <BsFillXCircleFill
              size={24}
              className="w-24 h-24 text-white absolute top-12 right-12 cursor-pointer hover:bg-black hover:rounded-full"
              onClick={toggleExpand}
            />
            <div className="flex items-center">
              <BsChevronLeft
                size={24}
                className="mr-16 text-darkGray cursor-pointer"
                onClick={() => setIsChatExpanded(false)}
              />
              <Image
                src="/images/home/live/liveComingPerson1.png"
                alt="liveComingPerson1"
                width={50}
                height={50}
                className="mr-8"
              />
              <h6 className="text-16 font-normal">陳雅安</h6>
            </div>
          </div>
          <ul className=" bg-SoftGray py-24 pl-24 pr-12  flex flex-col gap-16 h-[294px] overflow-y-auto">
            <li className="flex justify-between w-full">
              <div className="flex gap-8">
                <Image
                  src="/images/home/live/liveComingPerson1.png"
                  alt="liveComingPerson1"
                  width={50}
                  height={50}
                  className=" w-50 h-50"
                />
                <p className="text-14 bg-white p-8 rounded-12 rounded-tl-none flex items-center">
                  您好，我是小農黃阿德，歡迎詢問商品問題，因諮詢量多請耐心等候，如晚回覆請見諒。
                </p>
              </div>
              <p className=" text-darkGray self-end text-12 ml-8">14:54</p>
            </li>
            <li className="flex justify-end">
              <p className="text-14 bg-primary-yellow p-8 rounded-12 rounded-tr-none flex items-center">
                您好，我是小農黃阿德您好，我是小農黃阿德您好，我是小農黃阿德您好，我是小農黃阿德您好，我是小農黃阿德您好，我是小農黃阿德
              </p>

              <p className=" text-darkGray self-end text-12 ml-8">14:54</p>
            </li>
            <li className="flex justify-end">
              <p className="text-14 bg-primary-yellow p-8 rounded-12 rounded-tr-none flex items-center">
                您好，我是小農黃阿德您好
              </p>

              <p className=" text-darkGray self-end text-12 ml-8">14:54</p>
            </li>
            <li className="flex justify-between w-full">
              <div className="flex gap-8">
                <Image
                  src="/images/home/live/liveComingPerson1.png"
                  alt="liveComingPerson1"
                  width={50}
                  height={50}
                  className=" w-50 h-50"
                />
                <p className="text-14 bg-white p-8 rounded-12 rounded-tl-none flex items-center">
                  您好，我是小農黃阿德，歡迎詢問商品問題，因諮詢量多請耐心等候，如晚回覆請見諒。
                </p>
              </div>
              <p className=" text-darkGray self-end text-12 ml-8">14:54</p>
            </li>
          </ul>
          <div className="rounded-bl-20 rounded-br-20 bg-white p-24">
            <div className="flex gap-8 items-center">
              <input
                type="text"
                className=" bg-SoftGray text-darkGray focus-visible:outline-none rounded-8 h-48 pl-16 w-full"
                placeholder="輸入聊天訊息 ..."
              />
              <BsCursorFill
                size={24}
                className=" text-primary-green w-24 h-24 cursor-pointer hover:opacity-70"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactService;
