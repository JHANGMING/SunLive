import PersonInput from '@/common/components/Input/PersonInput';
import ManagementSelect from '@/common/components/Select/ManagementSelect';
import { BsPlusCircle } from 'react-icons/bs';
import { categoryData, countyData, seasonData, statusData, storageData } from './data';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';
import Button from '@/common/components/Button';
import Editor from '@/common/components/Editor';
const AddProduct = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    //儲存日期格式
    // const formattedDate = format(data.birthday, 'yyyy/MM/dd');
    // const { email, password, identity } = data;
    // const dataObj = {
    //   email: email.trim(),
    //   password: password.trim(),
    //   identity,
    // };
    console.log(data);
  };
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <h3 className=" text-20 font-semibold mb-32">新增農產品</h3>
      {/* 上傳圖片 */}
      <div className="mb-24">
        <p className="mb-8">農產品圖片</p>
        <div className="w-100 h-100 border-2 border-dashed rounded-[4px] flex justify-center items-center">
          <BsPlusCircle size={24} className=" text-lightGray" />
        </div>
      </div>
      <form
        action=""
        className="flex flex-col gap-24"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-24">
          <PersonInput
            type="text"
            labelText="農產品名稱"
            inputText="輸入商品名稱"
            inputStyle="text-14 w-full h-[53px]"
            id="productName"
            // register={register}
          />
          <PersonInput
            type="number"
            labelText="農產品庫存"
            inputText="輸入農產品庫存"
            inputStyle="text-14 w-full h-[53px]"
            id="productName"
            // register={register}
          />
          <ManagementSelect
            labelText="農產品狀態"
            data={statusData}
            control={control}
            defaultValue={true}
            id="status"
          />
        </div>
        <div className="flex gap-24">
          <PersonInput
            type="number"
            labelText="原價"
            inputText="輸入原價"
            inputStyle="text-14 w-full h-[53px]"
            id="productName"
            // register={register}
          />
          <PersonInput
            type="number"
            labelText="促銷價"
            inputText="輸入優惠價"
            inputStyle="text-14 w-full h-[53px]"
            id="productName"
            // register={register}
          />
        </div>

        <div className="flex gap-24">
          <PersonInput
            type="number"
            labelText="規格 (小份)"
            inputText="輸入小份規格 (斤)"
            inputStyle="text-14 w-full h-[53px]"
            id="productName"
            // register={register}
          />
          <PersonInput
            type="number"
            labelText="規格 (大份)"
            inputText="輸入大份規格 (斤)"
            inputStyle="text-14 w-full h-[53px]"
            id="productName"
            // register={register}
          />
        </div>
        <div className="flex gap-24">
          <ManagementSelect
            labelText="產地"
            data={countyData}
            control={control}
            placeholder="請選擇產地"
            id="origin"
          />
          <ManagementSelect
            labelText="保存方式"
            placeholder="請選擇保存方式"
            data={storageData}
            control={control}
            id="storage"
          />
        </div>
        <div className="flex gap-24">
          <ManagementSelect
            labelText="產季"
            data={seasonData}
            control={control}
            placeholder="請選擇產季"
            id="season"
          />
          <ManagementSelect
            labelText="類別"
            placeholder="選擇類別"
            data={categoryData}
            control={control}
            id="category"
          />
        </div>
        <PersonInput
          type="text"
          labelText="農產品簡述"
          inputText="輸入農產品簡述"
          inputStyle="text-14 w-full h-[53px]"
          id="description"
          // register={register}
        />
        <div className="h-[403px] mb-[37px]">
          <label htmlFor="editor" className="block mb-8">
            農產品介紹
          </label>
          <Editor control={control} />
        </div>
        <Button category="submit" classStyle="self-end hover:opacity-70">
          新增
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
