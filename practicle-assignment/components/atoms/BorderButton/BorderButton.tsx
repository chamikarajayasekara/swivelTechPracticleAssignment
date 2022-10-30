import React from 'react';

type Buttons =  "button" | "submit" | "reset"
interface Props {
    className:string,
    content:string,
    buttonName:string,
    typeBtn:Buttons
}
const BorderButton = (props:Props) => {

    return (
        <>
            <button  className={props.className} type={props.typeBtn} >{props.content}</button>
        </>

    );
};

export default BorderButton;