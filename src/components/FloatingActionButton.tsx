import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import TodoAddDialog from './TodoAddDialog';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    backgroundColor: 'green',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green',
      opacity: 0.7,
    },
  },
}));

const FloatingActionButton: React.FunctionComponent = () => {
  const classes = useStyles();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <>
      <Fab className={classes.fab} onClick={() => setIsAddDialogOpen(true)}>
        <AddIcon />
      </Fab>
      <TodoAddDialog isOpen={isAddDialogOpen} handleClose={() => setIsAddDialogOpen(false)} />
    </>
  );
};

export default FloatingActionButton;
