import React, { useState } from "react";
import styled from "styled-components";
import logo from "images/Cluvlogo.png";
import flogo from "images/facebookLogo.svg";
import glogo from "images/googleLogo.svg";

const Auth = () => {
  const [newAccount, setNewAccount] = useState(false);

  // styled-components
  const Greeting = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 3vh;
  `;
  const GreetingSpan = styled.span`
    color: var(--color-3);
  `;
  const ColorSpan = styled.span`
    color: var(--color-4);
  `;
  return (
    <>
      <div>
        <img src={logo} alt="???" />
      </div>
      <Greeting>
        <h2>
          <GreetingSpan>창작물에 대한 가치</GreetingSpan>
          <ColorSpan>를 인정받고</ColorSpan>
        </h2>
        <h2>
          <ColorSpan>팬들과</ColorSpan>{" "}
          <GreetingSpan>자유롭게 소통</GreetingSpan>
          <ColorSpan>하는 곳</ColorSpan>
        </h2>
      </Greeting>
      <LoginBox newAccount={newAccount} />
      <SocialLoginBox />
      {/* <Sign /> */}
    </>
  );
};

const LoginBox = ({ newAccount }) => {
  // styled-components
  const Form = styled.form`
    margin-top: 7vh;
  `;
  const Input1 = styled.input`
    padding: var(--font-4);
    width: 340px;
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
      background: var(--color-1);
      transition: all 0.5s;
      color: var(--color-5);
    }
    &:active {
      background: var(--color-1);
      transition: all 0.5s;
      color: var(--color-5);
    }

    &:focus {
      outline: none;
      background: var(--color-1);
      transition: all 0.5s;
    }
  `;
  const Input2 = styled.input`
    width: 100%;
    min-width: 340px;
    margin-top: var(--font-medium);
    background: var(--color-2);
    color: var(--color-4);
    border: 0;
    border-radius: 5px;
    height: 6vh;
    transition: all 0.5s;
    font-size: var(--font-2);
    font-weight: var(--weight-bold);
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
  `;
  const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18vh;
  `;
  const Div2 = styled.div`
    font-size: var(--font-regular);
    color: var(--color-4);
    margin-top: var(--font-regular);
  `;
  const Div3 = styled.div`
    width: 340px;
    display: flex;
    justify-content: space-between;
    margin-top: var(--font-regular);
  `;
  const Div4 = styled.div`
    color: var(--color-4);
  `;
  const Span = styled.span`
    color: var(--color-3);
    font-size: var(--font-3);
  `;
  return (
    <>
      <Form>
        <Div1>
          <Div2>이메일</Div2>
          <Input1 type="email" placeholder="이메일 입력" />
          <Div2>비밀번호</Div2>
          <Input1 type="password" placeholder="비밀번호 입력" />
        </Div1>
        <Input2 type="submit" value={newAccount ? "회원가입" : "로그인"} />
      </Form>
      <Div3>
        <Div4>로그인정보를 잊으셨나요?</Div4>
        <Div4>
          <Span>아이디 / 비밀번호</Span> 찾기
        </Div4>
      </Div3>
    </>
  );
};

const SocialLoginBox = () => {
  const Div1 = styled.div`
    margin: auto;
    width: 70%;
  `;
  const Div2 = styled.div`
    display: flex;
    justify-content: center;
    color: var(--color-4);
    font-size: var(--font-small);
    font-weight: var(--weight-regular);
  `;
  const Div3 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: var(--font-2) auto;
  `;
  const Div4 = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--color-4);
    font-size: var(--font-small);
    font-weight: var(--weight-regular);
  `;
  const Div5 = styled.div`
    color: var(--color-3);
    font-size: var(--font-small);
    font-weight: var(--weight-regular);
  `;
  return (
    <>
      <Div1>
        <Div2>소셜 계정으로 간편하게 로그인하세요!</Div2>
        <Div3>
          <img src={glogo} alt="googleLogo" />
          <img src={flogo} alt="facebookLogo" />
        </Div3>
        <Div4>
          <div>아직 회원이 아니신가요?</div> <Div5>회원가입 하기</Div5>
        </Div4>
      </Div1>
    </>
  );
};

export default Auth;
