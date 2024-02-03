import {PersonInputProps } from './data';

const PersonInput = ({
  type,
  labelText,
  labelStyle,
  inputText,
  inputStyle,
  id,
  register,
  rules,
  errors,
  value,
  isdisabled,
}: PersonInputProps) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className={`${labelStyle} block mb-8`}>
        {labelText}
      </label>
      <input
        type={type}
        placeholder={inputText}
        id={id}
        name={id}
        min={type === 'number' ? 0 : undefined}
        value={value}
        {...(register && register(id, rules))}
        disabled={isdisabled}
        className={`focus-visible:outline-primary-green tracking-widest p-16 w-full rounded-8 border border-lightGray ${inputStyle}`}
      />
      {errors && id in errors && (
        <p className=" text-primary-red mt-8">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default PersonInput;
