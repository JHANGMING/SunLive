const LivingProduct = () => {
  return (
    <div className="col-span-5 flex flex-col gap-y-16 items-center">
      <h2 className=" text-primary-red ">正在進行的小農直播</h2>
      <h3 className=" text-primary-green ">陽光甘醇有機蕃茄</h3>
      <div className="flex gap-x-16 items-center">
        <p className=" text-16 font-bold bg-primary-red text-white px-16 py-4 rounded-[8px] h-32">
          直播優惠價
        </p>
        <h4 className=" text-28 text-primary-red">299</h4>
      </div>
    </div>
  );
};

export default LivingProduct;
