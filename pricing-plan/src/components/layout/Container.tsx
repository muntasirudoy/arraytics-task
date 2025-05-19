import styled from "styled-components";

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
`;

const Container = ({ children }) => {
    return (
        <Content>
            {children}
        </Content>
    );
}

export default Container;