import { TodoData, TodoListData } from '../../types/todos';

// Action names
export const SAVE_TODOS_LIST = 'todos/SAVE_TODOS_LIST';
export const SAVE_TODO = 'todos/SAVE_TODO';
export const ADD_TODO = 'todos/ADD_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

// Action types
export interface SaveTodosListAction {
  type: typeof SAVE_TODOS_LIST;
  todoList: TodoListData[];
}

export interface SaveTodoAction {
  type: typeof SAVE_TODO;
  todo: TodoData;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: TodoData;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  todoId: number;
}

export type TodoActionTypes = SaveTodosListAction | SaveTodoAction | AddTodoAction | RemoveTodoAction;

export interface TodosState {
  todoList: TodoListData[];
  todos: Record<number, TodoData>;
}
