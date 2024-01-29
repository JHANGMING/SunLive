import LogoImg from '@/common/components/Logo/LogoImg';
import Image from 'next/image';
import { useState } from 'react';
import { BsChevronRight, BsChevronDown, BsX } from 'react-icons/bs';
import CartLink from './CartLink';
const CartListSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <section className="container">
      <div className=" flex gap-40">
        <div className="w-9/12 bg-white p-24 rounded-20 mb-16 flex-grow self-start">
          <div className="flex gap-8">
            {isFormOpen ? (
              <BsChevronDown
                size={24}
                className="text-primary-green cursor-pointer hover:scale-105"
                onClick={toggleForm}
              />
            ) : (
              <BsChevronRight
                size={24}
                className="text-primary-green cursor-pointer hover:scale-105"
                onClick={toggleForm}
              />
            )}
            <p className=" text-darkGray font-semibold text-20">購物車清單</p>
          </div>
          <ul
            className={`cartlist form-transition ${isFormOpen ? 'form-open' : 'form-closed'}`}>
            <li className="p-24 flex justify-between">
              <div className="flex gap-16">
                <Image
                  src="/images/home/live/liveComingImg1.png"
                  alt="liveComingImg1"
                  width={80}
                  height={80}
                  className="w-80 h-80"
                />
                <div className="">
                  <h6 className=" font-normal">夢幻柳橙夏悠</h6>
                  <div className="text-14 flex gap-8">
                    <p>
                      NT$<span>250</span>
                    </p>
                    <p className=" text-lightGray line-through">299</p>
                  </div>
                </div>
              </div>
              <div className="text-18">小份 (213g)</div>
              <div>
                <div className="flex gap-x-12 items-center">
                  <Image
                    src="/images/cart/dec.png"
                    alt="dec"
                    width={20}
                    height={20}
                    className="w-20 h-20 cursor-pointer hover:opacity-70"
                  />
                  <p className="text-18">1</p>
                  <Image
                    src="/images/cart/plus.png"
                    alt="plus"
                    width={20}
                    height={20}
                    className="w-20 h-20 cursor-pointer hover:opacity-70"
                  />
                </div>
              </div>
              <div className=" flex gap-40">
                <h6 className=" font-normal">
                  <span>$</span>250
                </h6>
                <BsX
                  size={24}
                  className=" text-darkGray cursor-pointer hover:opacity-70"
                />
              </div>
            </li>
            <li className="p-24 flex justify-between">
              <div className="flex gap-16">
                <Image
                  src="/images/home/live/liveComingImg1.png"
                  alt="liveComingImg1"
                  width={80}
                  height={80}
                  className="w-80 h-80"
                />
                <div className="">
                  <h6 className=" font-normal">夢幻柳橙夏悠</h6>
                  <div className="text-14 flex gap-8">
                    <p>
                      NT$<span>250</span>
                    </p>
                    <p className=" text-lightGray line-through">299</p>
                  </div>
                </div>
              </div>
              <div className="text-18">小份 (213g)</div>
              <div>
                <div className="flex gap-x-12 items-center">
                  <Image
                    src="/images/cart/dec.png"
                    alt="dec"
                    width={20}
                    height={20}
                    className="w-20 h-20 cursor-pointer hover:opacity-70"
                  />
                  <p className="text-18">1</p>
                  <Image
                    src="/images/cart/plus.png"
                    alt="plus"
                    width={20}
                    height={20}
                    className="w-20 h-20 cursor-pointer hover:opacity-70"
                  />
                </div>
              </div>
              <div className=" flex gap-40">
                <h6 className=" font-normal">
                  <span>$</span>250
                </h6>
                <BsX
                  size={24}
                  className=" text-darkGray cursor-pointer hover:opacity-70"
                />
              </div>
            </li>
            <li className="p-24 flex justify-between">
              <div className="flex gap-16">
                <Image
                  src="/images/home/live/liveComingImg1.png"
                  alt="liveComingImg1"
                  width={80}
                  height={80}
                  className="w-80 h-80"
                />
                <div className="">
                  <h6 className=" font-normal">夢幻柳橙夏悠</h6>
                  <div className="text-14 flex gap-8">
                    <p>
                      NT$<span>250</span>
                    </p>
                    <p className=" text-lightGray line-through">299</p>
                  </div>
                </div>
              </div>
              <div className="text-18">小份 (213g)</div>
              <div>
                <div className="flex gap-x-12 items-center">
                  <Image
                    src="/images/cart/dec.png"
                    alt="dec"
                    width={20}
                    height={20}
                    className="w-20 h-20 cursor-pointer hover:opacity-70"
                  />
                  <p className="text-18">1</p>
                  <Image
                    src="/images/cart/plus.png"
                    alt="plus"
                    width={20}
                    height={20}
                    className="w-20 h-20 cursor-pointer hover:opacity-70"
                  />
                </div>
              </div>
              <div className=" flex gap-40">
                <h6 className=" font-normal">
                  <span>$</span>250
                </h6>
                <BsX
                  size={24}
                  className=" text-darkGray cursor-pointer hover:opacity-70"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-3/12">
          <div className="bg-white px-16 py-20 rounded-20 flex flex-col gap-8 items-center mb-32">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex">
                <div className="text-18 w-1/2">商品原價</div>
                <p className="text-16 w-1/2">
                  $<span>500</span>
                </p>
              </div>
              <div className="flex">
                <div className="text-18 w-1/2">運費</div>
                <p className="text-16 w-1/2">
                  $<span>100</span>
                </p>
              </div>
              <div className="flex">
                <div className="text-18 w-1/2">總額</div>
                <p className="text-16 w-1/2">
                  $<span>650</span>
                </p>
              </div>
              <div className="flex">
                <div className="text-18 text-primary-red w-1/2">折扣</div>
                <p className="text-20 text-primary-red font-bold w-1/2">
                  $<span>650</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-20 rounded-20  flex flex-col gap-8 items-center">
            <div className="flex items-center gap-8">
              <LogoImg widthProps={32} heightProps={32} />
              <p>商品總價</p>
            </div>
            <h5 className=" text-primary-green font-bold">
              <span>$</span>500
            </h5>
          </div>
        </div>
      </div>
      <CartLink />
    </section>
  );
};

export default CartListSection;
