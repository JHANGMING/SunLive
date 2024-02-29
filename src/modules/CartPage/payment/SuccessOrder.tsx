import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs';
import LogoImg from '@/common/components/Logo/LogoImg';
import CartProcess from '../CartProcess';

const SuccessOrder = () => {
  return (
    <>
      <CartProcess />
      <section className="container grid grid-cols-12 mb-[200px]">
        <div className="bg-white col-span-12 px-24 pt-24 pb-80 rounded-20 mb-16 flex flex-col items-center gap-24">
          <p className="text-24 font-bold self-start">訂購完成</p>
          <BsCheckCircleFill size={100} className=" text-primary-yellow" />
          <h4 className=" text-darkGray">訂購成功</h4>
          <div className="flex gap-8">
            <LogoImg classProps="w-24 h-24" />
            <p className=" text-darkGray font-bold">搶鮮購感謝您的訂購</p>
          </div>
          <Link
            href="/personinfo?section=order"
            className=" text-white mt-36 py-12 px-20 rounded-8 bg-primary-green block hover:opacity-70">
            查看訂單詳情
          </Link>
        </div>
      </section>
    </>
  );
};

export default SuccessOrder;
