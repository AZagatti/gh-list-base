import { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Layout } from "src/components";

import { Form } from "./styles";

export const Home: React.FC = () => {
  const [username, setUsername] = useState({ value: "", error: false });
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username.value.trim()) {
      return history.push(`/repos/${username.value}`);
    }

    setUsername((state) => ({ ...state, error: true }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername({ error: false, value: e.target.value });
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <h2>SEARCH</h2>
        <Input
          label="Username"
          placeholder="Digite seu username..."
          name="username"
          error={username.error ? "Digite um username válido." : null}
          value={username.value}
          onChange={handleChange}
        />
        <button type="submit">Listar</button>
      </Form>
    </Layout>
  );
};
