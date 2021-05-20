import styled from 'styled-components';

export const Main = styled.main`
  height: 100%;
  background-color: var(--color-background);
  padding: 7rem 15rem;

  & > ul > li {
    margin-bottom: 2rem;
  }
`;

export const Empty = styled.p`
  text-align: center;
`;