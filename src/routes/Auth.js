import React, { useState } from "react";
import styled from "styled-components";
import { authService } from "fbase";

import logo from "images/Cluvlogo.png";
import flogo from "images/facebookLogo.svg";
import glogo from "images/googleLogo.svg";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
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
      <Form onSubmit={onSubmit}>
        <LogDiv1>
          <LogDiv2>이메일</LogDiv2>
          <LogInput1
            onChange={onChange}
            name="email"
            type="email"
            placeholder="이메일 입력"
            autoComplete="none"
            // value={email}
          />
          <LogDiv2>비밀번호</LogDiv2>
          <LogInput1
            onChange={onChange}
            name="password"
            type="password"
            placeholder="비밀번호 입력"
            autocomplete="none"
            value={password}
          />
        </LogDiv1>
        <LogInput2 type="submit" value={newAccount ? "회원가입" : "로그인"} />
      </Form>
      {error ? alert(error) : null}
      <LogDiv3>
        <LogDiv4>로그인정보를 잊으셨나요?</LogDiv4>
        <LogDiv4>
          <LogSpan>아이디 / 비밀번호</LogSpan> 찾기
        </LogDiv4>
      </LogDiv3>
      <SocialDiv1>
        <SocialDiv2>소셜 계정으로 간편하게 로그인하세요!</SocialDiv2>
        <SocialDiv3>
          <img src={glogo} alt="googleLogo" />
          <img src={flogo} alt="facebookLogo" />
        </SocialDiv3>
        <SocialDiv4>
          <div>아직 회원이 아니신가요?</div>{" "}
          <SocialDiv5 onClick={toggleAccount}>
            {newAccount ? "로그인하기" : "회원가입 하기"}
          </SocialDiv5>
        </SocialDiv4>
      </SocialDiv1>
      {/* <SocialLoginBox /> */}
      {/* <Sign /> */}
    </>
  );
};

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
// LoginBox
const Form = styled.form`
  margin-top: 7vh;
`;
const LogInput1 = styled.input`
  padding: var(--font-4);
  width: 340px;
  padding-left: 0px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  transition: all 0.5s;
  background: var(--color-1);
  color: var(--color-2);

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
    color: var(--color-2);
  }
  &:active {
    background: var(--color-1);
    transition: all 0.5s;
    ${"" /* color: var(--color-2); */}
  }

  &:focus {
    outline: none;
    background: var(--color-1);
    transition: all 0.5s;
    color: var(--color-2);
  }
`;
const LogInput2 = styled.input`
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
    border: none;
  }
`;
const LogDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 18vh;
`;
const LogDiv2 = styled.div`
  font-size: var(--font-regular);
  color: var(--color-4);
  margin-top: var(--font-regular);
`;
const LogDiv3 = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
  margin-top: var(--font-regular);
`;
const LogDiv4 = styled.div`
  color: var(--color-4);
`;
const LogSpan = styled.span`
  color: var(--color-3);
  font-size: var(--font-3);
`;
const SocialDiv1 = styled.div`
  margin: auto;
  width: 70%;
`;
const SocialDiv2 = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-4);
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
`;
const SocialDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: var(--font-2) auto;
`;
const SocialDiv4 = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-4);
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
`;
const SocialDiv5 = styled.div`
  color: var(--color-3);
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
`;

// const LoginBox = ({ newAccount, email, password, setEmail, setPassword }) => {
// styled-components
// const Form = styled.form`
//   margin-top: 7vh;
// `;
// const LogInput1 = styled.input`
//   padding: var(--font-4);
//   width: 340px;
//   padding-left: 0px;
//   border-top: 0;
//   border-left: 0;
//   border-right: 0;
//   transition: all 0.5s;
//   background: var(--color-1);
//   color: var(--color-2);

//   &:focus::-webkit-input-placeholder {
//     color: transparent;
//     transition: all 0.5s;
//   }
//   &:hover::-webkit-input-placeholder {
//     color: transparent;
//     transition: all 0.5s;
//   }
//   &:hover {
//     background: var(--color-1);
//     transition: all 0.5s;
//     color: var(--color-2);
//   }
//   &:active {
//     background: var(--color-1);
//     transition: all 0.5s;
//     ${"" /* color: var(--color-2); */}
//   }

