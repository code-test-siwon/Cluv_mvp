import React from "react";
import styled from "styled-components";
import arrowIcon from "images/arrowIcon.svg";

const ProfileSet = () => {
  return (
    <>
      <Div1>
        <div>
          <img src={arrowIcon} />
        </div>
        <Div2>프로필 설정</Div2>
      </Div1>
      <Div3>
        <P1>
          Cluv에서 사용하실 <Span1>닉네임을 입력</Span1>해주세요.
        </P1>
        <Input1
          type="text"
          maxLength="20"
          placeholder="아이디를 입력해주세요."
        ></Input1>
        <P2>해당 닉네임을 내 크리에이터가 불러줍니다.</P2>
      </Div3>
      <Div4>
        <P3>더 많은 혜택을 위해 추가정보를 입력해주세요.</P3>
        <P3>
          <Span1>생년월일</Span1>(변경불가)
        </P3>
        <Input2 type="text"></Input2>
        <P4>
          <Span1>성별</Span1>(변경불가)
        </P4>
        <Button1>남자</Button1>
        <Button2>여자</Button2>
      </Div4>
      <Button3>완료</Button3>
    </>
  );
};
const Span1 = styled.span`
  color: var(--color-3);
`;

const Div1 = styled.div`
  border-bottom: 1px solid var(--color-2);
  width: 100%;
  display: flex;
  text-align: center;
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
  height: 100px;
  margin-top: var(--font-1);
`;

const Div4 = styled.div`
  border: 1px solid;
`;
const P1 = styled.p`
  color: var(--color-4);
  font-size: var(--font-4);
`;
const P2 = styled.p`
  color: var(--color-4);
  opacity: 0.2;
  font-size: var(--font-5);
`;
const P3 = styled.p`
  color: var(--color-4);
`;
const P4 = styled.p`
  color: var(--color-4);
`;
const Input1 = styled.input`
  width: 100%;
`;
const Input2 = styled.input`
  width: 100%;
`;
const Button1 = styled.button`
  color: var(--color-4);
  background-color: var(--color-bg);
  border: 1px solid var(--color-2);
  border-radius: 10px;
  :hover {
    background-color: var(--color-3);
    color: var(--color-5);
    transition: all 0.5s;
  }
`;
const Button2 = styled.button`
  color: var(--color-4);
  background-color: var(--color-bg);
  border: 1px solid var(--color-2);
  border-radius: 10px;
  :hover {
    background-color: var(--color-3);
    color: var(--color-5);
    transition: all 0.5s;
  }
`;
const Button3 = styled.button`
  color: var(--color-4);
  background-color: var(--color-bg);
  border: 1px solid var(--color-2);
  border-radius: 10px;
  :hover {
    background-color: var(--color-3);
    color: var(--color-5);
    transition: all 0.5s;
  }
`;

export default ProfileSet;
