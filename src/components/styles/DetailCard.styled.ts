import styled from 'styled-components';

export const Card = styled.div`
  background-color: var(--color-white);
  max-width: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  margin-top: 4rem;
  box-shadow: var(--shadow);
`;
export const Banner = styled.div`
  background: rgb(155,34,195);
  background: linear-gradient(0deg, rgba(155,34,195,1) 0%, rgba(8,4,128,1) 100%);
  height: 11rem;
  display flex;
  align-items: flex-end;
  justify-content: center;
`;
export const CardImg = styled.img`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transform: translateY(50%);
  background-color: var(--color-white);
`;
export const Name = styled.h2`
  text-align: center;
  padding: 0 2rem 0.5rem;
  margin: 0;
`;
export const Title = styled.div`
  color: lighten(#404040, 50%);
  font-size 0.85rem;
  text-align: center;
  padding: 0 2rem 1.2rem;
`;
export const Actions = styled.div`
  padding: 0 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  order: 99;
`;
export const FollowInfo = styled.div`
  padding: 0 0 1rem;
  display: flex;

  h2 {
    text-align: center;
    width: 50%;
    margin: 0;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;

    span {
      color: #1c9eff;
      font-weight: bold;
    };
    .small {
      color: #afafaf;
      font-size: 0.85rem;
      font-weight: normal;
    };
  };
`;
export const Description = styled.div`
  width: 80%;
  align-self: center;
  margin-bottom: 1rem;
  text-align: justify;
  padding: 1rem;
  border-radius: 5px;
  color: #fff;
  background-color: #724C9D;
`;