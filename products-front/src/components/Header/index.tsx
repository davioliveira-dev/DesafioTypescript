import { useRouter } from "next/router";
import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const router = useRouter();
  const { colors, title, text } = useContext(ThemeContext);

  return (
    <Container>
      <h1 style={text.heading} onClick={() => router.push("/")}>
        Products
      </h1>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={"#292929"}
        onColor={"#292929"}
      />
    </Container>
  );
};

export default Header;
