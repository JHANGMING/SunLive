import { locationData } from "@/constants/location";
import { ListDataType } from "@/constants/types/product/farmer_prodcut";
import { DetailproductDataType } from "@/constants/types/dashboard/detailProduct";
import { EditSettingType } from "@/constants/types/dashboard/liveSettings";
import { LivelistType } from "@/constants/types/dashboard/livelist";
import { LivesDataType } from "@/constants/types/live/live";
import { LivedetailDateType } from "@/constants/types/live/livedetailDate";


export type OptionType = {
  value: string;
  label: string;
};

export type OnSubmitType = {
  (data: FormData): void;
};

export type EditProductsProps = {
  detailData:DetailproductDataType;
};

export type LiveproductProps = {
  productId: number;
  productSize: boolean; // 小為false、大為 true
  liveprice: number;
};

export type EditLiveProps = {
  liveDetailData: LivedetailDateType;
};

export type LiveListProps = {
  listData: LivelistType[];
};

export type AddLiveDataType = {
  datePicker?: string;
  liveName: string;
  liveDate: string;
  startTime: string;
  endTime: string;
  yturl: string;
};

export type ProductPorps = {
  listData: ListDataType[];
}

export type EditLiveProductProps = {
  liveId: number;
}

export type LiveProductType = {
  liveProductId: string;
  liveProductName: string;
  liveProductPhoto: string;
  liveProductPrice: number;
  liveProductStock: number;
};

export const statusData: OptionType[] = [
  { value: 'false', label: '下架' },
  { value: 'true', label: '上架' },
];

export const countyData: OptionType[] = locationData.map((item) => ({
  value: item.name,
  label: item.name,
}));

export type AllProductsProps = {
  onAddProductClick: () => void;
};

export type AllOrdersProps = {
  selectedTab?: string; 
  onTabChange?: (newTab: string) => void; 
}
export const storageData: OptionType[] = [
  { value: '冷藏保存', label: '冷藏保存' },
  { value: '冷凍保存', label: '冷凍保存' },
  { value: '常溫保存', label: '常溫保存' },
];

export const seasonData: OptionType[] = [
  { value: '春季產品', label: '春季產品' },
  { value: '夏季產品', label: '夏季產品' },
  { value: '秋季產品', label: '秋季產品' },
  { value: '冬季產品', label: '冬季產品' },
];

export const categoryData: OptionType[] = [
  { value: '蔬菜', label: '蔬菜' },
  { value: '水果', label: '水果' },
];