import { Content } from "./Container.styles";

const Container = ({ children, ...rest }) => {
  return <Content {...rest}>{children}</Content>;
};

Container.displayName = "Container";
export default Container;
