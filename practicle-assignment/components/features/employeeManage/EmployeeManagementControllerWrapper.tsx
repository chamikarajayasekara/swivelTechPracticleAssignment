import React from 'react';
import {IEmployee} from "../../../types/IEmployee";
import GridView from "./GridView";
import TableView from "./TableView";

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
                props.gridType === "grid"? <GridView employees={props.employees} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/> : <TableView employees={props.employees} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>
            }
        </div>
    );
};

export default EmployeeManagementControllerWrapper;