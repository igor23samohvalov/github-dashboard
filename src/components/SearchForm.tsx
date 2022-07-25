import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import { routeByName, routeDefault } from '../routing';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid #333;
  border-radius: 5px;
`;

interface ISearchForm {
  page: number;
  limit: number;
  handleResponse: any;
};

function SearchForm({ page, limit, handleResponse }: ISearchForm) {

  useEffect(() => {
    axios.get(routeDefault(limit))
      .then((res) => res.data)
      .then((data) => handleResponse(data.items, data.total_count, true))
  }, []);

  const handleSearch = useCallback(
    debounce(async (value: string) => {
      const isEmpty = value.length === 0;

      const query: string = isEmpty 
        ? routeDefault(limit)
        : routeByName(value, limit, page);

      const res = await axios.get(query);
      const data = await res.data;
      handleResponse(data.items, data.total_count, isEmpty);
    }, 500),
    []
  )

  const handleInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    handleSearch(e.target.value);
  }

  return (
    <Form>
      <Input type="search" onChange={handleInput} placeholder="Repository Name"/>
    </Form>
  )
}

export default SearchForm