import Button from '@/common/components/Button';
import DatePickerShow from '@/common/components/DatePicker';
import PersonInput from '@/common/components/Input/PersonInput';
import { FormValues } from '@/common/components/Input/data';
import LiveProductSelect from '@/common/components/Select/Live/ProductSelect';
import ProductSpecSelect from '@/common/components/Select/Live/ProductSpecSelect';
import ProductToChatSelect from '@/common/components/Select/Live/ProductToChatSelect';
import LiveTimeSelect from '@/common/components/Select/LiveTimeSelect';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsPlusCircle, BsXCircleFill } from 'react-icons/bs';
import { format } from 'date-fns';
const LiveSettings = () => {
  const [products, setProducts] = useState<any[]>([]);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>();

  const fileInputRef = useRef<HTMLInputElement>(null); 
  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('https://your-upload-endpoint.com', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // 假设服务器返回的响应包含了图片的 URL
          const data = await response.json(); // 或者根据服务器的响应格式调整
          const imageURL = data.url; // 服务器返回的图片 URL

          // 调用 handleImageUploadSuccess 并传入图片 URL
          handleImageUploadSuccess(imageURL);
          console.log('File uploaded successfully');
        } else {
          console.error('Upload failed');
        }
      } catch (error) {
        console.error('Error during upload', error);
      }
    } else {
      console.log('No file selected');
    }
  };
  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleImageUploadSuccess = (imageURL:string) => {
    // 使用 setValue 来更新 imageURL 字段的值
    setValue('imageURL', imageURL);
  };
  const onSubmit = (data: FormValues) => {
    if (!data.imageURL) {
      console.error('No image URL provided');
      return; // 如果没有图片网址，则不提交
    }
    //儲存日期格式
    // const formattedDate = format(data.birthday, 'yyyy/MM/dd');

    // const { email, password, identity } = data;
    // const dataObj = {
    //   email: email.trim(),
    //   password: password.trim(),
    //   identity,
    // };
    console.log(data);
    reset();
  };
  

  const onAddProductClick = () => {
    setProducts([...products, {}]);
  };

  const onDeleteProductClick = (index:number) => {
    const updatedProducts = products.filter((_, idx) => idx !== index);
    setProducts(updatedProducts); 
  };
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <h3 className=" text-20 font-semibold mb-32">直播設定</h3>
      {/* 上傳圖片 */}
      <div className="mb-24">
        <p className="mb-8">直播圖片</p>
        <div
          className="w-100 h-100 border-2 border-dashed rounded-[4px] flex justify-center items-center cursor-pointer hover:opacity-70"
          // onClick={handleAddImageClick}
          onClick={() => handleImageUploadSuccess("hggfgf")}>
          <BsPlusCircle size={24} className=" text-lightGray" />
        </div>
        {/* 隐藏的文件输入 */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileInputChange}
        />
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
            register={register}
            errors={errors}
            rules={{
              required: {
                value: true,
                message: '請輸入直播名稱!',
              },
            }}
          />
          <div className="w-full">
            <label htmlFor="" className="text-16 block mb-8">
              直播日期
            </label>
            <DatePickerShow
              control={control}
              page="live"
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請選擇日期!',
                },
              }}
            />
          </div>
        </div>
        <LiveTimeSelect
          control={control}
          errors={errors}
          startTimeRules={{
            required: {
              value: true,
              message: '請選擇開始時間!',
            },
          }}
          endTimeRules={{
            required: {
              value: true,
              message: '請選擇結束時間!',
            },
          }}
        />
        <PersonInput
          type="text"
          labelText="直播連結"
          inputText="輸入直播連結"
          inputStyle="text-14 w-full h-[53px]"
          id="liveLink"
          register={register}
          errors={errors}
          rules={{
            required: {
              value: true,
              message: '請輸入直播連結!',
            },
          }}
        />
        <div className="mt-40 mb-32 flex items-center gap-16">
          <h3 className=" text-20 font-semibold ">選擇直播農產品</h3>
          <button
            type="button"
            className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white"
            onClick={onAddProductClick}>
            新增直播農產品
          </button>
        </div>
        <div className="pr-48 mb-40">
          <div className="flex gap-24 mb-16 relative">
            <BsXCircleFill
              size={24}
              className=" absolute top-0 -right-48 text-darkGray cursor-pointer hover:opacity-70"
            />
            <LiveProductSelect
              control={control}
              id={'liveProduct-0' as keyof FormValues}
            />
            <ProductSpecSelect
              control={control}
              id={'liveProductSpec-0' as keyof FormValues}
            />
            <PersonInput
              type="number"
              labelText="直播特惠價格"
              inputText="輸入直播特惠價格"
              inputStyle="text-14 w-full h-[53px]"
              id={'liveSpectialPrice-0' as keyof FormValues}
              register={register}
            />
          </div>
          {products.map((_, index) => (
            <div key={index} className="flex gap-24 mb-16 relative">
              <BsXCircleFill
                size={24}
                className="absolute top-0 -right-48 text-darkGray cursor-pointer hover:opacity-70"
                onClick={() => onDeleteProductClick(index)}
              />
              <LiveProductSelect
                control={control}
                id={`liveProduct-${index + 1}` as keyof FormValues}
              />
              <ProductSpecSelect
                control={control}
                id={`liveProductSpec-${index + 1}` as keyof FormValues}
              />
              <PersonInput
                type="number"
                labelText="直播特惠價格"
                inputText="輸入直播特惠價格"
                inputStyle="text-14 w-full h-[53px]"
                id={`liveSpectialPrice-${index + 1}` as keyof FormValues}
                register={register}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-32">
          <h3 className=" text-20 font-semibold ">選擇直播聊天室置頂農產品</h3>
          <ProductToChatSelect control={control} />
        </div>
        <Button category="submit" classStyle="self-end hover:opacity-70">
          儲存
        </Button>
      </form>
    </div>
  );
};

export default LiveSettings;
