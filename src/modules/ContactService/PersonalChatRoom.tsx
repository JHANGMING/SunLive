import Image from '@/common/components/CustomImage';
import { useState } from 'react';
import { BsFillXCircleFill, BsChevronLeft, BsCursorFill } from 'react-icons/bs';
import { PersonalChatRoomProps } from './data';
const PersonalChatRoom = ({ toggleExpand, setIsChatExpanded, id }:PersonalChatRoomProps) => {
  console.log('id', id);

  return (
    <>
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
              className="w-50 h-50 mr-8"
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
    </>
  );
};

export default PersonalChatRoom;
