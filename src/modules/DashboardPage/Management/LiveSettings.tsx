import Button from '@/common/components/Button';
import DatePickerShow from '@/common/components/DatePicker';
import PersonInput from '@/common/components/Input/PersonInput';
import { FormValues } from '@/common/components/Input/data';
import LiveProductSelect from '@/common/components/Select/Live/ProductSelect';
import ProductSpecSelect from '@/common/components/Select/Live/ProductSpecSelect';
import LiveTimeSelect from '@/common/components/Select/LiveTimeSelect';
import { useForm } from 'react-hook-form';
import { BsPlusCircle } from 'react-icons/bs';
const LiveSettings = () => {
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
      <h3 className=" text-20 font-semibold mb-32">直播設定</h3>
      {/* 上傳圖片 */}
      <div className="mb-24">
        <p className="mb-8">直播圖片</p>
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
            labelText="直播名稱"
            inputText="輸入直播名稱"
            inputStyle="text-14 w-full h-[53px]"
            id="liveName"
            // register={register}
          />
          <div className="w-full">
            <label htmlFor="" className="text-16 block mb-8">
              直播日期
            </label>
            <DatePickerShow control={control} page="live" />
          </div>
        </div>
        <LiveTimeSelect control={control} />
        <PersonInput
          type="text"
          labelText="直播連結"
          inputText="輸入直播連結"
          inputStyle="text-14 w-full h-[53px]"
          id="liveLink"
          // register={register}
        />
        <div className="mt-40 mb-32 flex items-center gap-16">
          <h3 className=" text-20 font-semibold ">選擇直播農產品</h3>
          <button
            type="button"
            className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white"
            // onClick={onAddProductClick}
            >
            新增農產品
          </button>
        </div>
        <div className="flex gap-24 mb-32">
          <LiveProductSelect control={control} />
          <ProductSpecSelect control={control} />
          <PersonInput
            type="text"
            labelText="直播特惠價格"
            inputText="輸入直播特惠價格"
            inputStyle="text-14 w-full h-[53px]"
            id="liveSpectialPrice"
            // register={register}
          />
        </div>

        <Button category="submit" classStyle="self-end hover:opacity-70">
          儲存
        </Button>
      </form>
    </div>
  );
};

export default LiveSettings;