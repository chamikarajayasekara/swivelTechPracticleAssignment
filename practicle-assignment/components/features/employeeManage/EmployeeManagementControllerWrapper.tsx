import React from 'react';
import EmployeeCard from "../../sharedComponents/Cards/EmployeeCard";
import {IEmployee} from "../../../types/IEmployee";

interface Props {
    gridType:string,
    employees:IEmployee[],
    handleDelete: (id:number) => void;
    handleEdit: (id:number)=> void
}
const EmployeeManagementControllerWrapper = (props:Props) => {
    return (
        <div className="employee-wrapper">
            {
                props.employees.map((employee:IEmployee, key:number )=>
                    <EmployeeCard employee={employee} key={key} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
                )
            }
        </div>
    );
};

export default EmployeeManagementControllerWrapper;