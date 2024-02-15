import { useRef, useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import Image from '@/common/components/CustomImage';
import { nextRoutes } from '@/constants/apiPaths';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';
import useAuth from '@/common/hooks/useAuth';
const ProfileImgSection = () => {
  const auth=useAuth();
  const decodedUrl = decodeURIComponent(auth?.photo || '');
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState("");
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
    // 创建 FormData
    const formData = new FormData();
    formData.append('file', file);
    const url = `/api${nextRoutes['uploadfarmerImg']}`;
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
      console.log(imgResult);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="w-100 h-100 bg-personGray rounded-full relative">
      {img ||
        (decodedUrl && (
          <div className="absolute w-full h-full z-10 flex justify-center items-center">
            <Image
              src={img || decodedUrl}
              alt="farmerProfile"
              className="w-100 h-100"
              roundedStyle="object-cover rounded-full"
            />
          </div>
        ))}
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
  );
};

export default ProfileImgSection;
