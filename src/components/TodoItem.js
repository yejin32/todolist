import React, { Component } from "react";
import styled from "styled-components";

const TodoItemDiv = styled.div`
  .todo-item {
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    color: #717171;
  }

  .todo-item .remove {
    opacity: 1;
  }

  .remove {
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 25px 0 10px;
    cursor: pointer;
    &:hover {
      color: #ff1a1a;
    }
  }

  .todo-text {
    flex: 1;
    font-size: 19px;
    word-break: break-all;
  }

  .checked {
    text-decoration: line-through;
    color: #199416;
  }

  .check-mark {
    font-size: 24px;
    margin: 0 20px;
    color: #717171;
    font-weight: 700;
    color: #199416;
  }
`;

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <TodoItemDiv>
        <div className="todo-item" onClick={() => onToggle(id)}>
          <div
            className="remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(id);
            }}
          >
            X
          </div>
          <div className={`todo-text ${checked && "checked"}`}>
            <div>{text}</div>
          </div>
          {checked && <div className="check-mark">✓</div>}
        </div>
      </TodoItemDiv>
    );
  }
}

export default TodoItem;
