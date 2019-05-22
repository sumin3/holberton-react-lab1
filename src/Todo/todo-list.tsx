import React, { ReactElement } from 'react';
import Todo from './todo';

interface TodoItem {
  text: string;
  id: number;
}
interface TodoListInput {
  todos: TodoItem[];
  handleRemove(id: number): void;
}
const TodoList = ({ todos, handleRemove }: TodoListInput): ReactElement => {
  function renderList(): ReactElement[] | ReactElement {
    // check if there are todos -- provide useful message if no todos left
    if (todos.length > 0) {
      return todos.map(
        (todo): React.ReactElement => (
          <Todo todo={todo} remove={handleRemove} key={todo.id} />
        )
      );
    }
    return <h3>No Todos remaining!</h3>;
  }

  return (
    <div>
      <p>
        <b>Your Todos:</b>
      </p>
      {renderList()}
    </div>
  );
};

export default TodoList;
