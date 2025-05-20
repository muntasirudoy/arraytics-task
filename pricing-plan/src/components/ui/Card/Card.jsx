import cardThemes from "../../../utils/card-theme";
import Badge from "../Badge/Badge";
import {
  CardContainer,
  CardHeader,
  CardTitle,
  CardTopStripe,
  FeatureItem,
  FeatureList,
  Price,
  SelectPlanButton,
  Subtitle,
} from "./Card.styles";

const Card = ({ children, variant = "blue" }) => {
  const theme = cardThemes[variant] || cardThemes.blue;
  return (
    <CardContainer $borderColor={theme.borderColor}>
      <CardTopStripe $bgColor={theme.primary} />
      {children}
    </CardContainer>
  );
};

const Header = ({ title, price, subtitle, badge, variant }) => {
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <CardHeader>
      {badge && <Badge bgColor={theme.badgeColor}>{badge}</Badge>}
      <CardTitle>{title}</CardTitle>
      <Price $color={theme.primary}>{price}</Price>
      {subtitle && (
        <Subtitle $bgColor={theme.primary} $color={theme.primary}>
          {subtitle}
        </Subtitle>
      )}
    </CardHeader>
  );
};

const Features = ({ children }) => <FeatureList>{children}</FeatureList>;

const Feature = ({ children }) => <FeatureItem>{children}</FeatureItem>;

const Action = ({ onClick, label, variant }) => {
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <SelectPlanButton onClick={onClick} $bgColor={theme.buttonColor}>
      {label}
    </SelectPlanButton>
  );
};

Card.Header = Header;
Card.Features = Features;
Card.Feature = Feature;
Card.Action = Action;

export default Card;
