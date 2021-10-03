import React from 'react';
import { Form, useFormikContext } from 'formik';
import { Grid, TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  form: {
    paddingTop: '5px',
  },
}));

export interface TodoFormData {
  name: string;
  description: string;
  dueDate: Date;
}

const TodoForm: React.FunctionComponent = () => {
  const classes = useStyles();
  const { handleChange, setFieldValue, values } = useFormikContext<TodoFormData>();

  return (
    <Form className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            name="name"
            label="Name"
            value={values.name}
            onChange={(event) => handleChange(event)}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Due Date"
              value={values.dueDate}
              onChange={(date) => setFieldValue('dueDate', date)}
              renderInput={(params) => <TextField {...params} required />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Description"
            value={values.description}
            onChange={(event) => handleChange(event)}
            variant="outlined"
            fullWidth
            multiline
            rows={5}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default TodoForm;
