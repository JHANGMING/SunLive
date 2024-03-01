import { Control } from 'react-hook-form';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { locationData } from '@/constants/location';
import { FormValues } from '../../Input/data';

export type LocationSelectProps = {
  id: string;
  countyName: string;
  districtName: string;
  control: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  register?: UseFormRegister<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};
export const countyOptions: OptionType[] = locationData.map((city) => ({
  value: city.name,
  label: city.name,
}));

export const getInitialDistrictOptions = (cityName: string) => {
  const city = locationData.find((city) => city.name === cityName);
  if (city && city.districts) {
    return city.districts.map((district) => ({
      label: district.name,
      value: district.name,
    }));
  }
  return [];
};
