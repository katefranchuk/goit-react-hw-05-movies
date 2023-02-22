import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FcFilmReel } from 'react-icons/fc';

import { Container } from 'components/Container/Container.styled';
import { Header, Navigation, Logo, MenuList } from './PageHeader.styled';

export const PageHeader = () => {
  return (
    <Header>
      <Container>
        <Navigation>
          <Logo to="/">
            <FcFilmReel size={24} />
            Movies
          </Logo>
          <MenuList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="movies">Movie</NavLink>
            </li>
          </MenuList>
        </Navigation>
      </Container>
    </Header>
  );
};
