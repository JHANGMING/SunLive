import useSWR from 'swr';
import { useDispatch} from 'react-redux';
import { BsPencilSquare } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import useAuth from '@/common/hooks/useAuth';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import Image from '@/common/components/CustomImage';
import { setToast } from '@/redux/features/messageSlice';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
const ProfileImgSection = () => {
  const auth=useAuth();
  const dispatch = useDispatch();
  const [img, setImg] = useState('');
  const { authStatus } = useAuthStatus();
  const [nickName, setNickName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  const authUrl =
    auth?.category === '0'
      ? `/api${nextRoutes['account_get']}`
      : `/api${nextRoutes['farminfo_get']}`;
  const { data } = useSWR(authStatus ? authUrl : null, fetcher);
  const authData = data?.data;
    useEffect(() => {
      if (authData?.photo) {
        setImg(decodeURIComponent(authData.photo));
      }
      if (authData?.nickName) {
        setNickName(decodeURIComponent(authData.nickName));
      }
    }, [authData]);
  const url =
    auth?.category === '0'
      ? `/api${nextRoutes['uploaduserImg']}`
      : `/api${nextRoutes['uploadfarmerImg']}`;
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
    // 創建 FormData
    const formData = new FormData();
    formData.append('file', file);
        const imgParams = {
          method: 'POST',
          body: formData,
        };
    try {
      const imgResponse = await fetch(url, imgParams);
      const imgResult = await imgResponse.json();
      if (imgResult.statusCode == 200) {
        setImg(imgResult.data.src);
      }else{
        dispatch(setToast({ message: imgResult.message }));
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div className="w-100 h-100 bg-personGray rounded-full relative">
        {img && (
          <div className="absolute w-full h-full z-10 flex justify-center items-center">
            <Image
              src={img}
              alt="farmerProfile"
              className="w-100 h-100"
              roundedStyle="object-cover rounded-full"
              priority={true}
            />
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div
          className=" absolute right-0 bottom-0 w-32 h-32 bg-primary-yellow rounded-full flex justify-center items-center cursor-pointer z-50"
          onClick={triggerFileInput}>
          <BsPencilSquare size={10.5} />
        </div>
      </div>
      <h2 className="text-24">{ nickName || "user"}</h2>
    </>
  );
};

export default ProfileImgSection;
