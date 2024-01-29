import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';
const ArrowLeft = () => {
  const router = useRouter();
  const handlerGoBack = () => {
    router.back();
  };
  return (
    <BsArrowLeftShort
      size={40}
      className=" text-darkGray absolute -left-[133px] top-6 cursor-pointer hover:opacity-80"
      onClick={handlerGoBack}
    />
  );
};

export default ArrowLeft;
