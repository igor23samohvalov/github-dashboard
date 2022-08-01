import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  line-height: 16px;

  > * {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 50%;
    padding: 7px;

    &:hover {
      background-color: #DCCAE9;
      color: #fff;
    }
  }
  .active {    
    background-color: #724C9D;
    font-weight: bold;
    color: #fff;
    cursor: default;
  }
`;