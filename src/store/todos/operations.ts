import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { batch } from 'react-redux';
import { TodoData, TodoListData, TodoPostData, TodoPutData } from '../../types/todos';
import api from '../../api';
import { addTodo, removeTodo, saveTodo, saveTodoList } from './actions';
import { AppState } from '../store';

export function loadAllTodos() {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>) => {
    const response = await api.todos.getTodosList();
    const todoListData: TodoListData[] = response.payload;
    dispatch(saveTodoList(todoListData));
  };
}

export function loadTodo(todoId: number) {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>) => {
    const response = await api.todos.getTodo(todoId);
    const todoData: TodoData = response.payload;
    dispatch(saveTodo(todoData));
  };
}

export function createTodo(todo: TodoPostData) {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>) => {
    const response = await api.todos.addTodo(todo);
    const todoData: TodoData = response.payload;
    dispatch(addTodo(todoData));
  };
}

export function updateTodo(todo: TodoPutData) {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>) => {
    const response = await api.todos.editTodo(todo);
    const todoData: TodoData = response.payload;
    batch(() => {
      dispatch(removeTodo(todoData.id));
      dispatch(addTodo(todoData));
    });
  };
}

export function deleteTodo(todoId: number) {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>) => {
    await api.todos.deleteTodo(todoId);
    dispatch(removeTodo(todoId));
  };
}
