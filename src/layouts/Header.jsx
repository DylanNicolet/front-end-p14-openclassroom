import React from "react";
import logo from "../images/logo.jpeg"

//Component to display HRnet's header with logo. No props
export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo of Wealth Health" />
            <h1>HRnet</h1>
        </header>
    )
}