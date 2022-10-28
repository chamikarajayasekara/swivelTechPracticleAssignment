import React from 'react';

interface Props {
    content:string,
    handleFunction: () => void;

}
const RoundedButton = (props:Props) => {
    return (
        <div className="roundedButton" onClick={props.handleFunction}>
            {props.content}
        </div>
    );
};

export default RoundedButton;