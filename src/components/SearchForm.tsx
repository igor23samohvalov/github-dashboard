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
    if (searchValue) {
      console.log('page is changed')
      handleSearch(searchValue, page);
    }
  }, [page]);
  useEffect(() => {

    console.log('serach input value is changed')
    setPage(1);
    handleSearch(searchValue, page);

  }, [searchValue]);

  const handleSearch = useCallback(debounce(async (value: string, page: number) => {
    setLoading(true);
    
    try {
      const isEmpty = value.length === 0;
      const query: string = isEmpty 
        ? routeDefault(limit)
        : routeByName(value, limit, page);

      const res = await axios.get(query);
      const data = await res.data;
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
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Repository Name"
      />
    </Form>
  )
}

export default SearchForm