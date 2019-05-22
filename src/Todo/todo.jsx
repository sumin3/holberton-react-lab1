import React from 'react';
import styles from './todos.module.css';

const Todo = ({ todo, remove }) => (
  <p>
    {todo.text}
    <span
      onClick={() => {
        remove(todo.id)
      }}>
      <b className={styles['close-btn']}>&nbsp;&#10006;</b>
    </span>
  </p>
);

export default Todo;