import React from 'react';
import { Form, useFormikContext } from 'formik';
import { Grid, TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';

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

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  dueDate: Yup.date().required('Due Date is required'),
});

const TodoForm: React.FunctionComponent = () => {
  const classes = useStyles();
  const { errors, handleChange, setFieldTouched, setFieldValue, touched, values } = useFormikContext<TodoFormData>();

  return (
    <Form className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={() => setFieldTouched('name')}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name ? errors.name : ''}
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
              onChange={(date) => {
                setFieldValue('dueDate', date);
                setFieldTouched('dueDate');
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.dueDate && Boolean(errors.dueDate)}
                  helperText={touched.dueDate ? errors.dueDate : ''}
                  required
                />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Description"
            value={values.description}
            onChange={handleChange}
            onBlur={() => setFieldTouched('description')}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description ? errors.description : ''}
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
