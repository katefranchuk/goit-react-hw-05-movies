import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonGoBack = styled(Link)`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing(2)};

  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(5)}`};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
