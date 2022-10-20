import type { NextPage } from 'next'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {Container} from "react-bootstrap";
import {Col, Row} from "react-bootstrap";
import RoundedButton from "../components/sharedComponents/Buttons/RoundedButton";
import IconButton from "../components/sharedComponents/Buttons/IconButton";
import React from "react";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter()
    function addClickButton() {
        router.push(`/employee/list`)
    }

  return (
      <Container fluid >
          <Row>
              <Col sm={10}> Welcome to Employee Management System</Col>
              <Col sm={2}>
                  <div className="grid-select-area mt-6">
                      <RoundedButton content={"LIST EMPLOYEE"} handleFunction={addClickButton}/>
                  </div>
              </Col>
          </Row>

      </Container>
  )
}

export default Home
