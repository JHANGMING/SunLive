export type ChatDataType = {
  chatroomId: number;
  famrerNickName: string;
  famrerPhoto: string;
  lastMessageDate: string;
  farmerId: number;
};

type FarmerDataType = {
  farmerId: number;
  farmerName: string;
  farmerPhoto: string;
};


export type PersonalChatRoomProps = {
  toggleExpand: () => void;
  setIsChatExpanded: (isExpanded: boolean) => void;
  roomId: number;
  farmer: FarmerDataType;
};

export type ChatcontentType = {
  message: string;
  sendDate: string;
  sendTime: string;
  senderId: number;
  senderNickName: string;
  senderPhoto: string;
};



export type Message = {
  message: string;
  sendDate: string;
  sendTime: string;
  senderId: number;
  senderNickName: string;
  senderPhoto: string;
  chatcontent: ChatcontentType;
};
