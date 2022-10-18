import axios from "axios";

export async function listEmployeesFromApi() {
    try{
        return  (await  axios.get(`http://localhost:8080/employee`)).data;
    }catch (e) {
        console.log(e)
    }
}