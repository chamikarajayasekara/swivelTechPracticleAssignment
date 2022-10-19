import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RoundedButton from "../../../components/sharedComponents/Buttons/RoundedButton";
import IconButton from "../../../components/sharedComponents/Buttons/IconButton";
import {useRouter} from "next/router";
import AddEmployee from "../../../components/features/employeeManage/AddEmployee";

const Index = () => {
    const router = useRouter();
    function addClickButton() {
        router.push("/employee/list")
    }
    return (
        <Container fluid >
            <Row>
                <Col sm={10}></Col>
                <Col sm={2}>
                    <div className="grid-select-area">
                        <RoundedButton content={"LIST VIEW"} handleFunction={addClickButton}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8} >
                    <AddEmployee/>
                </Col>
                <Col sm={2}></Col>
            </Row>

        </Container>
    );
};

export default Index;