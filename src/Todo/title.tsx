import React from 'react';
import styles from './todos.module.css';

const Title = (): React.ReactElement => (
  <h2 className={styles['todo-title']}>To Do List</h2>
);
export default Title;
