import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  min-height: 100vh;
  place-items: center;

  @media (max-width: 1441px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
