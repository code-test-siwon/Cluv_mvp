import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";

import styled from "styled-components";
import WhiteMode from "WhiteMode";
import DarkMode from "DarkMode";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mode, setMode] = useState(true);

  const modeChange = () => {};

  return (
    <>
      {mode ? <DarkMode /> : <WhiteMode />}
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
  align-items: center;
  margin: auto;
  border: 1px solid var(--color-d3);
`;

export default App;
