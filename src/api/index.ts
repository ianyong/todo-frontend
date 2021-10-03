import TodosAPI from './todos';

const api = Object.freeze({
  todos: new TodosAPI(),
});

export default api;
