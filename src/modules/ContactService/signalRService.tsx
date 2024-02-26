export const JoinChatRoom = async (
  chatHubProxyRef: SignalR.Hub.Proxy | null,
  chatroomId: number
) => {
  try {
    await chatHubProxyRef?.invoke('JoinChatRoom', chatroomId);
    console.log('Joined the chat room successfully');
  } catch (error) {
    console.error('Failed to join chat room:', error);
  }
};
