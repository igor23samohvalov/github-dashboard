import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container';
import { BsGithub } from 'react-icons/bs';

const Header = styled.header`
  background-color: #2C1B47;
  z-index: 1000;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 0;
`;
const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  > * {
    margin-right: 10px;
  };
`;

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