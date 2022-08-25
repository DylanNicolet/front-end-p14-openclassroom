import { configureStore } from '@reduxjs/toolkit';
import formDataSlice from "./formDataSlice";
import employeeDataSlice from './employeeDataSlice';

export const store = configureStore({
  reducer: {
    formData: formDataSlice,
    employeeData: employeeDataSlice,
  },
});
