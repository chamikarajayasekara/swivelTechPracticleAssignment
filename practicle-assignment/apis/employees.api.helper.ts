import axios from "axios";
import {IEmployee} from "../types/IEmployee";

export async function listEmployeesFromApi() {
    try{
        return  (await  axios.get(`http://localhost:8080/employee`)).data;
    }catch (e) {
        throw "Employees get Failed"
    }
}

export async function listSelectedEmployeeFromApi(id:string) {
    try{
        return  (await  axios.get(`http://localhost:8080/employee/${id}`)).data;
    }catch (e) {
        throw "Employee get Failed"
    }
}

export  async function addEmployee(employee:IEmployee) {
    try {
        return  (await  axios.post(`http://localhost:8080/employee`,{
            "firstName": employee.firstName,
            "lastName": employee.lastName,
            "emailAddress": employee.emailAddress,
            "phoneNumber": employee.phoneNumber,
            "photo": employee.photo,
            "gender": employee.gender
        }));
    }catch (e) {
        throw "Employees create Failed"
    }
}