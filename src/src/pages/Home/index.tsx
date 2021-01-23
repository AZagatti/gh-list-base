import Input from "src/components/Input";
import Layout from "src/components/Layout";

import { Form } from "./styles";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Form>
        <h2>SEARCH</h2>
        <Input
          label="Username"
          placeholder="Digite seu username..."
          name="username"
        />
        <button type="submit">Listar</button>
      </Form>
    </Layout>
  );
};
