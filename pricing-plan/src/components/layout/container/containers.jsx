import { Content } from "./containers-styles";

const Container = ({ children, ...rest }) => {
  return <Content {...rest}>{children}</Content>;
};

Container.displayName = "Container";
export default Container;
