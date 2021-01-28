import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";

import styled from "styled-components";
import GlobalStyle from "GlobalStyle";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <GlobalStyle />
      <WidthLine>
        <AppRouter isLoggedIn={isLoggedIn} />
      </WidthLine>
    </>
  );
};

const WidthLine = styled.div`
  max-width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  border: 1px solid white;
`;

export default App;
