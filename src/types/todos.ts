export interface TodoListData {
  id: number;
  name: string;
  dueDate: Date;
  isCompleted: boolean;
}

export interface TodoData extends TodoListData {
  description: string;
}

export interface TodoPostData {
  name: string;
  description: string;
  dueDate: Date;
}

export interface TodoPutData extends TodoPostData {
  id: number;
  isCompleted: boolean;
}
