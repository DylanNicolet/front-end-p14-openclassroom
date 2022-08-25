import React from "react";
import { DataTable } from "open-classrooms-p14-data-table-library";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//component to render Employee list page
export default function EmployeeList(){

    //Data to display on table
    const data = useSelector((state) => state.employeeData.data)

    //Array of Number of entries to display per page of table
    const entriesPerPage = [
        5,10,25,50,100
    ]

    //Array of objects for each table header with corresponding datakey
    const tableHeaders = [
        {
            header: "First Name",
            dataKey: "firstName"
        },
        {
            header: "Last Name",
            dataKey: "lastName"
        },
        {
            header: "Start Date",
            dataKey: "startDate",
            isDate: true
        },
        {
            header: "Department",
            dataKey: "department"
        },
        {
            header: "Date of Birth",
            dataKey: "dateOfBirth",
            isDate: true
        },
        {
            header: "Street",
            dataKey: "street"
        },
        {
            header: "City",
            dataKey: "city"
        },
        {
            header: "State",
            dataKey: "state"
        },
        {
            header: "Zip Code",
            dataKey: "zipCode"
        },
    ]

    return(
        <section className="employee-list-page">
            <h1 className="employee-list-page__title">Current Employees</h1>
            <DataTable data={data} entriesPerPage={entriesPerPage} tableHeaders={tableHeaders}/>
            <button className="button-link-home"><Link to={"/"}>Home</Link></button>
        </section>
    )
}