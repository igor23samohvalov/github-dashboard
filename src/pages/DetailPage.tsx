import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Container } from '../components/Container';
import { GitHubButtonOne } from '../components/GitHubButton';
import Loader from '../components/Loader';
import { routeRepository } from '../routing';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  background-color: white;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  margin-top: 4rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
const Banner = styled.div`
  background: rgb(155,34,195);
  background: linear-gradient(0deg, rgba(155,34,195,1) 0%, rgba(8,4,128,1) 100%);
  height: 11rem;
  display flex;
  align-items: flex-end;
  justify-content: center;
`;
const CardImg = styled.img`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transform: translateY(50%);
  background-color: #fff;
`;
const Name = styled.h2`
  text-align: center;
  padding: 0 2rem 0.5rem;
  margin: 0;
`;
const Title = styled.div`
  color: lighten(#404040, 50%);
  font-size 0.85rem;
  text-align: center;
  padding: 0 2rem 1.2rem;
`;
const Actions = styled.div`
  padding: 0 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  order: 99;
`;
const FollowInfo = styled.div`
  padding: 0 0 1rem;
  display: flex;

  h2 {
    text-align: center;
    width: 50%;
    margin: 0;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;

    span {
      color: #1c9eff;
      font-weight: bold;
    };
    .small {
      color: #afafaf;
      font-size: 0.85rem;
      font-weight: normal;
    };
  };
`;
const Description = styled.div`
  text-align: justify;
  padding: 0 2rem 2.5rem;
  order: 100;
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
                <GitHubButtonOne
                  href={repo.owner.html_url}
                >
                  Profile on GitHub
                </GitHubButtonOne>
                <Description>{repo.description}</Description>
              </Actions>
            </Card>
          </Wrapper>
      } 
    </Container>
  );
};

export default DetailPage;