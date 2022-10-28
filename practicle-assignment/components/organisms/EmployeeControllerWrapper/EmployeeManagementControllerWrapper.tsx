import React from 'react';
import {IEmployee} from "../../../types/IEmployee";
import EmployeeListGridView from "../../molecules/EmployeeListGridView/EmployeeListGridView";
import EmployeeListTableView from "../../molecules/EmployeeListTableView/EmployeeListTableView";

interface Props {
    gridType:string,
    employees:IEmployee[],
    handleDelete: (id:string) => void;
    handleEdit: (id:string)=> void
}
const EmployeeManagementControllerWrapper = (props:Props) => {
    return (
        <div>
            {
                props.gridType === "grid"? <EmployeeListGridView employees={props.employees} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/> : <EmployeeListTableView employees={props.employees} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
            }
        </div>
    );
};

export default EmployeeManagementControllerWrapper;