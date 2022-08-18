import { createSlice } from "@reduxjs/toolkit";

export const EmployeeDataSlice = createSlice({
    name: "formData",
    initialState:{
        data:[
            /*{
                firstName: "Rachel",
                lastName: "Monte",
                dateOfBirth: "9/15/1993",
                startDate: "12/04/2015",
                street: "Royal Road 17",
                city: "Asgard",
                state: "Alabama",
                zipCode: "10224",
                department: "Sales"
            },
            {
                firstName: "Eric",
                lastName: "Polit",
                dateOfBirth: "3/18/1990",
                startDate: "5/25/2019",
                street: "Mars Str 13",
                city: "Whales",
                state: "New York",
                zipCode: "34837",
                department: "Marketing"
            },
            {
                firstName: "Abraham",
                lastName: "Lupin",
                dateOfBirth: "6/03/1985",
                startDate: "4/24/2009",
                street: "Avenue Baguette 12",
                city: "Mordor",
                state: "Texas",
                zipCode: "15436",
                department: "Human Resources"
            },
            {
                firstName: "Jimmy",
                lastName: "Newton",
                dateOfBirth: "11/14/2000",
                startDate: "9/17/2020",
                street: "Baker street 12",
                city: "Biscuit",
                state: "California",
                zipCode: "75648",
                department: "Legal"
            },
            {
                firstName: "Bryan",
                lastName: "Denvim",
                dateOfBirth: "10/05/2001",
                startDate: "2/15/2022",
                street: "Side Str 23",
                city: "Upside",
                state: "Utah",
                zipCode: "78453",
                department: "Sales"
            },
            {
                firstName: "Daeva",
                lastName: "Elyos",
                dateOfBirth: "7/03/1991",
                startDate: "9/14/2020",
                street: "Templar Avenue 34",
                city: "Sanctum",
                state: "New Jersey",
                zipCode: "23455",
                department: "Legal"
            }*/
        ]
    },
    reducers:{
        updateEmployeeData: (state, action) => {
            state.data.push(action.payload)
        },
    },
})

export const {updateEmployeeData} = EmployeeDataSlice.actions

export default EmployeeDataSlice.reducer