import React from 'react';
interface Props {
    value : any,
    name : any,
    placeholder: any,
    type: any,
    onChange: (e:any) => void,
    label:any,
    errors:any,
    defaultValue:any,
    selectOptions:any,
    showAsInput:boolean,
    register:any
    dbName:string
}
const InputController = (props:Props) => {

    function Render() {
        if (props.value !== null){
            if (props.type === "input" ){
                return      <input
                    type={props.type}
                    defaultValue={props.defaultValue}
                    // value={props.value}
                    name={props.name}
                    className={props.errors  && props.errors[props.dbName]?.message  ? "input-control-error":"input-control"}
                    onChange={props.onChange}
                    // required={true}
                    {...props.register(props.dbName)}
                />
            }else {
                return <select name={props.name} id={props.name}  {...props.register(props.dbName)}  className={props.errors  && props.errors[props.dbName]?.message   ? "input-control-error":"input-control"}   onChange={props.onChange} value={props.value} required={true}>
                    <option disabled={true} className="option-control">{props.placeholder}</option>
                    {
                        props.selectOptions.map((option:any, key:number)=>
                            <option key={key} className="option-control">{option.name}</option>
                        )
                    }
                </select>
            }
        }else{
            if (props.type === "input" ){
                return  <input
                    type={props.type}
                    defaultValue={props.defaultValue}
                    // value={props.value}
                    name={props.name}
                    className={props.errors  && props.errors.error  ? "input-control-error":"input-control"}
                    onChange={props.onChange}
                    // required={true}
                    {...props.register(props.dbName)}
                />
            }else{
                return   null
            }
        }
    }

    return (
        <div className="input-section">
            <div className="label-line">
                {
                    props.label !== null ? <><label htmlFor="">{props.label}</label></> : null
                }
            </div>

            <div className="textField">
                <div className="error-line">
                    {
                        props.errors  && props.errors[props.dbName]?.message  ? <span>{props.errors[props.dbName]?.message}</span> : null
                    }
                </div>
                {
                    Render()
                }

            </div>

        </div>
    );
};

export default InputController;