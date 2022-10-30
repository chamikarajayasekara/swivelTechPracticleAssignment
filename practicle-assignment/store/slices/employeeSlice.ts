import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IEmployee} from "../../types/IEmployee";
import {RestOperationsHelper} from "../../apis/restOperationsHelper";

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
            let userParams = {
                method: 'get',
                url: '/employee',
                headers: { accept: '*/*' },
                body: null,
            }
            return await RestOperationsHelper(userParams)
        } catch (error) {
            throw error;
        }
    }
);

export const listSelectedEmployee = createAsyncThunk(
    'employeeManagement/listSelectedEmployee',
    async ({id}:{id: any}) => {
        try{
            let userParams = {
                method: 'get',
                url: `/employee/${id}`,
                headers: { accept: '*/*' },
                body: null,
            }
            return await RestOperationsHelper(userParams)
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