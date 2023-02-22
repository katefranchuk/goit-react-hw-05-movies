import styled from 'styled-components';

export const DetailsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(8)} auto;
  column-gap: ${({ theme }) => theme.spacing(5)};
`;
