import React from 'react';
import { ListItem } from '@mui/material';
import { TodoListData } from '../types/todos';

interface Props {
  todo: TodoListData;
}

const TodoListItem: React.FunctionComponent<Props> = ({ todo }: Props) => <ListItem>{todo.name}</ListItem>;

export default TodoListItem;
