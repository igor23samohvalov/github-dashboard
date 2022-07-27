import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IRepoPreview } from '../types/RepoTypes';

import GitHubButton from './GitHubButton';
import StarsBadge from './StarsBadge';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 15px 20px;
  background-color: #724C9D;
  color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`;
const Title = styled.h4`
  display: block;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-top: 15px;
  margin-right: -20px;
  margin-left: -20px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-bottom: 2px solid #fff;
  cursor: pointer;
  margin-top: 0;

  &:hover {
    background-color: #2C1B47;
  };
`;
const HelperText = styled.span`
  display: block;
  font-size: 9px;
  text-transform: uppercase;
`;


function RepositoryPreview({ repo }: { repo: IRepoPreview}) {
  const navigate = useNavigate()
  return (
    <Card>
      <Title onClick={() => navigate(`${repo.owner.login}/${repo.name}`)}>{repo.name}</Title>
      <StarsBadge>{repo.stargazers_count}</StarsBadge>
      <div>
        <HelperText>Last update</HelperText>
        {repo.updated_at.split('T').join(' at ').slice(0, -1)}
      </div>
      <GitHubButton href={repo.html_url} align={'flex-end'}>
        GitHub
      </GitHubButton>
    </Card>
  );
};



export default RepositoryPreview;