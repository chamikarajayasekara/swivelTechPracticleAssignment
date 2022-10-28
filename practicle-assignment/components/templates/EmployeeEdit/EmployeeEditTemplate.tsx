import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import EmployeeEditBottomSection from "../../organisms/EmployeeEditBottomSection/EmployeeEditBottomSection";
import EmployeeEditTopSection from "../../organisms/EmployeeEditTopSection/EmployeeEditTopSection";
import {IEmployee} from "../../../types/IEmployee";

interface Props {
    content:string,
    handleFunction: () => void,
    selectedEmployee:IEmployee
    status:string
}
const EmployeeEditTemplate = (props:Props) => {
    return (
        <Container fluid >
            <EmployeeEditTopSection content={props.content} handleFunction={props.handleFunction}/>
            <EmployeeEditBottomSection selectedEmployee={props.selectedEmployee} status={props.status}/>
        </Container>
    );
};

export default EmployeeEditTemplate;