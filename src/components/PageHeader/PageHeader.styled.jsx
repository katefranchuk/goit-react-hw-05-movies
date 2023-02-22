import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing(20)};
`;

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing(1)};
`;

export const MenuList = styled.ul`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(12)};
`;
