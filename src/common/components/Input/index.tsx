import { DefaultInputProps } from './data';

const DefaultInput = ({
  type,
  labelText,
  inputText,
  icon,
  id,
  register,
  rules,
  errors,
  page,
  globalStyle,
}: DefaultInputProps) => {
  const inputClassName = `w-full border rounded-8 py-12 pl-12 text-black ${
    errors && id in errors ? 'border-primary-red' : 'border-lightGray'
  }`;
  const labelSytle = page === 'cart' ? 'text-18' : 'text-20 font-bold';
  const inputSytle = page === 'cart' ? 'w-[595px] h-[59px]' : 'h-48';
  return (
    <div className={globalStyle}>
      <label htmlFor={id} className={`${labelSytle} block mb-8`}>
        {labelText} <span className=" text-primary-red">{icon}</span>
      </label>
      <input
        type={type}
        placeholder={inputText}
        id={id}
        {...(register && register(id, rules))}
        className={`focus-visible:outline-primary-green tracking-widest ${inputSytle} ${inputClassName}`}
      />
      {errors && id in errors && (
        <p className=" text-primary-red mt-8">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default DefaultInput;
