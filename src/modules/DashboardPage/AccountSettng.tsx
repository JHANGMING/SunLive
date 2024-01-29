const AccountSettng = () => {
  return (
    <>
      <div className="w-9/12 bg-white rounded-20 p-32 h-[528px]">
        <div className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-16">
            <h3 className=" text-20 font-semibold ">所有訂單</h3>
            <button
              type="button"
              className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white">
              新增農產品
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettng;
