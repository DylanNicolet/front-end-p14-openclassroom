import React from "react";
import FormCreateEmployee from "../components/FormCreateEmployee";

export default function CreateEmployee(){
    return(
        <section className="page-create-employee">
            <button className="button-view-employee">View Current Employees</button>
            <h1>Create Employee</h1>
            <FormCreateEmployee />
        </section>
    )
}