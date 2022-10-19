import React, {useEffect} from 'react';
import Card from "react-bootstrap/Card";
import EmployeeInputs from "../../../data/employeeeInputs.json"
import InputController from "../../sharedComponents/InputControllerss/InputController";
import {
    checkIsNullishByAll,
    errorIdentifiedInSubmit,
    ErrorsExists,
    InitiallySetData,
    InputValueGet
} from "../../../helpers/InputDataSetHelper";
const AddEmployee = () => {
    const [inputValue, setInputValue] = React.useState();
    const [inputErrorValue, setInputErrorValue] = React.useState<any>();
    const [editFields, setEditFields] = React.useState<any>({});

    useEffect(()=>{
        InitiallySetData(EmployeeInputs.fields, "add", setInputValue,setInputErrorValue , null, setEditFields)
    },[])

    const handleChangeInputValues = (e:any, dbName:string) => {
        const { name, value } = e.target;
        setInputValue((prev:any) => ({
            ...prev,
            [dbName]: value,
        }));
    };

    function handleSubmit(e:any) {
        e.preventDefault();
        errorIdentifiedInSubmit(EmployeeInputs.fields, inputValue, setInputErrorValue,setEditFields )
        let isNull = checkIsNullishByAll(inputValue,EmployeeInputs.fields )
        if(isNull === false){
            console.log(inputValue)
        }
    }
    const MainHandleFunction = (e:any, buttonType:string) =>{
        e.preventDefault();
        if (buttonType === "Cancel"){
            // handleCancel(e)
        }else if (buttonType === "Update"){

        }else if (buttonType === "Delete"){

        }else if(buttonType === "ADD"){
            handleSubmit(e)
        }
    }

    return (
        <Card>
            <form>
                {
                    inputValue && EmployeeInputs.fields.map((employee:any, key:number) =>
                        <InputController key={key} value={InputValueGet(inputValue, employee.dbName)}
                                         name={employee.name}
                                         placeholder={employee.name}
                                         type={employee.input}
                                         onChange={e => handleChangeInputValues(e, employee.dbName)}
                                         label={employee.name}
                                         errors={inputErrorValue[employee.dbName]}
                                         defaultValue={null}
                        />
                    )
                }
                <div className="footer-section">
                    {
                        EmployeeInputs.buttons.map((button:any,key:number) =>
                            <button key={key} className={button.class1}  onClick={e => MainHandleFunction(e, button.name)}>{button.name}</button>
                        )
                    }
                </div>
            </form>

        </Card>
    );
};

export default AddEmployee;