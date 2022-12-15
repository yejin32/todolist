import React from "react";
import styled from "styled-components";

const TodoCreateDiv = styled.div`
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 20px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #d9d9d9;
  }

  .form input {
    width: 330px;
    height: 40px;
    font-size: 23px;
    border: none;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }

  .create-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    padding-left: 16px;
  }
`;

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <TodoCreateDiv>
      <div className="form">
        <input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="new task"
        />
        <div className="create-button" onClick={onCreate}>
          +
        </div>
      </div>
    </TodoCreateDiv>
  );
};

export default Form;
