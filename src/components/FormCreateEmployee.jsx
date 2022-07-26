import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName, updateDateOfBirth, updateStartDate, updateStreet, updateCity, updateZipCode, updateState, updateDepartment } from "../redux/formDataSlice";
import Dropdown from "react-dropdown";
import DatePicker from "react-date-picker";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

export default function FormCreateEmployee(){
    const firstName = useSelector((state) => state.formData.firstName)
    const lastName = useSelector((state) => state.formData.lastName)
    const dateOfBirth = useSelector((state) => state.formData.dateOfBirth)
    const startDate = useSelector((state) => state.formData.startDate)
    const street = useSelector((state) => state.formData.street)
    const city = useSelector((state) => state.formData.city)
    const zipCode = useSelector((state) => state.formData.zipCode)

    const dispatch = useDispatch()

    const stateNames = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
        'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
        'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    const department = [
        "Sales", "Marketing", "Engineering", "Human Resources", "Legal"
    ]

    const [modal, setModal] = React.useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setModal(true)
    }

    return(
        <form className="create-employee__form">
            <PureModal
                isOpen={modal}
                closeButton="x"
                onClose={() => {
                    setModal(false)
                    return true
                }}
            >
                <p>Employee Created</p>
            </PureModal>

            <label htmlFor="firstName">First Name</label>
            <input
                type="text" 
                name="firstName"
                className="text-input name"
                value={firstName}
                onChange={e => dispatch(updateFirstName(e.target.value))}
                required
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text"
                name="lastName"
                className="text-input name"
                value={lastName}
                onChange={e => dispatch(updateLastName(e.target.value))}
                required
            />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <DatePicker name="dateOfBirth" value={dateOfBirth} onChange={(e) => dispatch(updateDateOfBirth(e))} calendarIcon={null} clearIcon={null} />

            <label htmlFor="startDate">Start Date</label>
            <DatePicker name="startDate" value={startDate} onChange={(e) => dispatch(updateStartDate(e))}  calendarIcon={null}  clearIcon={null}/>

            

            <fieldset>
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input 
                    type="text"
                    name="street"
                    value={street}
                    onChange={e => dispatch(updateStreet(e.target.value))}
                    required
                />

                <label htmlFor="city">City</label>
                <input 
                    type="text"
                    name="city"
                    value={city}
                    onChange={e => dispatch(updateCity(e.target.value))}
                    required
                />

                <label htmlFor="state">State</label>
                <Dropdown name="state" options={stateNames} value={stateNames[0]} onChange={e => dispatch(updateState(e.value))}/>

                <label htmlFor="zipCode">Zip Code</label>
                <input 
                    type="text"
                    name="zipCode"
                    value={zipCode}
                    onChange={e => dispatch(updateZipCode(e.target.value))}
                    required
                />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Dropdown controlClassName="department-dropdown" name="department" options={department} value={department[0]} onChange={e => dispatch(updateDepartment(e.value))}/>

            <button className="button-save" onClick={handleSubmit}>Save</button>
        </form>
    )
}