//   &:focus {
//     outline: none;
//     background: var(--color-1);
//     transition: all 0.5s;
//     color: var(--color-2);
//   }
// `;
// const LogInput2 = styled.input`
//   width: 100%;
//   min-width: 340px;
//   margin-top: var(--font-medium);
//   background: var(--color-2);
//   color: var(--color-4);
//   border: 0;
//   border-radius: 5px;
//   height: 6vh;
//   transition: all 0.5s;
//   font-size: var(--font-2);
//   font-weight: var(--weight-bold);
//   &:hover {
//     background: var(--color-3);
//     transition: all 0.5s;
//     color: var(--color-5);
//   }
//   &:active {
//     background: var(--color-3);
//     transition: all 0.5s;
//     color: var(--color-5);
//   }
// `;
// const LogDiv1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 18vh;
// `;
// const LogDiv2 = styled.div`
//   font-size: var(--font-regular);
//   color: var(--color-4);
//   margin-top: var(--font-regular);
// `;
// const LogDiv3 = styled.div`
//   width: 340px;
//   display: flex;
//   justify-content: space-between;
//   margin-top: var(--font-regular);
// `;
// const LogDiv4 = styled.div`
//   color: var(--color-4);
// `;
// const LogSpan = styled.span`
//   color: var(--color-3);
//   font-size: var(--font-3);
// `;
// const onSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     let data;
//     if (newAccount) {
//       data = await authService.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//     } else {
//       data = await authService.signInWithEmailAndPassword(email.password);
//     }
//   } catch (error) {}
// };
// const onChange = (event) => {
//   const {
//     target: { name, value },
//   } = event;
//   if (name === "email") {
//     setEmail(value);
//   } else if (name === "password") {
//     setPassword(value);
//   }
// };
//   return (
//     <>
//       <Form onSubmit={onSubmit}>
//         <LogDiv1>
//           <LogDiv2>이메일</LogDiv2>
//           <LogInput1
//             onChange={onChange}
//             name="email"
//             type="email"
//             placeholder="이메일 입력"
//             autoComplete="none"
//             // value={email}
//           />
//           <LogDiv2>비밀번호</LogDiv2>
//           <LogInput1
//             onChange={onChange}
//             name="password"
//             type="password"
//             placeholder="비밀번호 입력"
//             autocomplete="none"
//             // value={password}
//           />
//         </LogDiv1>
//         <LogInput2 type="submit" value={newAccount ? "회원가입" : "로그인"} />
//       </Form>
//       <LogDiv3>
//         <LogDiv4>로그인정보를 잊으셨나요?</LogDiv4>
//         <LogDiv4>
//           <LogSpan>아이디 / 비밀번호</LogSpan> 찾기
//         </LogDiv4>
//       </LogDiv3>
//     </>
//   );
// };
// const SocialLoginBox = () => {
// const SocialDiv1 = styled.div`
//   margin: auto;
//   width: 70%;
// `;
// const SocialDiv2 = styled.div`
//   display: flex;
//   justify-content: center;
//   color: var(--color-4);
//   font-size: var(--font-small);
//   font-weight: var(--weight-regular);
// `;
// const SocialDiv3 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 50%;
//   margin: var(--font-2) auto;
// `;
// const SocialDiv4 = styled.div`
//   display: flex;
//   justify-content: space-between;
//   color: var(--color-4);
//   font-size: var(--font-small);
//   font-weight: var(--weight-regular);
// `;
// const SocialDiv5 = styled.div`
//   color: var(--color-3);
//   font-size: var(--font-small);
//   font-weight: var(--weight-regular);
// `;
//   return (
//     <>
//       <SocialDiv1>
//         <SocialDiv2>소셜 계정으로 간편하게 로그인하세요!</SocialDiv2>
//         <SocialDiv3>
//           <img src={glogo} alt="googleLogo" />
//           <img src={flogo} alt="facebookLogo" />
//         </SocialDiv3>
//         <SocialDiv4>
//           <div>아직 회원이 아니신가요?</div>{" "}
//           <SocialDiv5>회원가입 하기</SocialDiv5>
//         </SocialDiv4>
//       </SocialDiv1>
//     </>
//   );
// };

export default Auth;
