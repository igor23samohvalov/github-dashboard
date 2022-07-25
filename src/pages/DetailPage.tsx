import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { routeContributors, routeRepository } from '../routing';

const Card = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-evenly;
  align-items: center;
  background-color: blue;
  color: #fff;
  margin-bottom: 10px;
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
      <Card>
        <h4>Repository name: {repo.name}</h4>
        <div>Stars count: {repo.stargazers_count}</div>
        <span>Last updated: {repo.updated_at}</span>
        <img src={repo.owner.avatar_url} alt="avatar" />
        <p>Languages: {repo.language}</p>
        <p>Author: {repo.owner.login}</p>
        <a href={repo.owner.html_url}>Author url: </a>
        <p>Description: {repo.description}</p>
      </Card>
    </Container>
  );
};

export default DetailPage;