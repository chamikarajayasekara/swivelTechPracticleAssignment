import React from 'react';

interface Props {
    description:string
}
const HeadlineText = (props:Props) => {
    return (
        <h5 className="text-center">{props.description}</h5>
    );
};

export default HeadlineText;