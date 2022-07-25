import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed blue;
  padding: 10px 0;
  color: #333;
`;

function Pagination({ length }: { length: number }) {

  return (
    <Wrapper>
      {new Array(length).fill(length).slice(0, 5).map((_, i) => <div key={i}>{i + 1}</div>)}
    </Wrapper>
  )
}

export default Pagination