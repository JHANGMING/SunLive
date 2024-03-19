import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nextRoutes } from '@/constants/api/apiPaths';
import { CredentialsProps } from '@/modules/Auth/data';
import { setToast } from '@/redux/features/messageSlice';
import bufferToBase64URLString from '../helpers/bufferToBase64URLString';
import fetchNextApi, { NextapiParamsType } from '../helpers/fetchNextApi';

const useWebAuthn = () => {
  const dispatch = useDispatch();
  const [isRequestPending, setIsRequestPending] = useState(false);

  const createCredential = async (options: CredentialsProps) => {
    const creationOptions = {
      challenge: options.resultOption.challenge,
      rp: options.resultOption.rp,
      user: options.resultOption.user,
      pubKeyCredParams: options.resultOption.pubKeyCredParams,
      excludeCredentials: options.resultOption.excludeCredentials,
      authenticatorSelection: options.resultOption.authenticatorSelection,
    };

    return navigator.credentials.create({ publicKey: creationOptions });
  };

  const getCredential = async (options: CredentialsProps) => {
    if (!options.challenge || !options.userVerification) return null;
    const requestOptions: PublicKeyCredentialRequestOptions = {
      challenge: options.challenge,
      rpId: options.rpId,
      userVerification: options.userVerification,
    };
    return navigator.credentials.get({ publicKey: requestOptions });
  };

  const processCredentialForBackend = ({
    credential,
    options,
    isRegister,
  }: CredentialsProps) => {
    if (isRegister) {
      const newCredential = {
        id: credential.id,
        type: credential.type,
        rawId: bufferToBase64URLString(credential.rawId),
        response: {
          attestationObject: bufferToBase64URLString(
            credential.response.attestationObject,
          ),
          clientDataJSON: bufferToBase64URLString(
            credential.response.clientDataJSON,
          ),
        },
        authenticatorAttachment: credential.authenticatorAttachment,
      };
      return {
        aarr: newCredential,
        ccp: options.originalOption,
      };
    }
    const newCredential = {
      id: credential.id,
      type: credential.type,
      rawId: bufferToBase64URLString(credential.rawId),
      response: {
        authenticatorData: bufferToBase64URLString(
          credential.response.authenticatorData,
        ),
        clientDataJSON: bufferToBase64URLString(
          credential.response.clientDataJSON,
        ),
        signature: bufferToBase64URLString(credential.response.signature),
        userHandle: bufferToBase64URLString(credential.response.userHandle),
      },
      authenticatorAttachment: credential.authenticatorAttachment,
    };
    return {
      aarr: newCredential,
      ao: options.originalOption,
    };
  };

  const handleCredential = async (
    options: CredentialsProps,
    isRegister: boolean,
  ) => {
    setIsRequestPending(true);

    try {
      const credential = await (isRegister
        ? createCredential(options)
        : getCredential(options));
      const processedCredential = processCredentialForBackend({
        credential,
        options,
        isRegister,
      });

      const apiPath = isRegister
        ? nextRoutes.creatWebAuthn
        : nextRoutes.getWebAuthn;
      const apiParams: NextapiParamsType = {
        apiPath,
        method: 'POST',
        data: processedCredential,
      };

      const result = await fetchNextApi(apiParams);
      setIsRequestPending(false);
      return result;
    } catch (error) {
      console.error(error);
      setIsRequestPending(false);
      dispatch(setToast({ message: '註冊失敗，請重新認證' }));
      return false;
    }
  };

  return { handleCredential, isRequestPending };
};

export default useWebAuthn;
