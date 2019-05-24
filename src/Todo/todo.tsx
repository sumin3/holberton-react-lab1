import React, { ReactElement } from 'react';
import styles from './todos.module.css';
import { TodoItem } from './todo-app';

interface TodoProps {
  todo: TodoItem;
  remove: (id: number) => void;
}
const Todo = ({ todo, remove }: TodoProps): ReactElement => (
  <p>
    {todo.text}
    <span
      onClick={(): void => {
        remove(todo.id);
      }}
    >
      <b className={styles['close-btn']}>&nbsp;&#10006;</b>
    </span>
  </p>
);
export default Todo;
