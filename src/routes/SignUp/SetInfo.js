import React from "react";
import styled from "styled-components";
import arrowIcon from "images/arrowIcon.svg";
import { Link, useHistory } from "react-router-dom";

const SetInfo = () => {
  let history = useHistory();
  return (
    <div>
      <Div1>
        <div>
          <img
            src={arrowIcon}
            style={{ cursor: "pointer" }}
            onClick={() => history.goBack()}
          />
        </div>
        <Div2>회원가입</Div2>
      </Div1>
      <Form>
        <LogDiv1>
          <LogDiv2>이메일</LogDiv2>
          <LogInput1 value="sofaissofa@naver.com" />
          <LogDiv2>비밀번호</LogDiv2>
          <LogInput1
            name="password"
            type="password"
            placeholder="인증번호 입력"
            autocomplete="none"
          />
          <LogDiv2>비밀번호 확인</LogDiv2>
          <LogInput1
            name="password"
            type="password"
            placeholder="인증번호 입력"
            autocomplete="none"
          />
        </LogDiv1>

        <Div3>본인 확인용 절차이며, 다른 용도로는 사용되지 않습니다.</Div3>
        <LogInput2 type="submit" value="입력 완료" />
      </Form>
    </div>
  );
};

const Div1 = styled.div`
  border-bottom: 1px solid var(--color-2);
  width: 100%;
  display: flex;
  margin-top: var(--font-1);
  padding-bottom: var(--font-5);
`;
const Div2 = styled.div`
  margin: auto;
  padding-right: var(--font-regular);
  font-size: var(--font-2);
  color: var(--color-4);
`;

const Div3 = styled.div`
  color: var(--color-2);
  opacity: 0.5;
  text-align: center;
  margin: var(--font-6);
`;

const Form = styled.form`
  margin-top: var(--font-1);
`;
const LogDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;
const LogDiv2 = styled.div`
  font-size: var(--font-regular);
  color: var(--color-4);
  margin-top: var(--font-2);
`;
const LogInput1 = styled.input`
  padding: var(--font-5);

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
  height: var(--font-large);
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

export default SetInfo;
