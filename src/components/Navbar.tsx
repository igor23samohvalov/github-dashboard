import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container';

const Header = styled.header`
  background-color: blue;
  z-index: 1000;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

function Navbar() {
  const navigate = useNavigate();
  return (
    <Header>
      <Container>
        <Wrapper>
          <Title onClick={() => navigate('')}>GitHub Dashboard</Title>
        </Wrapper>
      </Container>
    </Header>
  );
};

export default Navbar;