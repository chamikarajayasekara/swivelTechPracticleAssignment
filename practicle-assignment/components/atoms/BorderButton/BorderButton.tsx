import React from 'react';

interface Props {
    key:number,
    className:string,
    MainHandleFunction: (e:any, name:string) => void,
    content:string,
    buttonName:string
}
const BorderButton = (props:Props) => {
    return (
        <button key={props.key} className={props.className}  onClick={e => props.MainHandleFunction(e, props.buttonName)}>{props.content}</button>

    );
};

export default BorderButton;