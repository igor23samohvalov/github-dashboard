import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2C1B47;
  color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 0;
`;
export const Title = styled.span`
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