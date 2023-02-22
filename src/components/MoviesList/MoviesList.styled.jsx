import styled from 'styled-components';

export const MoviesListEl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
  gap: ${({ theme }) => theme.spacing(5)};
`;
