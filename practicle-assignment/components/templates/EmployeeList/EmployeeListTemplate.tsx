import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import EmployeeManagementControllerWrapper from "../../organisms/EmployeeControllerWrapper/EmployeeManagementControllerWrapper";
import EmployeeListTopSection from "../../organisms/EmployeeListTopSection/EmployeeListTopSection";
import {IEmployee} from "../../../types/IEmployee";

interface Props {
    content:string,
    gridIcon:string
    addClickButton: () => void;
    handleGrid: () => void;
    handleDelete: (id:string) => void;
    handleEdit: (id:string) => void;
    employees:IEmployee[]
}

const EmployeeListTemplate = (props:Props) => {
    return (
        <Container fluid >
            <EmployeeListTopSection addClickButton={props.addClickButton} gridIcon={props.gridIcon} handleGrid={props.handleGrid} content={props.content}/>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    {
                        props.employees && props.employees.length > 0 ?
                            <EmployeeManagementControllerWrapper gridType={props.gridIcon} employees={props.employees} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>
                            :
                            <div>Loading</div>
                    }
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    );
}

export default EmployeeListTemplate;