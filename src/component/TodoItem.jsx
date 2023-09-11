import React, {memo, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../store/todoSlice';

const TodoItemIml = ({id, text, completed}) => {
  const dispatch = useDispatch();

  const removalTodo = useCallback(() => {
    dispatch(removeTodo({id}));
  }, [dispatch, id]);

  const toggletTodoCompleted = useCallback(() => {
    dispatch(toggleTodoComplete({id}));
  }, [dispatch, id]);

  return (
    <li>
      <input type='checkbox' checked={completed} onChange={toggletTodoCompleted} />
      <span> {text} </span>
      <span className='delete' onClick={removalTodo}>
        &times;
      </span>
    </li>
  );
};

export const TodoItem = memo(TodoItemIml);
