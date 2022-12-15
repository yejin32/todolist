import React from "react";
import styled from "styled-components";

const TodoTemplateDiv = styled.div`
  width: 460px;
  height: 660px;
  background: #fff8f2;
  border: 3px #717171 solid; // 수정하기
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 20px 20px 0 20px;
    padding-left: 10px;
    padding-bottom: 12px;
    border-bottom: 3px solid #717171;
  }
`;
const TodoListTemplate = ({ form, children }) => {
  return (
    <TodoTemplateDiv>
      <h1>To do List ✔</h1>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </TodoTemplateDiv>
  );
};

export default TodoListTemplate;
