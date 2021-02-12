import React, { useState } from "react";
import styled from "styled-components";
import arrowIcon from "images/arrowIcon.svg";
import { Link, useHistory } from "react-router-dom";

const Confirm = () => {
  let history = useHistory();
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState("");
  const onClick = () => {
    setVerify((prev) => !prev);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };
  return (
    <>
      <Div1>
        <div>
          <img
            src={arrowIcon}
            alt="??"
            style={{ cursor: "pointer" }}
            onClick={() => history.goBack()}
          />
        </div>
        <Div2>본인인증</Div2>
      </Div1>
      <Form>
        <LogDiv1>
          <LogDiv2>이메일</LogDiv2>
          <Div0>
            <LogInput1
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              autoComplete="none"
              onChange={onChange}
            />
            <Span1 onClick={onClick} style={{ cursor: "pointer" }}>
              인증
            </Span1>
          </Div0>
          {verify && <Div3>10초</Div3>}
          <LogDiv2>인증번호</LogDiv2>
          <LogInput3
            name="password"
            type="password"
            placeholder="인증번호 입력"
            autocomplete="none"
          />
        </LogDiv1>
        <Div3>본인 확인용 절차이며, 다른 용도로는 사용되지 않습니다.</Div3>
        <Link to="/signup2">
          <LogInput2 type="submit" value="인증 완료" />
        </Link>
      </Form>
    </>
  );
};

const Span1 = styled.div`
  border: 0;
  background: var(--color-1);
  color: var(--color-3);
  font-size: var(--font-3);
  font-weight: var(--weight-bold);
  display: flex;
`;
const Div0 = styled.div`
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid var(--color-2);
  display: flex;
  justify-content: space-between;
  padding: 0 var(--font-4) 0 0;
  margin-top: var(--font-3);
`;
const Div1 = styled.div`
  border-bottom: 1px solid var(--color-2);
  width: 90%;
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
  text-align: center;
  margin-top: var(--font-4);
`;
const Form = styled.form`
  margin-top: var(--font-1);
`;
const LogDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  align-items: : center;
`;
const LogDiv2 = styled.div`
  font-size: var(--font-3);
  color: var(--color-4);
  margin-top: var(--font-2);
`;
const LogInput1 = styled.input`
  padding: var(--font-5);
  border-bottom : 1px solid var(--color-1)
  width: 340px;
  padding-left: 0px;
  border: 0;
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

const LogInput3 = styled.input`
  padding: var(--font-5);
  border-bottom: 1px solid var(--color-2);
  width: 340px;
  padding-left: 0px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  transition: all 0.5s;
  background: var(--color-1);
  color: var(--color-2);
  margin-top: var(--font-3);

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

export default Confirm;
