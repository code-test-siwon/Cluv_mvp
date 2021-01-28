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
      <LoginBox />
      {/* <SocialLoginBox />
      <Sign /> */}
    </>
  );
};

const LoginBox = () => {
  const Input1 = styled.input`
    width: 340px;
    margin: auth;
    padding-left: 0px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    transition: all 0.5s;
    background: var(--color-1);

    &:focus::-webkit-input-placeholder {
      color: transparent;
      transition: all 0.5s;
    }
    &:hover::-webkit-input-placeholder {
      color: transparent;
      transition: all 0.5s;
    }
    &:hover {
      background: var(--color-3);
      transition: all 0.5s;
      color: var(--color-5);
    }
    &:active {
      background: var(--color-3);
      transition: all 0.5s;
      color: var(--color-5);
    }

    &:focus {
      outline: none;
      background: var(--color-3);
      transition: all 0.5s;
    }
  `;
  const Input2 = styled.input`
    width: 340px;
  `;
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input1 type="email" placeholder="이메일 입력" />
        <Input1 type="password" placeholder="비밀번호 입력" />
        <Input2 type="submit" />
      </form>
      {/* <CustomerCenter></CustomerCenter> */}
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
