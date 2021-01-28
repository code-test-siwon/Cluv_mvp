import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";

import styled from "styled-components";
import WhiteMode from "WhiteMode";
import DarkMode from "DarkMode";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState(false);

  const modeChange = () => setMode((prev) => !prev);
  return (
    <>
      {mode ? <DarkMode /> : <WhiteMode />}
      <WidthLine>
        <button onClick={modeChange}>ModeChange</button>
        <AppRouter isLoggedIn={isLoggedIn} />
      </WidthLine>
    </>
  );
};

const WidthLine = styled.div`
  max-width: 370px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border: 1px solid var(--color-3);
  background: var(--color-bg);
`;

export default App;
