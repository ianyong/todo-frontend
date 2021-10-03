import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import TodoForm, { TodoFormData, validationSchema } from '../forms/TodoForm';
import { TodoPostData } from '../types/todos';
import { createTodo } from '../store/todos/operations';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const TodoAddDialog: React.FunctionComponent<Props> = ({ isOpen, handleClose }: Props) => {
  const dispatch = useDispatch();
  const handleAdd = async (todoFormData: TodoFormData) => {
    const todoPostData: TodoPostData = {
      ...todoFormData,
    };
    dispatch(createTodo(todoPostData));
    handleClose();
  };

  const initialValues: TodoFormData = {
    name: '',
    description: '',
    dueDate: new Date(),
  };

  return (
    <Dialog open={isOpen} maxWidth="md" fullWidth scroll="paper">
      <Formik initialValues={initialValues} onSubmit={handleAdd} validationSchema={validationSchema} validateOnMount>
        {(formikProps: FormikProps<TodoFormData>) => (
          <>
            <DialogTitle>Add todo</DialogTitle>
            <DialogContent>
              <TodoForm />
            </DialogContent>
            <DialogActions>
              <Button
                color="secondary"
                onClick={formikProps.handleSubmit as any}
                disabled={formikProps.isSubmitting || !formikProps.isValid}
              >
                Add
              </Button>
              <Button color="primary" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>
    </Dialog>
  );
};

export default TodoAddDialog;
