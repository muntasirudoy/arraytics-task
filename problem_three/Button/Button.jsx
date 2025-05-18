import { ButtonWrapper, ArrowIcon } from "./Button.styles";
import { getVariantStyle } from "./variant-config";

const Button = ({ variant = "primary", children, onClick }) => {
  const { bg, color, icon } = getVariantStyle(variant);

  return (
    <ButtonWrapper bg={bg} color={color} onClick={onClick}>
      {icon && <ArrowIcon>→</ArrowIcon>}
      {children}
    </ButtonWrapper>
  );
};

Button.displayName = "Button";

export default Button;
