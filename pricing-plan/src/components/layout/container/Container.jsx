import { Content } from "./Container.styled";

const Container = ({ children, ...rest }) => {
  return <Content {...rest}>{children}</Content>;
};

export default Container;
