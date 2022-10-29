import axios from "axios";
import {IEmployee} from "../types/IEmployee";

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

type Body = { firstName: any; lastName: any; emailAddress: any; phoneNumber: any; gender: any; photo: any } ;

type Headers = { accept: string }

interface IProps{
    method: string
    url: string;
    headers: { accept: string };
    body: any
}
axios.defaults.baseURL = `http://localhost:8080`;
export async function RestOperationsHelper(userParams: IProps) {
    try{
        const result = await  getMethod(userParams.method)(userParams.url, userParams.body);
        if (userParams.method === "get"){
            return result.data;
        }else{
            return {message:result.data, status: result.status};
        }
    }catch (err:any) {
        return  {isError:true, message:err.message, status:err.request.status};
    }
}

function getMethod(method: string)  {
    let result = axios.get;
    if (method === "get"){
        result = axios.get;
    }else if(method === "post"){
        result = axios.post
    }else if(method === "put"){
        result = axios.put
    }else if(method === "delete"){
        result = axios.delete
    }
    return result;
}