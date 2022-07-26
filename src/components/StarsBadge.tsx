import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1.5px solid #fff;
  border-radius: 5px;
  width: 60px;
  font-size: 12px;
  font-weight: bold;
`;

function StarsBadge({ children }: { children: number }) {
  return (
    <StarsContainer><FaStar /> {children}</StarsContainer>
  );
};

export default StarsBadge;