import React from "react";
import FormCreateEmployee from "../components/FormCreateEmployee";
import { Link } from "react-router-dom";

export default function CreateEmployee(){

    return(
        <section className="page-create-employee">
            <button className="button-view-employee"><Link to={"employee-list"}>View Current Employees</Link></button>
            <h1>Create Employee</h1>
            <FormCreateEmployee />
        </section>
    )
}