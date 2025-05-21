/**
 * @module Card
 */
import cardThemes from "../../../utils/card-theme";
import Badge from "../Badge";

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
  Del,
  FeatureTitle,
} from "./card-styles";

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

const CardPrice = ({ price, suffix, variant, del }) => {
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <Price $color={theme.primary}>
      {price}
      {suffix && (
        <PriceSuffix>
          <Del>{del && del + suffix}</Del>
          {suffix}
        </PriceSuffix>
      )}
    </Price>
  );
};

const Header = ({ title, price, badge, suffix = "", variant, del }) => {
  return (
    <CardHeader>
      <CardTopBadge badge={badge} variant={variant} />
      <CardTitleBlock title={title} />
      <CardPrice price={price} suffix={suffix} variant={variant} del={del} />
    </CardHeader>
  );
};

const CardSubtitle = ({ children, variant, icon }) => {
  const theme = cardThemes[variant] || cardThemes.blue;
  if (!children) return null;

  return (
    <Badge
      bgColor={theme.primary}
      color={theme.primary}
      rounded
      opacity={0.12}
      icon={icon}
    >
      <span dangerouslySetInnerHTML={{ __html: children }} />
    </Badge>
  );
};

const Features = ({ children }) => <FeatureList>{children}</FeatureList>;
const Title = ({ children }) => <FeatureTitle>{children}</FeatureTitle>;
const Feature = ({ children }) => <FeatureItem>{children}</FeatureItem>;

const Action = ({ onClick, label, variant }) => {
  const theme = cardThemes[variant] || cardThemes.blue;
  return (
    <SelectPlanButton onClick={onClick} $bgColor={theme.buttonColor}>
      {label}
    </SelectPlanButton>
  );
};
Card.Subtitle = CardSubtitle;
Card.Header = Header;
Card.Features = Features;
Card.Feature = Feature;
Card.Action = Action;
Card.FeatureTitle = Title;
export default Card;
