import AddToCartButton from './AddToCartButton';
import AuthButton from './AuthButton';
import SubmitButton from './SubmitButton';
import { ButtonPropsType } from './data';

const Button = ({
  category,
  path,
  onClick,
  children,
  classStyle,
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
      return <SubmitButton classStyle={classStyle}>{children}</SubmitButton>;
    default:
      return null;
  }
};

export default Button;
