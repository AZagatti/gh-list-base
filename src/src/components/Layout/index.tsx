import logoImg from 'src/assets/images/logo.png'

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <img
          src={logoImg}
          alt="Github Logo"
        />
      </header>

      <main>
        {children}
      </main>

      <footer>Github List - {new Date().getFullYear()}</footer>
    </Container>
  );
}

export default Layout;