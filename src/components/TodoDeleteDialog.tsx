import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { deleteTodo } from '../store/todos/operations';
import { TodoData } from '../types/todos';

interface Props {
  todo: TodoData;
  isOpen: boolean;
  handleClose: () => void;
}

const TodoDeleteDialog: React.FunctionComponent<Props> = ({ todo, isOpen, handleClose }: Props) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth scroll="paper">
      <DialogTitle>{`Delete todo - ${todo.name}`}</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this todo?</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleDelete}>
          Yes
        </Button>
        <Button color="primary" onClick={handleClose}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDeleteDialog;
