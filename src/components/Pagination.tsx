import { uniqueId } from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  line-height: 16px;

  > * {
    display: inline-block;
    margin-right: 10px;
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

const rangeArray = (start: number, length: number): number[] => {
  const result = [];
  for (let i = start; i <= length; i += 1) {
    result.push(i)
  }
  return result;
};

function Pagination({ length, page, setPage }: { length: number, page: number, setPage: any }) {
  const [pagesArray, settlePagesArray] = useState<(string | number)[]>([1]);

  useEffect(() => {
    if (length < 6) {
      settlePagesArray(rangeArray(1, length))
    } else {
      const firstPage = 1;
      const lastPage = length;

      if (page < 5) {
        settlePagesArray([...rangeArray(firstPage, 5), '...', lastPage]);
      } else if (page > (lastPage - 4)) {
        settlePagesArray([firstPage, '...', ...rangeArray(lastPage - 4, lastPage)]);
      } else {
        settlePagesArray([firstPage, '...', ...rangeArray(page - 1, page + 1), '...', lastPage])
      }
    }
  }, [page, length]);

  const handleClick = (i: number | string) => {
    if (i !== '...') setPage(i)
  };

  return (
    <Wrapper>
      {pagesArray.map((i) => (
        <div
          key={uniqueId()}
          className={page === (i) ? 'active' : ''}
          onClick={() => handleClick(i)}
        >
          {i}
        </div>
      ))}
    </Wrapper>
  );
};

export default Pagination;