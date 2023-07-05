import { Container } from "../../views/Container";

import { Wrapper } from "./Main.styles";

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
