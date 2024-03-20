import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsPlusCircle, BsXCircleFill } from 'react-icons/bs';
import Button from '@/common/components/Button';
import Image from '@/common/components/CustomImage';
import { nextRoutes } from '@/constants/api/apiPaths';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { FormValues } from '@/common/components/Input/data';
import DatePickerShow from '@/common/components/DatePicker';
import { addliveParams } from '@/constants/api/nextApiParams';
import PersonInput from '@/common/components/Input/PersonInput';
import { setToast, showLoading } from '@/redux/features/messageSlice';
import LiveTimeSelect from '@/common/components/Select/LiveTimeSelect';
import LiveProductSelect from '@/common/components/Select/Live/ProductSelect';
import ProductSpecSelect from '@/common/components/Select/Live/ProductSpecSelect';
import {
  LiveDataType,
  transformLiveData,
} from '@/common/helpers/transDataForLiveSelect';
import LiveAccontVerify from './LiveAccontVerify';

const LiveSettings = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [accessToken, setAccessToken] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
    setProducts([...products, { id: uuidv4() }]);
  };
  const onDeleteProductClick = (productId: string) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );
    setProducts(updatedProducts);
  };
  const onSubmit = async (data: FormValues) => {
    // 儲存日期格式
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
      yturl: 'data',
      liveproduct,
      accessToken,
    };
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const imgParams = {
        method: 'POST',
        body: formData,
      };
      const apiParams = { ...addliveParams, data: dataObj };
      try {
        const result = await fetchNextApi(apiParams);

        if (result.statusCode !== 200) {
          dispatch(setToast({ message: result.message }));
          return;
        }
        if (result.statusCode === 200) {
          dispatch(showLoading());
          const url = `/api${nextRoutes.uploadliveImg}?id=${result.data.liveId}`;
          const imgResponse = await fetch(url, imgParams);
          const imgResult = await imgResponse.json();
          if (imgResult.statusCode !== 200) {
            dispatch(setToast({ message: imgResult.message }));
            return;
          }
          if (result.statusCode === 200 && imgResult.statusCode === 200) {
            setSelectedFile(null);
            setPreviewImage(null);
            dispatch(setToast({ message: result.message }));
            reset();
          } else {
            dispatch(
              setToast({ message: result.message || imgResult.message }),
            );
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-9/12 flex-grow flex flex-col self-start">
      <LiveAccontVerify
        accessToken={accessToken}
        setAccessToken={setAccessToken}
      />
      <div className="bg-white rounded-20 p-32 flex flex-col">
        <h3 className=" text-20 font-semibold mb-32">直播設定</h3>
        {/* 上傳圖片 */}
        <div className="flex gap-16 items-center">
          <div className="mb-24">
            <p className="mb-8">直播圖片</p>
            <button
              type="button"
              aria-label="EditLiveImg"
              className="w-100 h-100 border-2 border-dashed rounded-[4px] flex justify-center items-center cursor-pointer hover:opacity-70"
              onClick={triggerFileInput}
            >
              <BsPlusCircle size={24} className=" text-lightGray" />
            </button>
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
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <label htmlFor="liveData" className="text-16 block mb-8">
                直播日期
              </label>
              <DatePickerShow
                id="liveData"
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

          <div className="mt-40 mb-32 flex items-center gap-16">
            <h3 className=" text-20 font-semibold ">選擇直播農產品</h3>
            <button
              type="button"
              className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white"
              onClick={onAddProductClick}
            >
              新增直播農產品
            </button>
          </div>
          <div className="pr-48">
            <div className="flex gap-24 mb-16 relative">
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
            {products.map((product) => (
              <div key={product.id} className="flex gap-24 mb-16 relative">
                <BsXCircleFill
                  size={24}
                  className="absolute top-0 -right-48 text-darkGray cursor-pointer hover:opacity-70"
                  onClick={() => onDeleteProductClick(product.id)}
                />
                <LiveProductSelect
                  control={control}
                  id={`liveProduct_${product.id}` as keyof FormValues}
                />
                <ProductSpecSelect
                  control={control}
                  id={`liveProductSpec_${product.id}` as keyof FormValues}
                />
                <PersonInput
                  type="number"
                  labelText="直播特惠價格"
                  inputText="輸入直播特惠價格"
                  inputStyle="text-14 w-full h-[53px]"
                  id={`liveSpectialPrice_${product.id}` as keyof FormValues}
                  register={register}
                />
              </div>
            ))}
          </div>
          <Button
            category="submit"
            classStyle={`self-end  ${!accessToken ? 'bg-darkGray' : 'bg-primary-green hover:opacity-70'}`}
            // disabled={!accessToken}
          >
            儲存
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LiveSettings;
