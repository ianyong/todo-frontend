import { AppState } from '../store';

function getLocalState(state: AppState) {
  return state.todos;
}

export function getTodoList(state: AppState) {
  return getLocalState(state).todoList;
}

export function getTodo(state: AppState, todoId: number) {
  return getLocalState(state).todos[todoId];
}
