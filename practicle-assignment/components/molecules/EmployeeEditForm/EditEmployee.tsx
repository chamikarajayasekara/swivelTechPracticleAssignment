import React, {useContext, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import InputController from "../../atoms/InputController/InputController";
import {
    InitiallySetData,
    InputValueGet
} from "../../../helpers/InputDataSetHelper";
import EmployeeInputs from "../../../data/employeeeInputs.json"
import {useRouter} from "next/router";
import {AlertContext} from "../../../context";
import BorderButton from "../../atoms/BorderButton/BorderButton";
import {RestOperationsHelper} from "../../../apis/restOperationsHelper";
import {useForm} from "react-hook-form";
import {UserSubmitForm, validationSchema} from "../../../helpers/Validations";
import {yupResolver} from "@hookform/resolvers/yup";

interface Props {
    selectedEmployee:any
}
const EditEmployee = (props:Props) => {
    const { addAlert} =useContext(AlertContext)
    const router = useRouter();
    const [inputValue, setInputValue] = React.useState<any>();

    useEffect(()=>{
        InitiallySetData(EmployeeInputs.fields, "edit", setInputValue, props.selectedEmployee)
    },[])

    let id:any = router?.query?.id;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const handleChangeInputValues = (e:any, dbName:string) => {
        const { name, value } = e.target;
        setInputValue((prev:any) => ({
            ...prev,
            [dbName]: value,
        }));
    };

    function onSubmit(data: UserSubmitForm) {
        let userParams = {
            method: 'put',
            url: `/employee/${id}`,
            headers: {accept: '*/*'},
            body: {
                "firstName": data.firstName,
                "lastName": data.lastName,
                "emailAddress": data.emailAddress,
                "phoneNumber": data.phoneNumber,
                "photo": data.photo,
                "gender": data.gender
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

    function fieldsDataGenerator(dbName:string) {
        return  props.selectedEmployee[dbName]
    }
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    inputValue && EmployeeInputs.fields.map((employee:any, key:number) =>
                        <InputController key={key} value={InputValueGet(inputValue, employee.dbName)}
                                         name={employee.name}
                                         placeholder={employee.name}
                                         type={employee.inputType}
                                         onChange={e => handleChangeInputValues(e, employee.dbName)}
                                         label={employee.name} errors={errors}
                                         defaultValue={fieldsDataGenerator(employee.dbName)}
                                         selectOptions={EmployeeInputs.selectOptions}
                                         showAsInput={employee.showAsInput} register={register} dbName={employee.dbName}
                        />
                    )
                }
                <div className="footer-section">
                    <BorderButton  buttonName={"SAVE"} typeBtn={"submit"}  className="borderButton" content={"SAVE"}/>
                </div>
            </form>

        </Card>
    );
};

export default EditEmployee;