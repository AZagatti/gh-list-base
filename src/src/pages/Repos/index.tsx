import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, ListItem } from "src/components";
import Loader from "src/components/Loader";
import { fetchUserRepos } from "src/repository/user";
import { List, Pagination, ErrorWrapper } from "./styles";

type Error = "generic" | "last-page" | "";

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  license: {
    spdx_id: string;
  } | null;
  forks: number;
  open_issues: number;
}

export const Repos: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  const [repos, setRepo] = useState<Repo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>("");

  useEffect(() => {
    if (username) {
      (async () => {
        setLoading(true);
        setError("");
        try {
          const { data } = await fetchUserRepos(username, { page: page });
          setRepo((state) => (data.length ? data : state));
          if (!data.length) {
            setError("last-page");
          }
        } catch (error) {
          setError("generic");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [username, page]);

  const previousPage = () => {
    setPage((state) => state - 1);
  };

  const nextPage = () => {
    setPage((state) => state + 1);
  };

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  if (error === "generic") {
    return (
      <Layout>
        <ErrorWrapper>
          <h2>{"Ocorreu um erro ao buscar os repositórios :("}</h2>
          <Link to="/">Voltar</Link>
        </ErrorWrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      <List>
        {repos.map((repo) => (
          <ListItem key={repo.id} repo={repo} />
        ))}
      </List>
      <Pagination>
        <button type="button" onClick={previousPage} disabled={page === 1}>
          &lt;
        </button>
        <button
          type="button"
          onClick={nextPage}
          disabled={error === "last-page"}
        >
          &gt;
        </button>
      </Pagination>
    </Layout>
  );
};
