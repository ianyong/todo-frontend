import { TodoData, TodoListData } from '../../types/todos';
import {
  REMOVE_TODO,
  RemoveTodoAction,
  SAVE_TODO,
  SAVE_TODOS_LIST,
  SaveTodoAction,
  SaveTodosListAction,
} from './types';

export function saveTodosList(todosList: TodoListData[]): SaveTodosListAction {
  return {
    type: SAVE_TODOS_LIST,
    todosList,
  };
}

export function saveTodo(todo: TodoData): SaveTodoAction {
  return {
    type: SAVE_TODO,
    todo,
  };
}

export function removeTodo(todoId: number): RemoveTodoAction {
  return {
    type: REMOVE_TODO,
    todoId,
  };
}
