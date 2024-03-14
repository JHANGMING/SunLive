export type ChatDataType = {
  userId: number;
  isRead: boolean;
  farmerId: number;
  userPhoto: string;
  chatroomId: number;
  famrerPhoto: string;
  userNickName: string;
  famrerNickName: string;
  lastMessageDate: string;
};

type FarmerDataType = {
  farmerId: number;
  farmerName: string;
  farmerPhoto: string;
};

export type PersonalChatRoomProps = {
  userId: number;
  chatroomId: number;
  isConnected: boolean;
  toggleExpand: () => void;
  farmerInfo: FarmerDataType;
  chatMessages: ChatcontentType[];
  setupSignalRConnection: () => void;
  chatHubProxyRef: SignalR.Hub.Proxy | null;
  setFarmer: (farmer: FarmerDataType) => void;
  setIsChatExpanded: (isExpanded: boolean) => void;
  setChatMessages(chatMessages: ChatcontentType[]): void;
};

export type ChatcontentType = {
  message: string;
  sendDate: string;
  sendTime: string;
  senderId: number;
  senderPhoto: string;
  senderNickName: string;
};
