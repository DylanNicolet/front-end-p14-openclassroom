import { createSlice } from "@reduxjs/toolkit";

export const EmployeeDataSlice = createSlice({
    name: "formData",
    initialState:{
        data:[]
    },
    reducers:{
        updateEmployeeData: (state, action) => {
            state.data.push(action.payload)
        },
    },
})

export const {updateEmployeeData} = EmployeeDataSlice.actions

export default EmployeeDataSlice.reducer