import { format } from 'date-fns';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsPlusCircle, BsXCircleFill } from 'react-icons/bs';
import Button from '@/common/components/Button';
import DatePickerShow from '@/common/components/DatePicker';
import PersonInput from '@/common/components/Input/PersonInput';
import { FormValues } from '@/common/components/Input/data';
import LiveProductSelect from '@/common/components/Select/Live/ProductSelect';
import ProductSpecSelect from '@/common/components/Select/Live/ProductSpecSelect';
import ProductToChatSelect from '@/common/components/Select/Live/ProductToChatSelect';
import LiveTimeSelect from '@/common/components/Select/LiveTimeSelect';
import Image from '@/common/components/CustomImage';
import { LiveDataType, transformLiveData } from '@/common/helpers/transDataForLiveSelect';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import { LiveListDataType } from '../data';


const LiveSettings = () => {
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null); 
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,

  } = useForm<FormValues>();

  

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     if (!event.target.files || event.target.files.length === 0) return;
     const file = event.target.files[0];
     setSelectedFile(file);
     const previewUrl = URL.createObjectURL(file);
     setPreviewImage(previewUrl);
   };
   const handleRemoveImage = () => {
     setSelectedFile(null);
     setPreviewImage(null);
     if (previewImage) URL.revokeObjectURL(previewImage);
   };
  const onAddProductClick = () => {
    setProducts([...products, {}]);
  };
   const onDeleteProductClick = (index: number) => {
     const updatedProducts = products.filter((_, idx) => idx !== index);
     setProducts(updatedProducts);
   };
  const onSubmit = async(data:FormValues) => {
    
    //儲存日期格式
    let formattedDate = '';
    if (data.datePicker) {
      formattedDate = format(new Date(data.datePicker), 'yyyy/MM/dd');
    }
    const liveproduct = transformLiveData(data as unknown as LiveDataType);
    const dataObj = {
      liveName: data.liveName,
      liveDate: formattedDate,
      startTime: data.startTime,
      endTime: data.endTime,
      yturl: data.yturl,
      liveproduct,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['addlive'],
      method: 'POST',
      data: dataObj,
    };
        
    console.log(dataObj);
    try {
      const result = await fetchNextApi(apiParams);
      console.log('live', result);
      // if (result.statusCode === 200) {
      //   mutate('/api/cart/getcart');
      // } else {
      //   dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
      // }
    } catch (error) {
      console.log(error);
    }

 
    // reset();
  };
  

  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <h3 className=" text-20 font-semibold mb-32">直播設定</h3>
      {/* 上傳圖片 */}
      <div className="flex gap-16 items-center">
        <div className="mb-24">
          <p className="mb-8">直播圖片</p>
          <div
            className="w-100 h-100 border-2 border-dashed rounded-[4px] flex justify-center items-center cursor-pointer hover:opacity-70"
            // onClick={handleAddImageClick}
            onClick={triggerFileInput}>
            <BsPlusCircle size={24} className=" text-lightGray" />
          </div>
          {/* 隐藏的文件输入 */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {previewImage && (
          <div className="mt-4 relative">
            <Image
              src={previewImage}
              alt="Preview"
              className="w-100 h-100 "
              roundedStyle="object-cover"
            />
            <BsXCircleFill
              size={24}
              onClick={handleRemoveImage}
              className=" cursor-pointer hover:text-black absolute top-8 right-8 text-white"
            />
          </div>
        )}
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
          id="yturl"
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
              id={'liveProduct_0' as keyof FormValues}
            />
            <ProductSpecSelect
              control={control}
              id={'liveProductSpec_0' as keyof FormValues}
            />
            <PersonInput
              type="number"
              labelText="直播特惠價格"
              inputText="輸入直播特惠價格"
              inputStyle="text-14 w-full h-[53px]"
              id={'liveSpectialPrice_0' as keyof FormValues}
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
                id={`liveProduct_${index + 1}` as keyof FormValues}
              />
              <ProductSpecSelect
                control={control}
                id={`liveProductSpec_${index + 1}` as keyof FormValues}
              />
              <PersonInput
                type="number"
                labelText="直播特惠價格"
                inputText="輸入直播特惠價格"
                inputStyle="text-14 w-full h-[53px]"
                id={`liveSpectialPrice_${index + 1}` as keyof FormValues}
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
