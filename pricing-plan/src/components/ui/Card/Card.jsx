import Badge from "../Badge/Badge";
import {
  CardContainer,
  FeatureItem,
  FeatureList,
  Price,
  Subtitle,
} from "./Card.styles";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const Header = ({ title, price, subtitle, badge }) => (
  <CardHeader>
    {badge && <Badge>{badge}</Badge>}
    <CardTitle>{title}</CardTitle>
    <Price>{price}</Price>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </CardHeader>
);

const Features = ({ children }) => <FeatureList>{children}</FeatureList>;

const Feature = ({ children }) => <FeatureItem>{children}</FeatureItem>;

const Action = ({ onClick, label }) => (
  <SelectPlanButton onClick={onClick}>{label}</SelectPlanButton>
);

Card.Header = Header;
Card.Features = Features;
Card.Feature = Feature;
Card.Action = Action;

Card.displayName = "Card";
export default Card;
