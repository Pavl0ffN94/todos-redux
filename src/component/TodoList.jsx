import React, {memo} from 'react';
import {TodoItem} from './TodoItem';
import {useSelector} from 'react-redux/es/hooks/useSelector';

const TodoListImpl = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export const TodoList = memo(TodoListImpl);
