import BaseAPI from './base';
import { ApiPromise } from '../types/api';
import { TodoData, TodoListData, TodoPostData, TodoPutData } from '../types/todos';

class TodosAPI extends BaseAPI {
  protected static getTodoUrl() {
    return 'todos';
  }

  public getTodosList(): ApiPromise<TodoListData[]> {
    return this.get(TodosAPI.getTodoUrl());
  }

  public getTodo(todoId: number): ApiPromise<TodoData> {
    return this.get(`${TodosAPI.getTodoUrl()}/${todoId}`);
  }

  public addTodo(todo: TodoPostData): ApiPromise<TodoData> {
    return this.post(`${TodosAPI.getTodoUrl()}`, todo);
  }

  public editTodo(todo: TodoPutData): ApiPromise<TodoData> {
    return this.put(`${TodosAPI.getTodoUrl()}/${todo.id}`, todo);
  }

  public deleteTodo(todoId: number): ApiPromise<{}> {
    return this.delete(`${TodosAPI.getTodoUrl()}/${todoId}`);
  }
}

export default TodosAPI;
