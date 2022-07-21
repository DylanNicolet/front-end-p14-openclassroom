import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName, updateDateOfBirth, updateStartDate, updateStreet, updateCity, updateZipCode } from "../redux/formDataSlice";

export default function FormCreateEmployee(){
    const firstName = useSelector((state) => state.formData.firstName)
    const lastName = useSelector((state) => state.formData.lastName)
    const street = useSelector((state) => state.formData.street)
    const city = useSelector((state) => state.formData.city)
    const zipCode = useSelector((state) => state.formData.zipCode)

    const dispatch = useDispatch()

    return(
        <form>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text" 
                name="firstName"
                className="text-input"
                value={firstName}
                onChange={e => dispatch(updateFirstName(e.target.value))}
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name="lastName"
                className="text-input"
                value={lastName}
                onChange={e => dispatch(updateLastName(e.target.value))}
            />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input 
                type="date"
                name="dateOfBirth"
                onChange={e => dispatch(updateDateOfBirth(e.target.value))}
            />

            <label htmlFor="startDate">Start Date</label>
            <input 
                type="date"
                name="startDate"
                onChange={e => dispatch(updateStartDate(e.target.value))}
            />

            <fieldset>
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input 
                    type="text"
                    name="street"
                    value={street}
                    onChange={e => dispatch(updateStreet(e.target.value))}
                />

                <label htmlFor="city">City</label>
                <input 
                    type="text"
                    name="city"
                    value={city}
                    onChange={e => dispatch(updateCity(e.target.value))}
                />
                <label htmlFor="zipCode">Zip Code</label>
                <input 
                    type="text"
                    name="zipCode"
                    value={zipCode}
                    onChange={e => dispatch(updateZipCode(e.target.value))}
                />
            </fieldset>

            
        </form>
    )
}