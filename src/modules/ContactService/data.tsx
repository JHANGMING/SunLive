export type ChatDataType = {
  chatroomId: number;
  famrerNickName: string;
  famrerPhoto: string;
  lastMessageDate: string;
  farmerId: number;
  userId: number;
  userPhoto: string;
  userNickName: string;
  isRead: boolean;
};

type FarmerDataType = {
  farmerId: number;
  farmerName: string;
  farmerPhoto: string;
};

export type PersonalChatRoomProps = {
  toggleExpand: () => void;
  setIsChatExpanded: (isExpanded: boolean) => void;
  setFarmer: (farmer: FarmerDataType) => void;
  setChatMessages(chatMessages: ChatcontentType[]): void;
  farmerInfo: FarmerDataType;
  chatMessages: ChatcontentType[];
  userId: number;
  chatroomId: number;
  chatHubProxyRef: SignalR.Hub.Proxy | null;
  setupSignalRConnection: () => void;
  isConnected: boolean;
};

export type ChatcontentType = {
  message: string;
  sendDate: string;
  sendTime: string;
  senderId: number;
  senderNickName: string;
  senderPhoto: string;
};
