import { createSlice } from "@reduxjs/toolkit";

export const formDataSlice = createSlice({
    name: "formData",
    initialState:{
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "Alabama",
        zipCode: "",
        department: "Sales",
    },
    reducers:{
        updateFirstName: (state, action) => {
            state.firstName = action.payload
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload
        },
        updateDateOfBirth: (state, action) => {
            state.dateOfBirth = action.payload
        },
        updateStartDate: (state, action) => {
            state.startDate = action.payload
        },
        updateStreet: (state, action) => {
            state.street = action.payload
        },
        updateCity: (state, action) => {
            state.city = action.payload
        },
        updateState: (state, action) => {
            state.state = action.payload
        },
        updateZipCode: (state, action) => {
            state.zipCode = action.payload
        },
        updateDepartment: (state, action) => {
            state.department = action.payload
        }
    },
})

export const {updateFirstName, updateLastName, updateDateOfBirth, updateStartDate, updateStreet, updateCity, updateState, updateZipCode, updateDepartment} = formDataSlice.actions

export default formDataSlice.reducer