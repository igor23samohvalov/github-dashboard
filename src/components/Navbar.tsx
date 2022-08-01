import { useNavigate } from 'react-router-dom';
import { Container } from './styles/Container.styled';
import { BsGithub } from 'react-icons/bs';
import { Header, Wrapper, Title} from './styles/Header.styled';

function Navbar() {
  const navigate = useNavigate();
  return (
    <Header>
      <Container>
        <Wrapper>
          <Title onClick={() => navigate('')}><BsGithub /> GitHub Dashboard</Title>
        </Wrapper>
      </Container>
    </Header>
  );
};

export default Navbar;