import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IRepoPreview } from '../types/RepoTypes';

const Card = styled.div`
  display: flex;
  padding: 20px 10px;
  justify-content: space-evenly;
  align-items: center;
  background-color: blue;
  color: #fff;
  margin-bottom: 10px;
`;
const Title = styled.h4`
  cursor: pointer;
  &:hover {
    scale: 1.2rem;
  }
`

function RepositoryPreview({ repo }: { repo: IRepoPreview}) {
  const navigate = useNavigate()
  return (
    <Card>
      <Title onClick={() => navigate(`${repo.owner.login}/${repo.name}`)}>Repository name: {repo.name}</Title>
      <div>Stars count: {repo.stargazers_count}</div>
      <span>Last updated: {repo.updated_at}</span>
      <a href={repo.html_url}>Watch on GitHub</a>
    </Card>
  );
};

export default RepositoryPreview;