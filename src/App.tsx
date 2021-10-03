import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from './store/store';
import TodoListPage from './pages/TodoListPage';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <TodoListPage />
    </Provider>
  );
}

export default App;
