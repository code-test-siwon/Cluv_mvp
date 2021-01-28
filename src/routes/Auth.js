import React from "react";
import styled from "styled-components";

const Auth = () => {
  return (
    <>
      <div>로그인화면입니다.</div>
      <form action="">
        <input type="email" name="email" required autoComplete="none" />
        <input type="password" name="password" required autoComplete="none" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Auth;
