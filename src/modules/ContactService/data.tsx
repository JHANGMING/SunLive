export type ChatDataType = {
  chatroomId: number;
  famrerNickName: string;
  famrerPhoto: string;
  lastMessageDate: string;
};

export type PersonalChatRoomProps= {
  toggleExpand: () => void;
  setIsChatExpanded: (isExpanded: boolean) => void;
  id: number;
};