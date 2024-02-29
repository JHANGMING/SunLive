import LogoImg from '@/common/components/Logo/LogoImg';
import { CartTotalPriceProps } from './data';

const CartTotalPrice = ({ priceData }: CartTotalPriceProps) => {
  return (
    <div className="w-3/12">
      <div className="bg-white px-16 py-20 rounded-20 flex flex-col gap-8 items-center mb-32">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex">
            <div className="text-18 w-1/2">商品原價</div>
            <p className="text-16 w-1/2">
              $<span>{priceData?.totalOriginalPrice}</span>
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
              $<span>{priceData?.totalPromotionPrice}</span>
            </p>
          </div>
          <div className="flex">
            <div className="text-18 text-primary-red w-1/2">折扣</div>
            <p className="text-20 text-primary-red font-bold w-1/2">
              $<span>{priceData?.totalDiscount}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-20 rounded-20  flex flex-col gap-8 items-center">
        <div className="flex items-center gap-8">
          <LogoImg classProps="w-32 h-32" />
          <p className="text-18">商品總價</p>
        </div>
        <h5 className=" text-primary-green font-bold">
          <span>$</span>
          {priceData?.totalPromotionPrice + 100}
        </h5>
      </div>
    </div>
  );
};

export default CartTotalPrice;
