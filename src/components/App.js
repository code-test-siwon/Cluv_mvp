import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";
import styled from "styled-components";
import { authService } from "fbase";

import WhiteMode from "WhiteMode";
import DarkMode from "DarkMode";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [mode, setMode] = useState(true);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });

  const modeChange = () => setMode((prev) => !prev);
  return (
    <>
      {mode ? <DarkMode /> : <WhiteMode />}
      <WidthLine>
        <button onClick={modeChange}>ModeChange</button>
        {init ? (
          <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
        ) : (
          "initializing..."
        )}
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
  border: 1px solid var(--color-1);
  background: var(--color-bg);
`;

export default App;
