import { locationData } from "@/constants/location";

export type OptionType = {
  value: string;
  label: string;
};

export type OnSubmitType = {
  (data: FormData): void;
};

export const statusData: OptionType[] = [
  { value: '下架', label: '下架' },
  { value: '上架', label: '上架' },
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