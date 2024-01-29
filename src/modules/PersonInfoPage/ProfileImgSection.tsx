import Image from 'next/image';
import { BsPencilSquare } from 'react-icons/bs';
const ProfileImgSection = () => {
  return (
    <div className="w-100 h-100 bg-personGray rounded-full relative">
      {/* <Image/> */}
      <div className=" absolute right-0 bottom-0 w-32 h-32 bg-primary-yellow rounded-full flex justify-center items-center cursor-pointer">
        <BsPencilSquare size={10.5} />
      </div>
    </div>
  );
};

export default ProfileImgSection;
