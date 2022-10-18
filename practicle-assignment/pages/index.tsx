import type { NextPage } from 'next'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {Container} from "react-bootstrap";
import {Col, Row} from "react-bootstrap";
import RoundedButton from "../components/sharedComponents/Buttons/RoundedButton";
import IconButton from "../components/sharedComponents/Buttons/IconButton";
import React from "react";
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();
    const [gridIcon, setGridIcon] = React.useState<string>("grid");

    function addClickButton() {
        router.push("employee/list")
    }
    function handleGrid() {
        setGridIcon("table")
    }

  return (
      <Container fluid >
         Welcome to Employee Management System
      </Container>
  )
}

export default Home
