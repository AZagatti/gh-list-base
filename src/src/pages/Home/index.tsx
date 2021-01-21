import { Container } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <form>
        <h1>Github Repos</h1>
        <input type="text" />
        <button type="submit">Visualizar</button>
      </form>
    </Container>
  );
};
