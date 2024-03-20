import { useState } from 'react';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { passwordlessParams } from '@/constants/api/nextApiParams';
import base64URLStringToBuffer from '@/common/helpers/base64URLStringToBuffer';

const useCredentialManagement = () => {
  const [isRequestPending, setIsRequestPending] = useState(false);

  const prepareOptions = async (isRegister: boolean, username: string) => {
    setIsRequestPending(true);
    try {
      const dataObj = { inputName: username.trim(), isRegister };
      const apiParams = { ...passwordlessParams, data: dataObj };
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        if (isRegister) {
          const { challenge, user, ...restOfResultOption } = result.option;
          return {
            resultOption: {
              ...restOfResultOption,
              challenge: base64URLStringToBuffer(result.option.challenge),
              user: {
                ...result.option.user,
                id: base64URLStringToBuffer(result.option.user.id),
              },
            },
            originalOption: result.option,
          };
        }
        return {
          challenge: base64URLStringToBuffer(result.option.challenge),
          rpId: result.option.rpId,
          userVerification: result.option.userVerification,
          resultOption: {
            status: result.status === 'success' ? 'ok' : 'failed',
          },
          originalOption: result.option,
        };
      }
      throw new Error('Failed to prepare options');
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsRequestPending(false);
    }
  };

  return {
    prepareOptions,
    isRequestPending,
    setIsRequestPending,
  };
};
export default useCredentialManagement;
