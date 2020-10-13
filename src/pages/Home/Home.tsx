import React from 'react';
import styled from '../../styled';

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100%;
  min-height: 100vh;
  padding: 2rem 0;
`;

const Home = (): JSX.Element => (
  <Main>
    React Elm Playground
  </Main>
);

export default Home;
