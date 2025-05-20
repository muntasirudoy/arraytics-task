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
  PriceSuffix,
  TopBadge,
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

const CardTopBadge = ({ badge, variant }) => {
  if (!badge) return null;
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <TopBadge>
      <Badge padding={"4px 8px"} bgColor={theme.badgeColor}>
        {badge}
      </Badge>
    </TopBadge>
  );
};

const CardTitleBlock = ({ title }) => <CardTitle>{title}</CardTitle>;

const CardPrice = ({ price, suffix, variant }) => {
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <Price $color={theme.primary}>
      {price}
      {suffix && <PriceSuffix>/{suffix}</PriceSuffix>}
    </Price>
  );
};

const CardSubtitle = ({ subtitle, variant, icon }) => {
  const theme = cardThemes[variant] || cardThemes.blue;
  if (!subtitle) return null;

  return (
    <Badge
      bgColor={theme.primary}
      color={theme.primary}
      rounded
      opacity={0.12}
      icon={icon}
    >
      <span dangerouslySetInnerHTML={{ __html: subtitle }} />
    </Badge>
  );
};

const Header = ({
  title,
  price,
  subtitle,
  badge,
  suffix = "",
  variant,
  icon,
}) => {
  return (
    <CardHeader>
      <CardTopBadge badge={badge} variant={variant} />
      <CardTitleBlock title={title} />
      <CardPrice price={price} suffix={suffix} variant={variant} />
      <CardSubtitle subtitle={subtitle} variant={variant} icon={icon} />
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
