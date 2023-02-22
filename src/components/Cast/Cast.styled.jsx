import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 7fr));
  gap: ${({ theme }) => theme.spacing(5)};
`;
