import React from 'react';
import RoundedButton from "../../atoms/RoundedButton/RoundedButton";
import IconButton from "../../atoms/IconButton/IconButton";

interface Props {
    content: string,
    addClickButton: () => void
    icon:string,
    handleGrid: () => void
}
const GridChangeSection = (props:Props) => {
    return (
        <div className="grid-select-area">
            <RoundedButton content={props.content} handleFunction={props.addClickButton}/>
            <IconButton icon={props.icon} handleFunction={props.handleGrid}/>
        </div>
    );
};

export default GridChangeSection;