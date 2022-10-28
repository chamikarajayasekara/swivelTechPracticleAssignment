import React from 'react';
import RoundedButton from "../../atoms/RoundedButton/RoundedButton";

interface Props {
    addClickButton: () => void,
    buttonContent:string
}
const HomeGrid = (props:Props) => {
    return (
        <div>
            <div className="grid-select-area mt-6">
                <RoundedButton content={props.buttonContent} handleFunction={props.addClickButton}/>
            </div>
        </div>
    );
};

export default HomeGrid;