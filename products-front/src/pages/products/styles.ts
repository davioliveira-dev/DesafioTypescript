import { Button } from "@material/react-button";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: grid;
  min-height: 91.4vh;
  place-items: center;
`;

export const CustomButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.background} !important;
  border-color: ${(props) => props.theme.colors.background} !important;
  box-shadow: ${(props) => props.theme.shadows.default};
`;
