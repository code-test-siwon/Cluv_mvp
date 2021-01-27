import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";
import PropTypes from "prop-types";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
};

export default App;
