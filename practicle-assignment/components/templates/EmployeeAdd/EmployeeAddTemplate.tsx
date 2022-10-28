import React from 'react';
import {Container} from "react-bootstrap";
import EmployeeAddTopSection from "../../organisms/EmployeeAddTopSection/EmployeeAddTopSection";
import EmployeeAddBottomSection from "../../organisms/EmployeeAddBottomSection/EmployeeAddBottomSection";

interface Props {
    content:string,
    handleFunction:() => void
}
const EmployeeAddTemplate = (props:Props) => {
    return (
        <Container fluid >
            <EmployeeAddTopSection content={props.content} handleFunction={props.handleFunction}/>
            <EmployeeAddBottomSection />
        </Container>
    );
};

export default EmployeeAddTemplate;