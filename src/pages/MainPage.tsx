import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import Pagination from '../components/Pagination';
import RepositoryPreview from '../components/RepositoryPreview';
import SearchForm from '../components/SearchForm';

const ReposContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px 50px;
`;

const PAGES_LIMIT = 100;
const PER_PAGE_LIMIT = 10;

function MainPage() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);

  const handleResponse = (repos: any[], totalRepos: number, empty?: boolean) => {
    totalRepos = totalRepos > PAGES_LIMIT ? PAGES_LIMIT : totalRepos;
    console.log('handled response')
    setRepositories(repos);
    if (empty) setPages(1)
    else setPages(Math.ceil(totalRepos / 10))
  };

  return (
    <main>
      <Container>
        <SearchForm page={page} setPage={setPage} limit={PER_PAGE_LIMIT} handleResponse={handleResponse} />
        <ReposContainer>
          {repositories.map((repo, i) => <RepositoryPreview key={i} repo={repo} />)}
        </ReposContainer>
        <Pagination length={pages} page={page} setPage={setPage}/>
      </Container>
    </main>
  );
};

export default MainPage;