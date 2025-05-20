import { CardContainer } from "./Card.styles";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
Card.displayName = "Card";
export default Card;
