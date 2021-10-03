import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { getTodoList } from '../store/todos/selectors';
import { TodoListData } from '../types/todos';
import TodoListItem from './TodoListItem';

const TodoList: React.FunctionComponent = () => {
  const todos: TodoListData[] = useSelector((state: AppState) => getTodoList(state));

  return (
    <>
      {[...todos]
        .sort((a, b) => a.dueDate.valueOf() - b.dueDate.valueOf())
        .map((todo: TodoListData) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
    </>
  );
};

export default TodoList;
