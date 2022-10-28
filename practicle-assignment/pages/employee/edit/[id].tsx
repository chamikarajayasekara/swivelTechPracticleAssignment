import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {listSelectedEmployee} from "../../../store/slices/employeeSlice";
import {useRouter} from "next/router";
import EmployeeEditTemplate from "../../../components/templates/EmployeeEdit/EmployeeEditTemplate";

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
            <EmployeeEditTemplate content={"LIST VIEW"} handleFunction={addClickButton} selectedEmployee={selectedEmployee} status={status}/>
    );
};
export default Edit;