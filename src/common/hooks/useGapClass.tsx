import { FieldErrors } from 'react-hook-form';
import { FormValues } from '../components/Input/data';
export const useGapClass = (errors: FieldErrors<FormValues>) => {
  const errorCount = Object.keys(errors).length;

  switch (errorCount) {
    case 0:
      return 'gap-24 mt-60 mb-60';
    case 1:
      return 'gap-24 mt-40 mb-48';
    case 2:
      return 'gap-24 mt-20 mb-48';
    case 3:
      return 'gap-16 mt-20 mb-28';
    case 4:
      return 'gap-16 mt-20 mb-20';
    default:
      return null;
  }
};
