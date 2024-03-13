import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BsPlusCircle, BsXCircleFill } from 'react-icons/bs';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Button from '@/common/components/Button';
import Editor from '@/common/components/Editor';
import { nextRoutes } from '@/constants/api/apiPaths';
import Image from '@/common/components/CustomImage';
import { setToast } from '@/redux/features/messageSlice';
import { FormValues } from '@/common/components/Input/data';
import PersonInput from '@/common/components/Input/PersonInput';
import ManagementSelect from '@/common/components/Select/ManagementSelect';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';
import {
  PreviewImagesProps,
  SelectedFilesProps,
  categoryData,
  countyData,
  seasonData,
  statusData,
  storageData,
} from './data';

const AddProduct = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesProps[]>([]);
  const [previewImages, setPreviewImages] = useState<PreviewImagesProps[]>([]);
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    setValue('productState', 'false');
  }, []);
  const onSubmit = async (data: FormValues) => {
    const updateStateTime = format(new Date(), 'yyyy/MM/dd');
    const dataObj = {
      updateStateTime,
      period: data.period,
      origin: data.origin,
      storage: data.storage,
      category: data.category,
      introduction: data.introduction,
      smallStock: Number(data.smallStock),
      largeStock: Number(data.largeStock),
      description: data.description.trim(),
      smallWeight: Number(data.smallWeight),
      largeWeight: Number(data.largeWeight),
      productTitle: data.productTitle.trim(),
      productState: Boolean(data.productState),
      smallOriginalPrice: Number(data.smallOriginalPrice),
      largeOriginalPrice: Number(data.largeOriginalPrice),
      smallPromotionPrice: Number(data.smallPromotionPrice),
      largePromotionPrice: Number(data.largePromotionPrice),
    };
    const formData = new FormData();
    selectedFiles.forEach(({ file }, index) => {
      formData.append(`file${index}`, file);
    });

    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.addproduct,
      method: 'POST',
      data: dataObj,
    };

    const imgParams = {
      method: 'POST',
      body: formData,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode !== 200) {
        dispatch(setToast({ message: result.message }));
        return;
      }
      if (result.statusCode === 200) {
        const url = `/api${nextRoutes.uploadProductImg}?id=${result.data.productId}`;
        const imgResponse = await fetch(url, imgParams);
        const imgResult = await imgResponse.json();
        if (imgResult.statusCode !== 200) {
          dispatch(setToast({ message: imgResult.message }));
          return;
        }
        if (result.statusCode === 200 && imgResult.statusCode === 200) {
          reset();
          setSelectedFiles([]);
          setPreviewImages([]);
          dispatch(setToast({ message: result.message }));
        } else {
          dispatch(setToast({ message: result.message || imgResult.message }));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const newFiles = Array.from(event.target.files).map((file) => ({
      file,
      id: uuidv4(),
    }));
    const totalFiles = [...selectedFiles, ...newFiles].slice(0, 5); // 合併並限制最大檔案數量
    setSelectedFiles(totalFiles); // 更新狀態以包含所有選擇的檔案
    // 更新預覽圖片
    const newPreviewUrls = totalFiles.map(({ file, id }) => ({
      url: URL.createObjectURL(file),
      id, // 使用相同的uuid
    }));
    setPreviewImages(newPreviewUrls);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (id: string) => {
    // 移除選定的檔案
    const newSelectedFiles = selectedFiles.filter((file) => file.id !== id);
    const newPreviewImages = previewImages.filter((image) => image.id !== id);

    setSelectedFiles(newSelectedFiles);
    setPreviewImages(newPreviewImages);
    // 釋放被刪除圖片的URL
    const imageToRevoke = previewImages.find((image) => image.id === id);
    if (imageToRevoke) {
      URL.revokeObjectURL(imageToRevoke.url);
    }
  };
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <h3 className=" text-20 font-semibold mb-32">新增農產品</h3>
      <div className="flex items-center gap-16">
        {/* 上傳圖片 */}
        <div className="mb-24 flex flex-col items-center">
          <p className="mb-8">農產品圖片</p>
          <button
            type="button"
            aria-label="EditFileImg"
            className="w-100 h-100 border-2 border-dashed rounded-[4px] flex justify-center items-center hover:opacity-70"
            onClick={triggerFileInput}
          >
            <BsPlusCircle
              size={24}
              className=" text-lightGray cursor-pointer"
            />
            <input
              type="file"
              id="fileInput"
              className="hidden w-full h-full "
              onChange={handleFileChange}
              accept="image/*"
              multiple
              ref={fileInputRef}
            />
          </button>
        </div>
        {previewImages.length > 0 && (
          <div className="mb-24">
            <p>
              <span className=" text-primary-red">*</span>
              (限5張)
            </p>
            <ul className="flex gap-16">
              {previewImages.map(({ url, id }) => (
                <li key={id} className=" relative mt-8">
                  <Image
                    src={url}
                    alt="Preview"
                    className="w-100 h-100"
                    roundedStyle="object-cover"
                  />
                  <BsXCircleFill
                    size={24}
                    onClick={() => handleRemoveImage(id)}
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
        onSubmit={handleSubmit(onSubmit)}
      >
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
            inputText="輸入大份規格 (斤)"
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
        <Button
          category="submit"
          classStyle="bg-primary-green self-end hover:opacity-70"
        >
          新增
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
