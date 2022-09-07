import { useEffect, useState } from "react";

import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const urlRocketseat = "https://api.github.com/orgs/rocketseat/repos";
  const urlMyRepositories = "https://api.github.com/users/osniantonio/repos";

  useEffect(() => {
    fetch(urlRocketseat)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((e) => console.log(e));
  }, []);

  console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
