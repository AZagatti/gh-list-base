import { Repo } from "src/pages";
import { Container } from "./styles";

interface ListItemProps {
  repo: Repo;
}

export const ListItem: React.FC<ListItemProps> = ({ repo }) => {
  return (
    <Container>
      <header>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
      </header>
      <main>
        <a target="_blank" href={repo.html_url} rel="noreferrer noopener">
          {repo.stargazers_count} stars
        </a>
        <a target="_blank" href={repo.html_url} rel="noreferrer noopener">
          {repo.forks} forks
        </a>
        <a
          target="_blank"
          href={`${repo.html_url}/issues`}
          rel="noreferrer noopener"
        >
          {repo.open_issues} issues
        </a>
        <a target="_blank" href={repo.html_url} rel="noreferrer noopener">
          {repo.license?.spdx_id || "Void"}
        </a>
        <a target="_blank" href={repo.html_url} rel="noreferrer noopener">
          {repo.language || "Void"}
        </a>
      </main>
    </Container>
  );
};
