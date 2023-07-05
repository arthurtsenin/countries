import { useState, useEffect, useMemo } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import { Container } from "../../views/Container";
import { THEME } from "../../../constatnts/theme";

import { HeaderEl, Wrapper, Title, ModeSwitcher } from "./Header.style";

export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const currentTheme = useMemo(
    () => (theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT),
    [theme]
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === THEME.LIGHT ? <IoMoon /> : <IoMoonOutline />}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
