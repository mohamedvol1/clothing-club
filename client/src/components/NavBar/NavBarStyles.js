import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddBarContainer = styled.div`
  width: 100%;
  height: 35px;  
  background: linear-gradient(90deg,#ed145b 0,#7b31f4);;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: sticky;
  top: -1px;
  z-index: 1600;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: black;
  height: 68px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 1px;
  z-index: 1600;
`

export const LogoContainer = styled(Link)`
  display: block;
  padding-left: 20px;
  transform: rotateX(180deg);
  padding-top: 2px;
`

export const  OptionsDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  margin: 0px 15px;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`