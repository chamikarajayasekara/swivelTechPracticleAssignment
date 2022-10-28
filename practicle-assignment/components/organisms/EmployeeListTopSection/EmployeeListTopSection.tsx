import React from 'react';
import {Col, Row} from "react-bootstrap";
import GridChangeSection from "../../molecules/EmployeeGridChanger/GridChangeSection";

interface Props {
    content:string,
    gridIcon:string
    addClickButton: () => void;
    handleGrid: () => void
}
const EmployeeListTopSection = (props:Props) => {
    return (
        <Row>
            <Col sm={6} md={8} lg={10}></Col>
            <Col sm={6} md={4} lg={2}>
                <GridChangeSection content={props.content} addClickButton={props.addClickButton} icon={props.gridIcon} handleGrid={props.handleGrid}/>
            </Col>
        </Row>
    );
};

export default EmployeeListTopSection;