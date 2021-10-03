import React, { useState } from 'react';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { makeStyles } from '@mui/styles';
import { TodoListData } from '../types/todos';
import TodoViewDialog from './TodoViewDialog';
import formatDate from '../utils/date';

const useStyles = makeStyles(() => ({
  paper: {
    margin: '20px',
    padding: '20px',
    backgroundColor: 'whitesmoke',
    '&:hover': {
      opacity: 0.7,
      cursor: 'pointer',
    },
  },
}));

interface Props {
  todo: TodoListData;
}

const TodoListItem: React.FunctionComponent<Props> = ({ todo }: Props) => {
  const classes = useStyles();
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <Paper className={classes.paper} onClick={() => setIsSelected(true)}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">{todo.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Chip icon={<DateRangeIcon />} variant="outlined" label={`Due ${formatDate(todo.dueDate)}`} />
          </Grid>
        </Grid>
      </Paper>
      <TodoViewDialog todoId={todo.id} isOpen={isSelected} handleClose={() => setIsSelected(false)} />
    </>
  );
};

export default TodoListItem;
