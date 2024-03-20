const JoinChatRoom = async (
  chatHubProxyRef: SignalR.Hub.Proxy | null,
  chatroomId: number,
) => {
  try {
    await chatHubProxyRef?.invoke('JoinChatRoom', chatroomId);
  } catch (error) {
    console.error('Failed to join chat room:', error);
  }
};
export default JoinChatRoom;
