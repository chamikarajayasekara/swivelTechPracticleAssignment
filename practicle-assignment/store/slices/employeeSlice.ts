import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as API from "../../apis/employees.api.helper"
import {IEmployee} from "../../types/IEmployee";
import {listSelectedEmployeeFromApi} from "../../apis/employees.api.helper";

export interface IEmployeesState {
    employees:IEmployee[],
    status:'idle' | 'loading' | 'failed',
    test:string,
    selectedEmployee:IEmployee,
}

const initialState: IEmployeesState = {
    employees:[],
    status: 'idle',
    test:"hiii",
    selectedEmployee:{
        _id:"",
        firstName:"",
        lastName:"",
        emailAddress: "",
        phoneNumber: "",
        gender: "",
        photo:""
    }
}


export const listEmployees = createAsyncThunk(
    'employeeManagement/listEmployees',
    async () => {
        try{
            return await API.listEmployeesFromApi();
        } catch (error) {
            throw error;
        }
    }
);

export const listSelectedEmployee = createAsyncThunk(
    'employeeManagement/listSelectedEmployee',
    async ({id}:{id: any}) => {
        console.log(id)
        try{
            return await API.listSelectedEmployeeFromApi(id);
        } catch (error) {
            throw error;
        }
    }
);

const EmployeeManagementSlice= createSlice({
    name:'employeeManagement',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(listEmployees.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listEmployees.fulfilled, (state,{payload}) => {
                state.status = 'idle';
                state.employees = payload?.data
            })
            .addCase(listEmployees.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(listSelectedEmployee.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(listSelectedEmployee.fulfilled, (state,{payload}) => {
                state.status = 'idle';
                state.selectedEmployee = payload
            })
            .addCase(listSelectedEmployee.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export default  EmployeeManagementSlice.reducer;