import React, { useState } from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { TodoListData } from '../types/todos';
import TodoViewDialog from './TodoViewDialog';
import formatDate from '../utils/date';

const PaperStyle: React.CSSProperties = {
  margin: '20px',
  padding: '20px',
  backgroundColor: 'whitesmoke',
};

interface Props {
  todo: TodoListData;
}

const TodoListItem: React.FunctionComponent<Props> = ({ todo }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <Paper style={PaperStyle} onClick={() => setIsSelected(true)}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">{todo.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Chip icon={<DateRangeIcon />} variant="outlined" label={`Due ${formatDate(todo.dueDate)}`} />
          </Grid>
        </Grid>
      </Paper>
      <TodoViewDialog todoId={todo.id} isOpen={isSelected} onClose={() => setIsSelected(false)} />
    </>
  );
};

export default TodoListItem;
