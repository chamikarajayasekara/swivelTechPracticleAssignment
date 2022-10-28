import React from 'react';
import {useRouter} from "next/router";
import EmployeeAddTemplate from "../../../components/templates/EmployeeAdd/EmployeeAddTemplate";

const Index = () => {
    const router = useRouter();

    function addClickButton() {
        router.push("/employee/list")
    }

    return (
            <EmployeeAddTemplate content={"LIST VIEW"} handleFunction={addClickButton}/>
    );
};

export default Index;