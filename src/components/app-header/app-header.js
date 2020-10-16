import React from 'react';
import styled from 'styled-components';
import './app-header.css';

const Header = styled.div`
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ?  'black' : 'grey'};
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = (props) => {
  return (
    <Header colored>
      <h1>Комарова Вероника</h1>
      <h2>{props.allPosts} записей из них понравилось {props.liked}</h2>
    </Header>
  )
}

export default AppHeader;
