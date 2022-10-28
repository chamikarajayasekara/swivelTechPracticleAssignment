import React from 'react';
import {Col, Row} from "react-bootstrap";
import RoundedButton from "../../atoms/RoundedButton/RoundedButton";

interface Props {
    content:string,
    handleFunction:() =>  void
}
const EmployeeEditTopSection = (props:Props) => {
    return (
        <Row>
            <Col sm={10}></Col>
            <Col sm={2}>
                <div className="grid-select-area">
                    <RoundedButton content={props.content} handleFunction={props.handleFunction}/>
                </div>
            </Col>
        </Row>
    );
};

export default EmployeeEditTopSection;