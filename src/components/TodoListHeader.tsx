import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AppBarStyle = {
  background: 'green',
};

const TodoListHeader: React.FunctionComponent = () => (
  <AppBar position="sticky" style={AppBarStyle}>
    <Toolbar>
      <Typography variant="h4">Todo List</Typography>
    </Toolbar>
  </AppBar>
);

export default TodoListHeader;
