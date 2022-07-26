import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Container';
import GitHubButton from '../components/GitHubButton';
import StarsBadge from '../components/StarsBadge';
import { routeContributors, routeRepository } from '../routing';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #724C9D;
  color: #fff;
  width: 600px;
  height: 500px;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
const CardSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;

  &:first-of-type {
    border-right: 2px dashed #fff;
  }
`;
const CardImg = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border: 5px solid #fff;
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
const Description = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  color: #724C9D;
  border-radius: 15px;
`;

function DetailPage() {
  const [contributors, setContributos] = useState<string[]>([]);
  const [repo, setRepo] = useState<any>(boilerplateRepo);
  const { name, title } = useParams<any>();

  useEffect(() => {
    axios.get(routeRepository(name, title))
      .then((res) => res.data)
      .then((data) => setRepo(data))
  }, []);
  return (
    <Container>
      <Wrapper>
        <Card>
          <CardSide>
            <CardImg src={repo.owner.avatar_url} alt="avatar" />
            <p>Author: {repo.owner.login}</p>
            <GitHubButton href={repo.owner.html_url}>
              GitHub
            </GitHubButton>
          </CardSide>
          <CardSide>
            <h4>Repository name: {repo.name}</h4>
            <StarsBadge>{repo.stargazers_count}</StarsBadge>
            <i>Last updated: {repo.updated_at}</i>
            <p>Languages: {repo.language}</p>
            <Description>
              <p style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 0,
              }}>
                Description
              </p>
              {repo.description}
            </Description>
          </CardSide>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;