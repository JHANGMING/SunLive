import AuthButton from './AuthButton';
import { ButtonPropsType } from './data';
import SubmitButton from './SubmitButton';
import DefaultButton from './DefaultButton';
import AddToCartButton from './AddToCartButton';

const Button = ({
  category,
  path,
  onClick,
  children,
  classStyle,
  disabled,
  type,
  ...props
}: ButtonPropsType) => {
  switch (category) {
    case 'addCart':
      return (
        <AddToCartButton onClick={onClick} {...props}>
          {children}
        </AddToCartButton>
      );
    case 'auth':
      return (
        <AuthButton
          type={type}
          onClick={onClick}
          classStyle={classStyle}
          {...props}>
          {children}
        </AuthButton>
      );
    case 'submit':
      return (
        <SubmitButton classStyle={classStyle} disabled={disabled}>
          {children}
        </SubmitButton>
      );
    case 'default':
      return (
        <DefaultButton
          classStyle={classStyle}
          onClick={onClick}
          disabled={disabled}>
          {children}
        </DefaultButton>
      );
    default:
      return null;
  }
};

export default Button;
