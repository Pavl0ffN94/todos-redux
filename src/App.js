import { useState, useCallback, memo } from 'react';
import './App.css';
import { TodoList } from './component/TodoList';
import { InputField } from './component/InputField';
import { useDispatch } from 'react-redux';
import {addTodo} from './store/todoSlice'

const  AppImpl = () => {
  const [text, setText] = useState('');

  const dispath = useDispatch();
  
  const addTask = useCallback(()=> {
    dispath(addTodo( {text} ))
    setText('');
  }, [dispath, text])

  

  const getText = useCallback((event) => {
    setText(event.target.value)
  }, [setText])



  return (
    <div className="App">
      <InputField
       text={text}
       handleInput={getText}
       handleSubmit={addTask}
      />
     <TodoList />
    </div>
  );
}

export const App = memo(AppImpl);
