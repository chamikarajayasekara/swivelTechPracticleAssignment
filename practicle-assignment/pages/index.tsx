import type { NextPage } from 'next'
import React from "react";
import {useRouter} from "next/router";
import HomePage from "../components/templates/HomePage/HomePage";

const Home: NextPage = () => {
    const router = useRouter()
    function addClickButton() {
        router.push(`/employee/list`)
    }

  return (
      <HomePage handleFunction={addClickButton} description={"Welcome to Employee Management System"} buttonContent={"LIST EMPLOYEE"}/>
  )
}

export default Home
