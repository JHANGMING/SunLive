import { locationData } from '@/constants/location';
import { useState, useEffect } from 'react';
import { OptionType } from '../components/Select/LocationSelect/data';

const useZipOptions = (selectedDistrict: string): OptionType[] => {
  const [zipOptions, setZipOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const cityData = locationData.find((city) =>
      city.districts.some((district) => district.name === selectedDistrict)
    );

    if (cityData) {
      const districtData = cityData.districts.find(
        (district) => district.name === selectedDistrict
      );
      if (districtData) {
        setZipOptions([{ value: districtData.zip, label: districtData.zip }]);
      }
    } else {
      setZipOptions([]);
    }
  }, [selectedDistrict]);

  return zipOptions;
};

export default useZipOptions;
