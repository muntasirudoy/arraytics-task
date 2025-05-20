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
  PriceSuffix,
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

const Header = ({ title, price, subtitle, badge, variant, suffix = "" }) => {
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <CardHeader>
      {badge && <Badge bgColor={theme.badgeColor}>{badge}</Badge>}
      <CardTitle>{title}</CardTitle>
      <Price $color={theme.primary}>
        {price} {suffix && <PriceSuffix>/{suffix}</PriceSuffix>}
      </Price>
      {subtitle && (
        <Subtitle
          dangerouslySetInnerHTML={{ __html: subtitle }}
          $bgColor={theme.primary}
          $color={theme.primary}
        />
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
