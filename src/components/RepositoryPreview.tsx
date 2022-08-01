import { useNavigate } from 'react-router-dom';
import { IRepoPreview } from '../types/RepoTypes';

import GitHubButton from './styles/GitHubButton';
import StarsBadge from './styles/StarsBadge';
import { Card, Title, CardBody, HelperText } from './styles/CardPreview.styled';

function RepositoryPreview({ repo }: { repo: IRepoPreview}) {
  const navigate = useNavigate()
  return (
    <Card
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Title onClick={() => navigate(`${repo.owner.login}/${repo.name}`)}>{repo.name}</Title>
      <CardBody>
        <StarsBadge>{repo.stargazers_count}</StarsBadge>
        <div>
          <HelperText>Last update</HelperText>
          {repo.updated_at.split('T').join(' at ').slice(0, -1)}
        </div>
        <GitHubButton 
          href={repo.html_url}
          type={'preview'}
        >
          GitHub
        </GitHubButton>
      </CardBody>
  
    </Card>
  );
};



export default RepositoryPreview;