import React from 'react'
import './EmployeeList.css'
import {NavLink} from 'react-router-dom'
const EmployeeList = ({employees}) =>{

    const employeeCard = () =>{
        return(
            employees.map((employee)=>{
                return(
                    <NavLink to={{
                        pathname: '/employee/sheet',
                        state: { id: employee._id }
                      }} 
                      key={employee._id} 
                      className="employeeCard"
                      >
                        <h4>{employee.username}</h4>
                        <h5>{employee.role}</h5>
                    </NavLink>
                )
            })
        )
    }
    return(
        <div className="listContainer">
            <div className="employeeLabelContainer">
            Employee List
            </div>
            <div className="mainEmployeesContainer">
            <div className="employeeContainer">
            {employeeCard()}
            </div>
            </div>
        </div>
    )
}

export default EmployeeList