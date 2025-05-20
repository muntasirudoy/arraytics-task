import {
  CardContainer,
  CardHeader,
  CardTitle,
  FeatureItem,
  FeatureList,
  Price,
  SelectPlanButton,
  Subtitle,
} from "./Card.styles";
import Badge from "../Badge/Badge";

const Card = ({ children, borderColor }) => {
  return <CardContainer borderColor={borderColor}>{children}</CardContainer>;
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

const Action = ({ onClick, label, bgColor }) => (
  <SelectPlanButton onClick={onClick} bgColor={bgColor}>
    {label}
  </SelectPlanButton>
);

Card.Header = Header;
Card.Features = Features;
Card.Feature = Feature;
Card.Action = Action;

export default Card;
