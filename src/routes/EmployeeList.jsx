import React from "react";
import { DataTable } from "open-classrooms-p14-data-table-library";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployeeList(){

    const data = useSelector((state) => state.employeeData.data)

    const entriesPerPage = [
        5,10,25,50,100
    ]

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