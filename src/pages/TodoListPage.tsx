import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import { loadAllTodos } from '../store/todos/operations';

const TodoListPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllTodos());
  }, []);
  return <TodoList />;
};

export default TodoListPage;
