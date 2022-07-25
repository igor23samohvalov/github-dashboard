import { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import Pagination from '../components/Pagination';
import RepositoryPreview from '../components/RepositoryPreview';
import SearchForm from '../components/SearchForm';
import { IRepoPreview } from '../types/RepoTypes';

const LIMIT: number = 10;

function MainPage() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);

  const handleResponse = (repos: any[], totalRepos: number, empty?: boolean) => {
    console.log('handled response')
    setRepositories(repos);
    if (empty) setPages(1)
    else setPages(Math.ceil(totalRepos / 10));
  }

  return (
    <main>
      <Container>
        <SearchForm page={page} limit={LIMIT} handleResponse={handleResponse} />
        {repositories.map((repo, i) => <RepositoryPreview key={i} repo={repo} />)}
        {pages
          ? <Pagination length={pages} />
          : <></>
        }
      </Container>
    </main>
  );
};

export default MainPage;