import React from 'react';
import {Col, Row} from "react-bootstrap";
import EditEmployee from "../../molecules/EmployeeEditForm/EditEmployee";
import {IEmployee} from "../../../types/IEmployee";

interface Props {
    status:string,
    selectedEmployee:IEmployee
}

const EmployeeEditBottomSection = (props:Props) => {
    return (
        <Row>
            <Col sm={2}></Col>
            <Col sm={8} >
                {
                    props.status === "idle" && props.selectedEmployee._id ?
                        <EditEmployee selectedEmployee={props.selectedEmployee}/>  : <p>Loading</p>
                }
            </Col>
            <Col sm={2}></Col>
        </Row>
    );
};

export default EmployeeEditBottomSection;