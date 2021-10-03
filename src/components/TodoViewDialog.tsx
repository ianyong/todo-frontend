import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { TodoData } from '../types/todos';
import { AppState } from '../store/store';
import { getTodo } from '../store/todos/selectors';
import { loadTodo } from '../store/todos/operations';
import formatDate from '../utils/date';
import TodoDeleteDialog from './TodoDeleteDialog';

const IconStyle: React.CSSProperties = {
  paddingRight: '15px',
};

const RowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

interface Props {
  todoId: number;
  isOpen: boolean;
  handleClose: () => void;
}

const TodoViewDialog: React.FunctionComponent<Props> = ({ todoId, isOpen, handleClose }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isOpen) {
      dispatch(loadTodo(todoId));
    }
  }, [isOpen]);
  const todo: TodoData = useSelector((state: AppState) => getTodo(state, todoId));

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const openDeleteDialog = () => {
    handleClose();
    setIsDeleteDialogOpen(true);
  };

  if (!todo) {
    return <></>;
  }

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth scroll="paper">
        <DialogTitle>{todo.name}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box style={RowStyle}>
                <DateRangeOutlinedIcon color="primary" style={IconStyle} />
                <Typography>{formatDate(todo.dueDate)}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box style={RowStyle}>
                <DescriptionOutlinedIcon color="primary" style={IconStyle} />
                {todo.description && <Typography>{todo.description}</Typography>}
                {!todo.description && <Typography color="gray">This todo has no description.</Typography>}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={openDeleteDialog}>
            Delete
          </Button>
          <Button color="secondary">Edit</Button>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <TodoDeleteDialog todo={todo} isOpen={isDeleteDialogOpen} handleClose={() => setIsDeleteDialogOpen(false)} />
    </>
  );
};

export default TodoViewDialog;
