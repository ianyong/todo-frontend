import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import TodoForm, { TodoFormData } from '../forms/TodoForm';
import { TodoData, TodoPutData } from '../types/todos';
import { updateTodo } from '../store/todos/operations';

interface Props {
  todo: TodoData;
  isOpen: boolean;
  handleClose: () => void;
}

const TodoEditDialog: React.FunctionComponent<Props> = ({ todo, isOpen, handleClose }: Props) => {
  const dispatch = useDispatch();
  const handleUpdate = async (todoFormData: TodoFormData) => {
    const todoPutData: TodoPutData = {
      ...todoFormData,
      id: todo.id,
      isCompleted: todo.isCompleted,
    };
    dispatch(updateTodo(todoPutData));
    handleClose();
  };

  const initialValues: TodoFormData = {
    name: todo.name,
    description: todo.description,
    dueDate: todo.dueDate,
  };

  return (
    <Dialog open={isOpen} maxWidth="md" fullWidth scroll="paper">
      <Formik initialValues={initialValues} onSubmit={handleUpdate} validateOnMount>
        {(formikProps: FormikProps<TodoFormData>) => (
          <>
            <DialogTitle>Edit todo</DialogTitle>
            <DialogContent>
              <TodoForm />
            </DialogContent>
            <DialogActions>
              <Button
                color="secondary"
                onClick={formikProps.handleSubmit as any}
                disabled={formikProps.isSubmitting || !formikProps.isValid}
              >
                Edit
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

export default TodoEditDialog;
