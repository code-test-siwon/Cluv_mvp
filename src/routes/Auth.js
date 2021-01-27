import React from "react";

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
