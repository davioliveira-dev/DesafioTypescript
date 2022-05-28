import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.blue};
  box-shadow: ${(props) => props.theme.shadows.default};
  color: #fff;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 30px;

  h1 {
    cursor: pointer;
  }
`;
