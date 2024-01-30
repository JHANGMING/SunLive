const AllOrders = () => {
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <div className="flex justify-between items-center mb-24">
        <h4 className=" text-14 py-10 px-8">所有訂單</h4>
      </div>
      <h3 className=" text-20 font-semibold ">所有訂單</h3>
      {/* <div className="mb-24 ">
        <ManagementTable
          columns={productColumns}
          data={productData}
          showCheckbox={true}
        />
      </div> */}
      {/* <Button category="default" classStyle="self-end">
        刪除
      </Button> */}
    </div>
  );
}
 
export default AllOrders;