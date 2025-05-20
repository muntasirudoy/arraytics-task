import { Content } from "./Container.styles";

const Container = ({ children, ...rest }) => {
  return <Content {...rest}>{children}</Content>;
};

export default Container;
