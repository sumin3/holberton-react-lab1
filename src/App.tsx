import React, { ReactElement } from 'react';
import './App.css';
import TodoApp from './Todo/todo-app';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
};

export default App;
