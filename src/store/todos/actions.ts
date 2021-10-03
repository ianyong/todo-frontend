import { TodoData, TodoListData } from '../../types/todos';
import {
  ADD_TODO,
  AddTodoAction,
  REMOVE_TODO,
  RemoveTodoAction,
  SAVE_TODO,
  SAVE_TODOS_LIST,
  SaveTodoAction,
  SaveTodosListAction,
} from './types';

export function saveTodoList(todoList: TodoListData[]): SaveTodosListAction {
  return {
    type: SAVE_TODOS_LIST,
    todoList,
  };
}

export function saveTodo(todo: TodoData): SaveTodoAction {
  return {
    type: SAVE_TODO,
    todo,
  };
}

export function addTodo(todo: TodoData): AddTodoAction {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function removeTodo(todoId: number): RemoveTodoAction {
  return {
    type: REMOVE_TODO,
    todoId,
  };
}
