import React from 'react';
import {Col, Row} from "react-bootstrap";
import AddEmployee from "../../molecules/EmployeeAddForm/AddEmployee";

const EmployeeAddBottomSection = () => {
    return (
        <Row>
            <Col sm={2}></Col>
            <Col sm={8} >
                <AddEmployee/>
            </Col>
            <Col sm={2}></Col>
        </Row>
    );
};

export default EmployeeAddBottomSection;