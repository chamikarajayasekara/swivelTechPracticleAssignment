import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as API from "../../apis/employees.api.helper"

export interface IEmployeesState {
    employees:IEmployee[],
    status:'idle' | 'loading' | 'failed',
    test:string
}

const initialState: IEmployeesState = {
    employees:[],
    status: 'idle',
    test:"hiii"
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
    }
})

export default  EmployeeManagementSlice.reducer;