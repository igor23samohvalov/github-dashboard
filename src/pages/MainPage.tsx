import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import RepositoryPreview from '../components/RepositoryPreview';
import SearchForm from '../components/SearchForm';

const ReposContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PAGES_LIMIT = 100;
const PER_PAGE_LIMIT = 10;

function MainPage() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleResponse = (repos: any[], totalRepos: number, empty?: boolean) => {
    totalRepos = totalRepos > PAGES_LIMIT ? PAGES_LIMIT : totalRepos;
    setRepositories(repos);
    
    if (empty) setPages(1)
    else setPages(Math.ceil(totalRepos / 10))
    setLoading(false);
  };

  return (
    <main>
      <Container>
        <SearchForm
          page={page}
          setPage={setPage}
          limit={PER_PAGE_LIMIT}
          handleResponse={handleResponse}
          setLoading={setLoading}
        />
        {isLoading
          ? <Loader />
          : (<>
              <ReposContainer>
                {repositories.map((repo, i) => <RepositoryPreview key={i} repo={repo} />)}
              </ReposContainer>
              <Pagination length={pages} page={page} setPage={setPage}/>
            </>)
        }

      </Container>
    </main>
  );
};

export default MainPage;