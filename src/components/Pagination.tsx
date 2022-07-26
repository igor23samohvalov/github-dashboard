import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  line-height: 16px;

  > * {
    margin-right: 5px;
  }
  .active {
    font-weight: bold;
    font-size: 16px;
  }
`;

function Pagination({ length, page }: { length: number, page: number }) {

  return (
    <Wrapper>
      {new Array(length).fill(length).slice(0, 5).map((_, i) => (
        <div key={i} className={page === (i + 1) ? 'active' : ''}>
          {i + 1}
        </div>
      ))}
    </Wrapper>
  )
}

export default Pagination