import { useState } from 'react';

import useInput from './hooks/useInput';

import Todo from './pages/Todo';

export default function App() {
  const [todo, todoHandler, setTodo] = useInput('');
  const [todos, setTodos] = useState([]);

  const createTodo = (contents) => {
    const newTodo = {
      id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      todo: contents,
    };

    setTodos([...todos, newTodo]);

    setTodo('');
  };

  const compelteTodo = (id) => {
    const targetTodo = todos.filter((target) => target.id !== id);

    setTodos(targetTodo);
  };

  return (
    <Todo
      todo={todo}
      todoHandler={todoHandler}
      createTodo={createTodo}
      compelteTodo={compelteTodo}
      todos={todos}
    />
  );
}
