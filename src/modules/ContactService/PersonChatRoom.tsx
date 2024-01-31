import Image from 'next/image';
import { useState } from 'react';

const PersonChatRoom = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {!isExpanded && (
        <ul className=" bg-SoftGray px-36 py-32 rounded-bl-20 rounded-br-20 flex flex-col gap-16 h-[292px] overflow-y-auto">
          <li className=" rounded-12 bg-white py-16 px-42">
            <div className="flex gap-8 items-center pb-16 border-b border-lightGray mb-16">
              <Image
                src="/images/home/live/liveComingPerson1.png"
                alt="liveComingPerson1"
                width={50}
                height={50}
              />
              <h6 className="text-16 font-normal">陳雅安</h6>
            </div>
            <button
              type="button"
              className=" bg-primary-yellow font-bold py-10 w-full rounded-6"
              onClick={toggleExpand}>
              開啟聊天室
            </button>
          </li>
          <li className=" rounded-12 bg-white py-16 px-42">
            <div className="flex gap-8 items-center pb-16 border-b border-lightGray mb-16">
              <Image
                src="/images/home/live/liveComingPerson1.png"
                alt="liveComingPerson1"
                width={50}
                height={50}
              />
              <h6 className="text-16 font-normal">黃曉明</h6>
            </div>
            <button
              type="button"
              className=" bg-primary-yellow font-bold py-10 w-full rounded-6">
              開啟聊天室
            </button>
          </li>
        </ul>
      )}
      {isExpanded && <div></div>}
    </>
  );
};

export default PersonChatRoom;
