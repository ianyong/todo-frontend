import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import { loadAllTodos } from '../store/todos/operations';
import TodoListHeader from '../components/TodoListHeader';
import FloatingActionButton from '../components/FloatingActionButton';

const TodoListPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllTodos());
  }, []);

  return (
    <>
      <TodoListHeader />
      <TodoList />
      <FloatingActionButton />
    </>
  );
};

export default TodoListPage;
