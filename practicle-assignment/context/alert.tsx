import React, {createContext, useState, FC, useEffect} from "react";
import Toaster from "../components/sharedComponents/Toaster/Toaster";
export type AlertContextState = {
    alert: any;
    addAlert: (message:any,severity:any,alert:boolean) => void;
};

const contextDefaultValues: AlertContextState = {
    alert: {
        message:"",
        severity:"",
        alert:false
    },
    addAlert: (message:any,severity:any,alert:boolean) => {},
};
interface Props{
    children: React.ReactNode
}
export const AlertContext = createContext<AlertContextState>(
    contextDefaultValues
)

const AlertProvider: React.FC<Props> = ({children}) =>  {
    const [alert, setAlert] = useState(contextDefaultValues.alert);

    function addAlert(message:any,severity:any,alert:boolean) {
        setAlert({
                message:message,
                severity:severity,
                alert:alert
            }
        )
    }

    return (
        <AlertContext.Provider
            value={{
                alert,
                addAlert
            }}
        >
            <Toaster alert={alert}/>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;