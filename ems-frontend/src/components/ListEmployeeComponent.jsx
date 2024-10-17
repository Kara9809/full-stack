import React, { useEffect } from 'react'
import { useState } from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const dummyData = [
        {
            "id": 1,
            "firstName": "Karina",
            "lastName": "Ivanova",
            "email": "karinaivanova441@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Elena",
            "lastName": "Sheidin",
            "email": "lenasheidin1@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Asaf",
            "lastName": "Pimenov",
            "email": "asafpimenov@gmail.com"
        }
    ]
    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent