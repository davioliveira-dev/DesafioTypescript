import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme.title === "light" ? "#fff" : "#000"};
  box-shadow: ${(props) => props.theme.shadows.default};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  margin-left: 30px;
  padding: 1rem;
  width: 300px;

  > div {
    display: grid;
    place-items: center;
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  p {
    margin: 10px 5px;
  }

  @media (max-width: 1441px) {
    margin: 10px;
  }

  @media (max-width: 1025px) {
    margin: 10px;
  }
`;
