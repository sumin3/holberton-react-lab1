import React, { Component, ReactElement } from 'react';
import Title from './title';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import styles from './todos.module.css';

interface TodoItem {
  text: string;
  id: number;
}
interface Todo {
  todos: TodoItem[];
}

class TodoApp extends Component<{}, Todo> {
  public constructor(props: {}) {
    super(props);

    //initialize state - `todos` is our initial dummy array of todos
    this.state = {
      todos: [
        { text: ' This is a simple todo list app written in React!', id: 1 },
        {
          text: 'Hover over todos and click on the `X` to delete them!',
          id: 2
        },
        { text: 'Add new todos if you like!', id: 3 }
      ]
    };

    // binding methods
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  // Handler to add a todo
  public addTodo(todo: TodoItem): void {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  // Handler to remove a todo
  public removeTodo(id: number): void {
    this.setState({
      todos: this.state.todos.filter(
        (todo: TodoItem): boolean => todo.id !== id
      )
    });
  }

  public render(): ReactElement {
    return (
      <div className={styles['todo-container']}>
        <Title />
        <AddTodo handleAdd={this.addTodo} />
        <TodoList todos={this.state.todos} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default TodoApp;
