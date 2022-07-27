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
  width: 650px;
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
  &:nth-of-type(2) {
    justify-content: space-evenly;
  }
`;
const CardImg = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  border: 5px solid #fff;
`;
const Description = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  color: #724C9D;
  border-radius: 15px;
  text-align: center;
`;
const Badge = styled.div`
  border: 1px solid #fff;
  border-radius: 2px;
  display: inline-block;
  font-size: 12px;
  margin-left: 7px;
  padding: 7px;
`;
const HelperText = styled.span`
  display: block;
  font-size: 9px;
  text-transform: uppercase;
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
      <Wrapper>
        <Card>
          <CardSide>
            <CardImg src={repo.owner.avatar_url} alt="avatar" />
            <h3>{repo.owner.login}</h3>
            <GitHubButton href={repo.owner.html_url} align={'center'}>
              GitHub
            </GitHubButton>
          </CardSide>
          <CardSide>
            <h3>{repo.name}</h3>
            <StarsBadge>{repo.stargazers_count}</StarsBadge>
            <div>
              <HelperText>Last update</HelperText>
              {repo.updated_at.split('T').join(' at ').slice(0, -1)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start' }}>
              Languages: 
              <Badge>
                {repo.language
                  ? repo.language
                  : 'No languages were specified'}
              </Badge>
            </div>            
            <Description>
              <p style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 0,
              }}>
                Description
              </p>
              {repo.description 
                ? repo.description
                : 'No description was provided to this repoistory'}
            </Description>
          </CardSide>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;