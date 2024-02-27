import { mutate } from 'swr';
import { BsPersonCircle } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { BsFillXCircleFill, BsChevronLeft, BsCursorFill } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import Image from '@/common/components/CustomImage';
import { useDebounceFn } from '@/common/hooks/useDebounceFn';
import { PersonalChatRoomProps } from './data';

const PersonalChatRoom = ({
  toggleExpand,
  setIsChatExpanded,
  setChatMessages,
  setFarmer,
  setupSignalRConnection,
  isConnected,
  farmerInfo,
  chatMessages,
  chatroomId,
  userId,
  chatHubProxyRef,
}: PersonalChatRoomProps) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLUListElement | null>(null);
 
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop =
              messagesEndRef.current.scrollHeight;
          }
        }
      }
    });

    if (messagesEndRef.current) {
      observer.observe(messagesEndRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
    return () => {
      observer.disconnect();
    };
  }, []); 

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && userId) {
      event.preventDefault();
      debouncedSendMsg();
    }
  };
  const handleSendMessage = async () => {
    if (!userId || newMessage.trim() === '') {
      return;
    }
    if (!isConnected) {
      setupSignalRConnection();
    }
    try {
      await chatHubProxyRef?.invoke(
        'SendMessageToRoom',
        chatroomId,
        userId,
        newMessage
      );
      console.log('Message sent successfully');
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  const handlerChatExpand = () => {
    setFarmer({
      farmerId: 0,
      farmerName: '',
      farmerPhoto: '',
    });
    setChatMessages([]);
    setIsChatExpanded(false);
    mutate(`/api${nextRoutes['getmessage']}`);
    mutate(`/api${nextRoutes['notify']}`);
  };
  const debouncedSendMsg = useDebounceFn(handleSendMessage, 300);
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
              onClick={handlerChatExpand}
            />
            <Image
              src={
                farmerInfo.farmerPhoto
                  ? farmerInfo.farmerPhoto
                  : '/images/home/live/liveComingPerson1.png'
              }
              alt="liveComingPerson1"
              roundedStyle="rounded-full object-cover"
              className="w-50 h-50 mr-8"
            />
            <h6 className="text-16 font-normal">{farmerInfo.farmerName}</h6>
          </div>
        </div>
        <ul
          className=" bg-SoftGray py-24 pl-24 pr-12  flex flex-col gap-16 h-[294px] overflow-y-auto"
          ref={messagesEndRef}>
          {chatMessages?.map((msg, index) => {
            return (
              <li
                key={index}
                className={`flex gap-8 ${
                  msg.senderId === userId ? 'justify-end' : 'justify-between'
                }`}>
                {msg.senderId !== userId ? (
                  <>
                    <div className="flex gap-8">
                      {farmerInfo.farmerPhoto !== null ? (
                        <Image
                          src={farmerInfo.farmerPhoto}
                          alt="Sender"
                          roundedStyle="rounded-full object-cover"
                          className="w-50 h-50"
                        />
                      ) : (
                        <BsPersonCircle size={50} className=" text-darkGray" />
                      )}
                      <p className="text-14 bg-white p-8 rounded-12 rounded-tl-none flex items-center break-all">
                        {msg.message}
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                      <p className=" text-darkGray  text-12 ml-8">
                        {msg.sendDate}
                      </p>
                      <p className=" text-darkGray text-12 ml-8">
                        {msg.sendTime}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-14 bg-primary-yellow p-8 rounded-12 rounded-tr-none flex items-center break-all">
                      {msg.message}
                    </p>
                    <div className="flex flex-col justify-end">
                      <p className=" text-darkGray self-end text-12 ml-8">
                        {msg.sendDate}
                      </p>
                      <p className=" text-darkGray self-end text-12 ml-8">
                        {msg.sendTime}
                      </p>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <div className="rounded-bl-20 rounded-br-20 bg-white p-24">
          <div className="flex gap-8 items-center">
            <input
              type="text"
              className=" bg-SoftGray text-darkGray tracking-widest focus-visible:outline-none rounded-8 h-48 pl-16 w-full"
              placeholder="輸入聊天訊息 ..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <BsCursorFill
              size={24}
              className=" text-primary-green w-24 h-24 cursor-pointer hover:opacity-70"
              onClick={debouncedSendMsg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalChatRoom;
