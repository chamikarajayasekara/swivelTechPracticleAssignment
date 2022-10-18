import { configureStore } from "@reduxjs/toolkit";
import employeeManagementReducer from "./slices/employeeSlice"
export const store = configureStore({
    reducer: {
        employeeManagement: employeeManagementReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;