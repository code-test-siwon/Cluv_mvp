import React from "react";
import styled from "styled-components";
import logo from "images/Cluvlogo.png";

const Auth = () => {
  return (
    <>
      <div>
        <img src={logo} alt="???" />
      </div>
      <Greeting>
        <h2>
          <GreetingSpan>창작물에 대한 가치</GreetingSpan>를 인정받고
        </h2>
        <h2>
          팬들과 <GreetingSpan>자유롭게 소통</GreetingSpan>하는 곳
        </h2>
      </Greeting>
      {/* <LoginBox />
      <SocialLoginBox />
      <Sign /> */}
    </>
  );
};

const GreetingSpan = styled.span`
  color: var(--color-3);
`;

const Greeting = styled.div`
  width: 100%;
  text-align: center;
`;

export default Auth;
