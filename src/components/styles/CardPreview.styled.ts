import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #724C9D;
  color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`;
export const Title = styled.h4`
  display: block;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-top: 15px;
  margin: 0;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-bottom: 2px solid #fff;
  cursor: pointer;
  margin-top: 0;

  &:hover {
    background-color: #2C1B47;
  };
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
export const HelperText = styled.span`
  display: block;
  font-size: 9px;
  text-transform: uppercase;
`;