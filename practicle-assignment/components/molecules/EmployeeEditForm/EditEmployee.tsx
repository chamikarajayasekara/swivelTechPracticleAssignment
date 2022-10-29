import React, {useContext, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import InputController from "../../atoms/InputController/InputController";
import {
    checkErrorsBeforeSubmit,
    checkIsNullishByAll,
    errorIdentifiedInSubmit,
    ErrorsExists,
    InitiallySetData,
    InputValueGet
} from "../../../helpers/InputDataSetHelper";
import EmployeeInputs from "../../../data/employeeeInputs.json"
import {useRouter} from "next/router";
import {AlertContext} from "../../../context";
import BorderButton from "../../atoms/BorderButton/BorderButton";
import {RestOperationsHelper} from "../../../apis/restOperationsHelper";

interface Props {
    selectedEmployee:any
}
const EditEmployee = (props:Props) => {
    const { addAlert} =useContext(AlertContext)
    const router = useRouter();
    const [inputValue, setInputValue] = React.useState<any>();
    const [inputErrorValue, setInputErrorValue] = React.useState<any>();
    const [editFields, setEditFields] = React.useState<any>({});

    useEffect(()=>{
        InitiallySetData(EmployeeInputs.fields, "edit", setInputValue,setInputErrorValue, props.selectedEmployee, setEditFields )
    },[])

    let id:any = router?.query?.id;

    const handleChangeInputValues = (e:any, dbName:string) => {
        const { name, value } = e.target;
        setInputValue((prev:any) => ({
            ...prev,
            [dbName]: value,
        }));
    };

    function handleSubmit(e:any) {
        e.preventDefault();
        errorIdentifiedInSubmit(EmployeeInputs.fields, inputValue, setInputErrorValue, setEditFields, inputErrorValue);
        let isNull = checkErrorsBeforeSubmit(inputValue, EmployeeInputs.fields);
        if (!isNull) {
            let userParams = {
                method: 'put',
                url: `/employee/${id}`,
                headers: {accept: '*/*'},
                body: {
                    "firstName": inputValue.firstName,
                    "lastName": inputValue.lastName,
                    "emailAddress": inputValue.emailAddress,
                    "phoneNumber": inputValue.phoneNumber,
                    "photo": inputValue.photo,
                    "gender": inputValue.gender
                }
            }
            RestOperationsHelper(userParams)
                .then(res => {
                    if (res.status === 200) {
                        addAlert("Employee Edited Successfully", "success", true);
                        router.push("/employee/list")
                    } else {
                        addAlert("Employee Edited Failed", "failed", true);
                        router.push("/employee/list")
                    }
                })
                .catch(e => {
                    addAlert("Employee Edited Failed", "failed", true);
                    router.push("/employee/list")
                })
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

    function fieldsDataGenerator(dbName:string) {
        return  props.selectedEmployee[dbName]
    }
    return (
        <Card>
            <form>
                {
                    inputValue && EmployeeInputs.fields.map((employee:any, key:number) =>
                        <InputController key={key} value={InputValueGet(inputValue, employee.dbName)}
                                         name={employee.name}
                                         placeholder={employee.name}
                                         type={employee.inputType}
                                         onChange={e => handleChangeInputValues(e, employee.dbName)}
                                         label={employee.name}
                                         errors={inputErrorValue[employee.dbName]}
                                         defaultValue={fieldsDataGenerator(employee.dbName)}
                                         selectOptions={EmployeeInputs.selectOptions}
                                         showAsInput={employee.showAsInput}
                        />
                    )
                }
                <div className="footer-section">
                    {
                        EmployeeInputs.buttons.map((button:any,key:number) =>
                            <BorderButton key={key} buttonName={button.name} MainHandleFunction={MainHandleFunction} className={button.class1} content={"SAVE"}/>
                        )
                    }
                </div>
            </form>

        </Card>
    );
};

export default EditEmployee;