import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Form = styled.form`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  `;
export const Input = styled.input`
  padding: 10px 15px 10px 35px;
  border: 2px solid #333;
  border-radius: 5px;
  `;
export const StyledIcon = styled(FaSearch)`
  position: absolute;
  top: 10px;
  left: 10px;
`;
