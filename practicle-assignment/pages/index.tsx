import type { NextPage } from 'next'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {Container} from "react-bootstrap";
import {Col, Row} from "react-bootstrap";
import RoundedButton from "../components/sharedComponents/Buttons/RoundedButton";
import IconButton from "../components/sharedComponents/Buttons/IconButton";
import React from "react";

const Home: NextPage = () => {


  return (
      <Container fluid >
         Welcome to Employee Management System
      </Container>
  )
}

export default Home
