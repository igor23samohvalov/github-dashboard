import { useEffect, useCallback, useState } from 'react';
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
  setPage: any;
};

function SearchForm({ page, limit, handleResponse, setPage }: ISearchForm) {
  const [searchValue, setSearchValue] = useState<string>('');


  useEffect(() => {
    axios.get(routeDefault(limit))
      .then((res) => res.data)
      .then((data) => handleResponse(data.items, data.total_count, true))
  }, []);
  useEffect(() => {
    handleSearch(searchValue, page);
  }, [page]);
  useEffect(() => {
    setPage(1);
    handleSearch(searchValue, page);
  }, [searchValue])

  const handleSearch = useCallback(debounce(async (value: string, page: number) => {
    const isEmpty = value.length === 0;

    const query: string = isEmpty 
      ? routeDefault(limit)
      : routeByName(value, limit, page);

    const res = await axios.get(query);
    const data = await res.data;

    handleResponse(data.items, data.total_count, isEmpty);
  }, 500), []);


  return (
    <Form>
      <Input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Repository Name"
      />
    </Form>
  )
}

export default SearchForm