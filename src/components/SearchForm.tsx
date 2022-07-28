import { useEffect, useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { routeByName, routeDefault } from '../routing';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Form = styled.form`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  padding: 10px 15px 10px 35px;
  border: 2px solid #333;
  border-radius: 5px;
`;
const StyledIcon = styled(FaSearch)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

interface ISearchForm {
  page: number;
  limit: number;
  handleResponse: any;
  setPage: any;
  setLoading: any;
};

function SearchForm({
  page,
  limit,
  handleResponse,
  setPage,
  setLoading
}: ISearchForm) {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(routeDefault(limit))
      .then((res) => res.data)
      .then((data) => handleResponse(data.items, data.total_count, true))
      .catch(() => navigate('404'))
  }, []);
  useEffect(() => {
    handleSearch(searchValue, page);
  }, [page]);
  useEffect(() => {
    setPage(1);
    handleSearch(searchValue, page);
  }, [searchValue]);

  const handleSearch = useCallback(debounce(async (value: string, page: number) => {
    setLoading(true);
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
      <StyledIcon />
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