import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Container } from '../components/styles/Container.styled';
import GitHubButton from '../components/styles/GitHubButton';
import Loader from '../components/styles/Loader';
import { routeRepository } from '../routing';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Banner,
  CardImg,
  Name,
  Title,
  Actions,
  FollowInfo,
  Description,
} from '../components/styles/DetailCard.styled';

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const boilerplateRepo = {
  name: 'unkonwn',
  stargazers_count: 0,
  updated_at: 'unknown',
  owner: {
    avatar_url: '#',
    login: 'unkonwn',
    html_url: '#',
  },
  language: 'unkonwn',
  description: 'unkonwn',
};
function DetailPage() {
  const navigate = useNavigate();

  const [contributors, setContributors] = useState<string[]>([]);
  const [repo, setRepo] = useState<any>(boilerplateRepo);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { name, title } = useParams<any>();

  useEffect(() => {
    setLoading(true);
    axios.get(routeRepository(name, title))
      .then((res) => res.data)
      .then((data) => {
        setRepo(data);
        axios.get(data.contributors_url)
          .then((res) => setContributors(res.data.map(({ login }: { login: string}) => login)));
      })
      .then(() => setLoading(false))
      .catch(() => navigate('/404'))
  }, []);
  return (
    <Container>
      {isLoading
        ? <Loader />
        : <Wrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <Banner>
                <CardImg src={repo.owner.avatar_url} />
              </Banner>
              <div style={{ height: '5.5rem'}}></div>
              <Name>@{repo.owner.login}</Name>
              <Title>{repo.name}</Title>
              <Actions>
                <FollowInfo>
                  <h2>
                    <span>{repo.stargazers_count}</span>
                    <div className="small">Stars</div>
                  </h2>
                  <h2>
                    <span>{contributors.length}</span>
                    <div className="small">Contributors</div>
                  </h2>
                </FollowInfo>
                <Description>
                  {repo.description || 'No description was provided for this repository'}
                </Description>
                <GitHubButton
                  href={repo.owner.html_url}
                  type={'detail'}
                >
                  GitHub Account
                </GitHubButton>
              </Actions>
            </Card>
          </Wrapper>
      } 
    </Container>
  );
};

export default DetailPage;