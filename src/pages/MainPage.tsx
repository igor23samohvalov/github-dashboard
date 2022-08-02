import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/styles/Container.styled';
import Loader from '../components/styles/Loader';
import { routeDefault, routeByName } from '../routing';
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
interface IQuery {
  value: string;
  page: number;
}

const PAGES_LIMIT = 100;
const PER_PAGE_LIMIT = 10;

function MainPage() {
  const navigate = useNavigate();
  const [defaultValue, setDefaultValue] = useState<string>('');
  const [repositories, setRepositories] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async function() {
      try {
        let query = routeDefault(PER_PAGE_LIMIT);
        const storage = localStorage.getItem('lastQuery');

        if (storage) {
          const lastQuery: IQuery = JSON.parse(storage);
          setPage(lastQuery.page);
          setDefaultValue(lastQuery.value);

          query = routeByName(lastQuery.value, PER_PAGE_LIMIT, lastQuery.page)
        }

        const res = await axios.get(query);
        const data = await res.data;
        handleResponse(data.items, data.total_count, Boolean(!storage));
      } catch(e) {
        navigate('404');
      }
    })();
  }, []);

  const handleResponse = (repos: any[], totalRepos: number, empty?: boolean) => {
    totalRepos = totalRepos > PAGES_LIMIT ? PAGES_LIMIT : totalRepos;
    setRepositories(repos);

    if (empty) {
      setPages(1);
      localStorage.removeItem('lastQuery')
    } else {
      setPages(Math.ceil(totalRepos / 10))
    }
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
          defaultValue={defaultValue}
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