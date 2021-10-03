import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

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

  return (
    <Fab className={classes.fab}>
      <AddIcon />
    </Fab>
  );
};

export default FloatingActionButton;
