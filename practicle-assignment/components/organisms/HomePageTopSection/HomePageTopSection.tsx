import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HomeGrid from "../../molecules/HomeGrid/HomeGrid";

interface Props {
    description:string,
    handleFunction: () => void;
    buttonContent:string
}
const HomePageTopSection = (props:Props) => {
    return (
        <Container fluid >
            <Row>
                <Col sm={10}>{props.description}</Col>
                <Col sm={2}>
                    <HomeGrid addClickButton={props.handleFunction} buttonContent={props.buttonContent}/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageTopSection;