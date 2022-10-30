import React, {useEffect,  useContext,} from 'react';
import Card from "react-bootstrap/Card";
import EmployeeInputs from "../../../data/employeeeInputs.json"
import InputController from "../../atoms/InputController/InputController";
import {AlertContext} from "../../../context";
import {
    InitiallySetData,
    InputValueGet
} from "../../../helpers/InputDataSetHelper";
import {useRouter} from "next/router";
import BorderButton from "../../atoms/BorderButton/BorderButton";
import {RestOperationsHelper} from "../../../apis/restOperationsHelper";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {UserSubmitForm, validationSchema} from "../../../helpers/Validations";




const AddEmployee = () => {

    const router = useRouter()
    const { addAlert} =useContext(AlertContext)
    const [inputValue, setInputValue] = React.useState<any>();


    useEffect(()=>{
        InitiallySetData(EmployeeInputs.fields, "add", setInputValue , null)
    },[]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: UserSubmitForm) => {
        let userParams = {
            method: 'post',
            url: '/employee',
            headers: { accept: '*/*' },
            body: {
                "firstName": data.firstName,
                "lastName": data.lastName,
                "emailAddress": data.emailAddress,
                "phoneNumber": data.phoneNumber,
                "photo": "",
                "gender": data.gender
            }
        }
        RestOperationsHelper(userParams).then(res =>{
            if(res.status  === 200){
                addAlert("Employee Created Successfully", "success", true);
                router.push("/employee/list")
            }else{
                addAlert("Employee Created Failed", "failed", true);
                router.push("/employee/list")
            }
        })
            .catch(e => {
                addAlert("Employee Created Failed", "failed", true);
                router.push("/employee/list")
            })
    };

    const handleChangeInputValues = (e:any, dbName:string) => {
        const { name, value } = e.target;
        setInputValue((prev:any) => ({
            ...prev,
            [dbName]: value,
        }));
    };

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
                                                 label={employee.name}
                                                 errors={errors}
                                                 defaultValue={null}
                                                 selectOptions={EmployeeInputs.selectOptions}
                                                 showAsInput={employee.showAsInput} register={register} dbName={employee.dbName}
                        />
                    )
                }
                <div className="footer-section">
                    <BorderButton  buttonName={"ADD"} typeBtn={"submit"}  className="borderButton" content={"ADD"}/>
                </div>
            </form>
        </Card>
    );
};

export default AddEmployee;