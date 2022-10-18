import React, {useEffect} from 'react';
import {listEmployeesFromApi} from "../../../apis/employees.api.helper";
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {listEmployees} from "../../../store/slices/employeeSlice"
import {Col, Container, Row} from "react-bootstrap";
import RoundedButton from "../../../components/sharedComponents/Buttons/RoundedButton";
import IconButton from "../../../components/sharedComponents/Buttons/IconButton";
import {useRouter} from "next/router";
import EmployeeManagementControllerWrapper
    from "../../../components/features/employeeManage/EmployeeManagementControllerWrapper";

const Index: NextPage  = () => {
    const dispatch = useDispatch<AppDispatch>();
    const employees = useSelector((state: RootState) => state.employeeManagement.employees);
    const router = useRouter()
    const [gridIcon, setGridIcon] = React.useState<string>("grid");

    function addClickButton() {
        router.push("/employee/add")
    }
    function handleGrid() {
        setGridIcon("table")
    }

    function handleDelete(id:number) {
        console.log(id)
    }

    function handleEdit(id:number) {
        console.log(id)
    }

    useEffect(()=>{
        dispatch(listEmployees ())
    },[])

    return (
        <Container fluid >
            <Row>
                <Col sm={10}></Col>
                <Col sm={2}>
                    <div className="grid-select-area">
                        <RoundedButton content={"ADD EMPLOYEE"} handleFunction={addClickButton}/>
                        <IconButton icon={gridIcon} handleFunction={handleGrid}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    {
                        employees && employees.length > 0 ?
                            <EmployeeManagementControllerWrapper gridType={gridIcon} employees={employees} handleDelete={handleDelete} handleEdit={handleEdit}/>
                            :
                            <div>Loading</div>
                    }
                </Col>
                <Col sm={1}></Col>
            </Row>


        </Container>
    );
};

export default Index;