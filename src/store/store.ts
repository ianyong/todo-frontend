import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TodosState } from './todos/types';
import todosReducer from './todos/reducer';

export interface AppState {
  todos: TodosState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  todos: todosReducer,
});

const storeEnhancer = applyMiddleware(thunk);

export default function configureStore() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return createStore(rootReducer, isDevelopment ? composeWithDevTools(storeEnhancer) : storeEnhancer);
}
