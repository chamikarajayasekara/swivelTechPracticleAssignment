import React from 'react';
import Image from 'next/image'
import {IEmployee} from "../../../types/IEmployee";
import IconButton from "../../atoms/IconButton/IconButton";
interface Props {
    employee:IEmployee;
    handleDelete: (id:string) => void;
    handleEdit: (id:string) => void

}
const EmployeeCard = (props:Props) => {
    function handleActions() {}
    return (
        <div className="employee-card">
            <Image
                src={props.employee.photo ? props.employee.photo : 'https://randomuser.me/api/portraits/lego/3.jpg'}
                alt="Picture of the author"
                width="350px"
                height="270px"
            />
            <div className="employee-card-body">
                <p>{props.employee.firstName}</p>
                <p>{props.employee.emailAddress}</p>
                <p>{props.employee.phoneNumber}</p>
                <div className="last-line">
                    <p>{props.employee.gender === "M" ? "Male" : "Female"}</p>
                    <div className="actions">
                        <div onClick={e => props.handleDelete(props.employee._id)}>
                            <IconButton icon={"delete"} handleFunction={handleActions}/>
                        </div>
                       <div onClick={e => props.handleEdit(props.employee._id)}>
                           <IconButton icon={"edit"} handleFunction={handleActions}/>
                       </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default EmployeeCard;