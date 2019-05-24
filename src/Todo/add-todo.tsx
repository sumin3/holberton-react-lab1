import React, { Component, ReactElement } from 'react';
import styles from './todos.module.css';
import { TodoItem } from './todo-app';

export interface MyValue {
  todoText: string;
}
export interface HandleAdd {
  handleAdd(todo: TodoItem): void;
}
class AddTodo extends Component<HandleAdd, MyValue> {
  public constructor(props: HandleAdd) {
    super(props);
    this.state = {
      todoText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ todoText: event.target.value });
  }

  public handleSubmit(): void {
    this.props.handleAdd({
      text: this.state.todoText,
      id: Math.random() + Math.random()
    });
    this.setState({ todoText: '' });
  }

  public render(): ReactElement {
    return (
      <div className={styles['input-box-container']}>
        <input
          type="text"
          value={this.state.todoText}
          placeholder="Add todos here..."
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button className="button button-outline" onClick={this.handleSubmit}>
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}

export default AddTodo;
