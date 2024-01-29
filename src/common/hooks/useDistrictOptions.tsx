import { locationData } from '@/constants/location';
import { useState, useEffect } from 'react';
import { OptionType } from '../components/Select/LocationSelect/data';

const useDistrictOptions = (selectedCounty: string): OptionType[] => {
  const [districtOptions, setDistrictOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const selectedCityData = locationData.find(
      (city) => city.name === selectedCounty
    );
    if (selectedCityData) {
      const newDistrictOptions = selectedCityData.districts.map((district) => ({
        value: district.name,
        label: district.name,
      }));
      setDistrictOptions(newDistrictOptions);
    } else {
      setDistrictOptions([]);
    }
  }, [selectedCounty]);

  return districtOptions;
};

export default useDistrictOptions;
