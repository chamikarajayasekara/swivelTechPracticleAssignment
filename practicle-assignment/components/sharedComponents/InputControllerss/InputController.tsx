import React from 'react';
interface Props {
    value : any,
    name : any,
    placeholder: string,
    type: any,
    onChange: (e:any) => void,
    label:any,
    errors:any,
    defaultValue:any
}
const InputController = (props:Props) => {
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
                    props.value !== null ?
                        <input
                            type={props.type}
                            defaultValue={props.defaultValue}
                            // value={props.value}
                            name={props.name}
                            className={props.errors  && props.errors.error  ? "input-control-error":"input-control"}
                            onChange={props.onChange}
                            // required={true}
                        />
                        // <div>{props.defaultValue}</div>
                        :
                        <input
                            type={props.type}
                            value={props.value}
                            name={props.name}
                            className={props.errors  && props.errors.error  ? "input-control-error":"input-control"}
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                            // required={true}
                        />
                }

            </div>

        </div>
    );
};

export default InputController;