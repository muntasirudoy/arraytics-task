import { ButtonWrapper } from "./Button.styles";
import { getVariantStyle } from "./variant-config";

const Button = ({ variant, children }) => {
  const { bg, color } = getVariantStyle(variant);

  return (
    <ButtonWrapper bg={bg} color={color}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
