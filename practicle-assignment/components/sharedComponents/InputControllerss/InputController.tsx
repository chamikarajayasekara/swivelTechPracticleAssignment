import React from 'react';
interface Props {
    value : any,
    name : any,
    placeholder: string,
    type: any,
    onChange: (e:any) => void,
    label:any,
    errors:any,
    defaultValue:any,
    selectOptions:any,
    showAsInput:boolean
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
                    className={props.errors  && props.errors.error  ? "input-control-error":"input-control"}
                    onChange={props.onChange}
                    // required={true}
                />
            }else {
                return <select name={props.name} id={props.name}   className={props.errors  && props.errors.error   ? "input-control-error":"input-control"}   onChange={props.onChange} value={props.value} required={true}>
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
                        props.errors  && props.errors.error  ? <span>{props.errors.message}</span> : null
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