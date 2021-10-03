import produce from 'immer';
import { ADD_TODO, REMOVE_TODO, SAVE_TODO, SAVE_TODOS_LIST, TodoActionTypes, TodosState } from './types';
import { TodoListData } from '../../types/todos';

const initialState: TodosState = {
  todoList: [],
  todos: {},
};

const todosReducer = produce((draft: TodosState, action: TodoActionTypes) => {
  switch (action.type) {
    case SAVE_TODOS_LIST: {
      draft.todoList = action.todoList;
      break;
    }
    case SAVE_TODO: {
      draft.todos[action.todo.id] = action.todo;
      break;
    }
    case ADD_TODO: {
      draft.todos[action.todo.id] = action.todo;
      draft.todoList.push(action.todo);
      break;
    }
    case REMOVE_TODO: {
      delete draft.todos[action.todoId];
      draft.todoList = draft.todoList.filter((todo: TodoListData) => todo.id !== action.todoId);
      break;
    }
    default: {
      throw new Error('Todos reducer encountered unexpected action.');
    }
  }
}, initialState);

export default todosReducer;
