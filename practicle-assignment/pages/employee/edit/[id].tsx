import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {listSelectedEmployee} from "../../../store/slices/employeeSlice";
import {useRouter} from "next/router";
import EditEmployee from "../../../components/features/employeeManage/EditEmployee";
import {Col, Container, Row} from "react-bootstrap";
import AddEmployee from "../../../components/features/employeeManage/AddEmployee";
import RoundedButton from "../../../components/sharedComponents/Buttons/RoundedButton";

const Edit = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    let id:any = router?.query?.id;
    const selectedEmployee = useSelector((state: RootState) => state.employeeManagement.selectedEmployee);
    const status = useSelector((state: RootState) => state.employeeManagement.status);
    useEffect(()=>{
        if (id){
            dispatch(listSelectedEmployee({"id":id}))
        }
    },[id])

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
                {
                    status === "idle" && selectedEmployee._id ?
                        <EditEmployee selectedEmployee={selectedEmployee}/>  : <p>Loading</p>
                }
            </Col>
            <Col sm={2}></Col>
        </Row>

    </Container>
    );
};
export default Edit;