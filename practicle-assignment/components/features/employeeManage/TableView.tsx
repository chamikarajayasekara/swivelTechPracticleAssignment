import React from 'react';
import {IEmployee} from "../../../types/IEmployee";
import EmployeeCard from "../../sharedComponents/Cards/EmployeeCard";
import Table from 'react-bootstrap/Table';
import Image from "next/image";
import IconButton from "../../sharedComponents/Buttons/IconButton";

interface Props {
    employees:IEmployee[],
    handleDelete: (id:string) => void;
    handleEdit: (id:string)=> void
}
const TableView = (props:Props) => {
    function handleActions() {

    }
    return (
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                props.employees.map((employee:IEmployee, key:number )=>
                    <tr key={key}>
                        <td>
                            <Image
                                src={employee.photo ? employee.photo : 'https://randomuser.me/api/portraits/lego/3.jpg'}
                                alt="Picture of the author"
                                width="55px"
                                height="55px"
                            />
                        </td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailAddress}</td>
                        <td>{employee.phoneNumber}</td>
                        <td>{employee.gender === "M" ? "Male" : "Female"}</td>
                        <td>
                            <div className="actions">
                                <div onClick={e => props.handleDelete(employee._id)}>
                                    <IconButton icon={"delete"} handleFunction={handleActions}/>
                                </div>
                                <div onClick={e => props.handleEdit(employee._id)}>
                                    <IconButton icon={"edit"} handleFunction={handleActions}/>
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            }

            </tbody>
        </Table>
    );
};

export default TableView;