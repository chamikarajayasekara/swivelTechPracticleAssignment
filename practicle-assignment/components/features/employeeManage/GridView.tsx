import React from 'react';
import {IEmployee} from "../../../types/IEmployee";
import EmployeeCard from "../../sharedComponents/Cards/EmployeeCard";


interface Props {
    employees:IEmployee[],
    handleDelete: (id:string) => void;
    handleEdit: (id:string)=> void
}
const GridView = (props:Props) => {
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

export default GridView;