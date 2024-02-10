import PersonInput from '@/common/components/Input/PersonInput';
import ManagementSelect from '@/common/components/Select/ManagementSelect';
import { BsPlusCircle, BsXCircleFill } from 'react-icons/bs';
import { format } from 'date-fns';
import {
  categoryData,
  countyData,
  seasonData,
  statusData,
  storageData,
} from './data';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';
import Button from '@/common/components/Button';
import Editor from '@/common/components/Editor';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import Toast from '@/common/components/Toast';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AddProduct = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>();
  useEffect(() => {
    setValue('productState', 'false');
  }, []);
  const onSubmit = async (data: FormValues) => {
    const updateStateTime = format(new Date(), 'yyyy/MM/dd');
    const dataObj = {
      updateStateTime,
      productState: Boolean(data.productState),
      category: data.category,
      description: data.description.trim(),
      productTitle: data.productTitle.trim(),
      period: data.period,
      origin: data.origin,
      storage: data.storage,
      introduction: data.introduction,
      largeOriginalPrice: Number(data.largeOriginalPrice),
      largePromotionPrice: Number(data.largePromotionPrice),
      largeWeight: Number(data.largeWeight),
      largeStock: Number(data.largeStock),
      smallOriginalPrice: Number(data.smallOriginalPrice),
      smallPromotionPrice: Number(data.smallPromotionPrice),
      smallWeight: Number(data.smallWeight),
      smallStock: Number(data.smallStock),
    };
    console.log(dataObj);

    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    const apiParams: apiParamsType = {
      apiPath: nextRoutes['addproduct'],
      method: 'POST',
      data: dataObj,
    };
    const url = `/api${nextRoutes['uploadProductImg']}`;
    const imgParams = {
      method: 'POST',
      body: formData,
    };
    try {
      const result = await fetchNextApi(apiParams);

      if (result.statusCode !== 200) {
        setToastMessage(`${result.message}`);
        return;
      }
      const imgResponse = await fetch(url, imgParams);
      const imgResult = await imgResponse.json();

      if (imgResult.statusCode !== 200) {
        setToastMessage(`${imgResult.message}`);
        return;
      }
      if (result.statusCode === 200 && imgResult.statusCode === 200) {
        reset();
        setSelectedFiles([]);
        setPreviewImages([]);
        setToastMessage(`${result.message}`);
      } else {
        setToastMessage(`${result.message || imgResult.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const newFiles = Array.from(event.target.files);
    const totalFiles = [...selectedFiles, ...newFiles].slice(0, 5); // 合併並限制最大檔案數量

    setSelectedFiles(totalFiles); // 更新狀態以包含所有選擇的檔案

    // 更新預覽圖片
    const newPreviewUrls = totalFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(newPreviewUrls);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (index: number) => {
    // 移除選定的檔案
    const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newSelectedFiles);

    // 移除對應的預覽圖片
    const newPreviewImages = previewImages.filter((_, i) => i !== index);
    setPreviewImages(newPreviewImages);

    // 釋放被刪除圖片的URL
    URL.revokeObjectURL(previewImages[index]);
  };
  return (
    <>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
      <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
        <h3 className=" text-20 font-semibold mb-32">新增農產品</h3>
        <div className="flex items-center gap-16">
          {/* 上傳圖片 */}
          <div className="mb-24 flex flex-col items-center">
            <p className="mb-8">農產品圖片</p>
            <div className="w-100 h-100 border-2 border-dashed rounded-[4px] flex justify-center items-center">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
                multiple
                ref={fileInputRef}
              />
              <BsPlusCircle
                size={24}
                className=" text-lightGray cursor-pointer"
                onClick={triggerFileInput}
              />
            </div>
          </div>
          {previewImages.length > 0 && (
            <div className="mb-24">
              <p>
                <span className=" text-primary-red">*</span>(限5張)
              </p>
              <ul className="flex gap-16">
                {previewImages.map((previewImage, index) => (
                  <li key={index} className=" relative mt-8">
                    <Image
                      src={previewImage}
                      width={100}
                      height={100}
                      alt="Preview"
                      className="w-100 h-100"
                    />
                    <BsXCircleFill
                      size={24}
                      onClick={() => handleRemoveImage(index)}
                      className=" cursor-pointer hover:text-black absolute top-8 right-8 text-white"
                    />
                  </li>
                ))}
              </ul>
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
              labelText="農產品名稱"
              inputText="輸入商品名稱"
              inputStyle="text-14 w-full h-[53px]"
              id="productTitle"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入農產品名稱!',
                },
              }}
            />
            <ManagementSelect
              labelText="農產品狀態"
              data={statusData}
              control={control}
              id="productState"
            />
          </div>
          <div className="flex gap-24">
            <PersonInput
              type="number"
              labelText="規格 (小份)"
              inputText="輸入小份規格 (斤)"
              inputStyle="text-14 w-full h-[53px]"
              id="smallWeight"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入規格!',
                },
              }}
            />
            <PersonInput
              type="number"
              labelText="原價"
              inputText="輸入原價"
              inputStyle="text-14 w-full h-[53px]"
              id="smallOriginalPrice"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入金額!',
                },
              }}
            />
            <PersonInput
              type="number"
              labelText="促銷價"
              inputText="輸入優惠價"
              inputStyle="text-14 w-full h-[53px]"
              id="smallPromotionPrice"
              register={register}
            />
            <PersonInput
              type="number"
              labelText="農產品庫存"
              inputText="輸入農產品庫存"
              inputStyle="text-14 w-full h-[53px]"
              id="smallStock"
              register={register}
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請輸入庫存量!',
                },
              }}
            />
          </div>
          <div className="flex gap-24">
            <PersonInput
              type="number"
              labelText="規格 (大份)"
              inputText="輸入小份規格 (斤)"
              inputStyle="text-14 w-full h-[53px]"
              id="largeWeight"
              register={register}
            />
            <PersonInput
              type="number"
              labelText="原價"
              inputText="輸入原價"
              inputStyle="text-14 w-full h-[53px]"
              id="largeOriginalPrice"
              register={register}
            />
            <PersonInput
              type="number"
              labelText="促銷價"
              inputText="輸入優惠價"
              inputStyle="text-14 w-full h-[53px]"
              id="largePromotionPrice"
              register={register}
            />
            <PersonInput
              type="number"
              labelText="農產品庫存"
              inputText="輸入農產品庫存"
              inputStyle="text-14 w-full h-[53px]"
              id="largeStock"
              register={register}
            />
          </div>
          <div className="flex gap-24">
            <ManagementSelect
              labelText="產地"
              data={countyData}
              control={control}
              placeholder="請選擇產地"
              id="origin"
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請選擇產地!',
                },
              }}
            />
            <ManagementSelect
              labelText="保存方式"
              placeholder="請選擇保存方式"
              data={storageData}
              control={control}
              id="storage"
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請選擇保存方式!',
                },
              }}
            />
          </div>
          <div className="flex gap-24">
            <ManagementSelect
              labelText="產季"
              data={seasonData}
              control={control}
              placeholder="請選擇產季"
              id="period"
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請選擇產季!',
                },
              }}
            />
            <ManagementSelect
              labelText="類別"
              placeholder="請選擇類別"
              data={categoryData}
              control={control}
              id="category"
              errors={errors}
              rules={{
                required: {
                  value: true,
                  message: '請選擇類別!',
                },
              }}
            />
          </div>
          <PersonInput
            type="text"
            labelText="農產品簡述"
            inputText="輸入農產品簡述"
            inputStyle="text-14 w-full h-[53px]"
            id="description"
            register={register}
            errors={errors}
            rules={{
              required: {
                value: true,
                message: '請輸入簡短描述!',
              },
            }}
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
    </>
  );
};

export default AddProduct;
