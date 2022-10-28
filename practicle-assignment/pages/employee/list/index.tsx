import React, {useContext, useEffect} from 'react';
import {deleteEmployee, listEmployeesFromApi} from "../../../apis/employees.api.helper";
import {NextPage} from "next";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store/store";
import {listEmployees} from "../../../store/slices/employeeSlice"
import {useRouter} from "next/router";
import {AlertContext} from "../../../context";
import EmployeeListTemplate from "../../../components/templates/EmployeeList/EmployeeListTemplate";

const Index: NextPage  = () => {
    const { addAlert} =useContext(AlertContext)
    const dispatch = useDispatch<AppDispatch>();
    const employees = useSelector((state: RootState) => state.employeeManagement.employees);
    const router = useRouter()
    const [gridIcon, setGridIcon] = React.useState<string>("grid");

    function addClickButton() {
        router.push("/employee/add")
    }
    function handleGrid() {
        if (gridIcon === "grid"){
            setGridIcon("table")
        }else{
            setGridIcon("grid")
        }

    }

    function handleDelete(id:string) {
        deleteEmployee(id).then((res:any) => {
            if(res){
                addAlert("Employee Deleted Successfully", "success", true);
                router.push("/employee/list");
                dispatch(listEmployees ())
            }else{
                addAlert("Employee Deleted Failed", "failed", true);
                router.push("/employee/list")
            }

        })
            .catch(e => {
                addAlert("Employee Deleted Failed", "failed", true);
                router.push("/employee/list")
            })
    }

    function handleEdit(id:string) {
        router.push(`/employee/edit/${id}`)
    }

    useEffect(()=>{
        dispatch(listEmployees ())
    },[])

    return (
        <EmployeeListTemplate content={"ADD EMPLOYEE"} gridIcon={gridIcon} addClickButton={addClickButton} handleGrid={handleGrid} handleDelete={handleDelete} handleEdit={handleEdit} employees={employees}/>
    );
};

export default Index;