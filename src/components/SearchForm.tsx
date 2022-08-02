import { useEffect, useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { routeByName, routeDefault } from '../routing';
import { Form, Input, StyledIcon } from './styles/SearchForm.styled';


interface ISearchForm {
  page: number;
  limit: number;
  handleResponse: any;
  setPage: any;
  setLoading: any;
  defaultValue: string;
};

function SearchForm({
  page,
  limit,
  handleResponse,
  setPage,
  setLoading,
  defaultValue
}: ISearchForm) {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue(defaultValue);
  }, [defaultValue])
  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue, page);
    }
  }, [page]);

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
    setPage(1);
    handleSearch(e.target.value, page);
  };
  const handleSearch = useCallback(debounce(async (value: string, page: number) => {
    setLoading(true);

    try {
      const isEmpty = value.length === 0;
      const query: string = isEmpty 
        ? routeDefault(limit)
        : routeByName(value, limit, page);

      const res = await axios.get(query);
      const data = await res.data;
      localStorage.setItem('lastQuery', JSON.stringify({ value, page }));
      handleResponse(data.items, data.total_count, isEmpty);
    } catch (e) {
      navigate('404');
    }
  }, 500), []);


  return (
    <Form>
      <StyledIcon />
      <Input
        type="search"
        value={searchValue}
        onChange={handleChange}
        placeholder="Repository Name"
      />
    </Form>
  )
}

export default SearchForm