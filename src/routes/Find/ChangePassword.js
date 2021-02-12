import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import arrowIcon from "images/arrowIcon.svg";
import clipBoard from "images/clipBoard.svg";

const ChangePassword = () => {
  let history = useHistory();
  return (
    <>
      <Div1>
        <div>
          <img
            src={arrowIcon}
            onClick={() => history.goBack()}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Div2>비밀번호 변경</Div2>
      </Div1>
      <Div3>
        <P1>인증되었습니다.</P1>
        <P2>임시 비밀번호를</P2>
        <P1>확인해주세요.</P1>
      </Div3>
      <Div4>
        <div style={{ fontSize: "var(--font-3)" }}>asd16723a!</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={clipBoard} style={{ width: "25px", height: "25px" }} />
          <div style={{ marginTop: "10px", fontSize: "var(--font-5)" }}>
            클립보드에 복사
          </div>
        </div>
      </Div4>
      <Link to="/">
        <LogInput2 type="submit" value="로그인 하기" />
      </Link>
    </>
  );
};

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

const P1 = styled.p`
  color: var(--color-4);
  font-size: var(--font-1);
  font-weight: var(--weight-bold);
  margin-top: var(--font-4);
`;
const P2 = styled.p`
  color: var(--color-3);
  font-size: var(--font-1);
  font-weight: var(--weight-bold);
  margin-top: var(--font-4);
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
  width: 90%;
  margin: var(--font-ultra) auto var(--font-medium) auto;
`;

const Div4 = styled.div`
  width: 90%;
  width: 340px;
  color: var(--color-4);
  border: 1px solid var(--color-2);
  height: var(--font-ultra);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: var(--font-super) var(--font-2);
  background: #585858;
`;

export default ChangePassword;
