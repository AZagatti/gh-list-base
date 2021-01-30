import { Link } from "react-router-dom";
import logoImg from "src/assets/images/logo.png";

import { Container } from "./styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <Link to="/">
          <img src={logoImg} alt="Github Logo" />
        </Link>
      </header>

      <main>{children}</main>

      <footer>Github List - {new Date().getFullYear()}</footer>
    </Container>
  );
};
