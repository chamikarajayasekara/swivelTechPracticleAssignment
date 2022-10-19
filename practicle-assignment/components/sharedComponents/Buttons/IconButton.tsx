import React, {useEffect} from 'react';
import {FaGripHorizontal, FaList, FaTrashAlt, FaEdit} from "react-icons/fa";

interface Props {
    icon:string,
    handleFunction: () => void ;
}
const IconButton = (props:Props) => {
    const [color, setColor] = React.useState<string>();
    useEffect(()=>{
        if (props.icon === "grid" || props.icon === "table"){
            setColor("")
        }else if(props.icon === "delete"){
            setColor("bg-danger")
        }else if(props.icon === "edit"){
            setColor("bg-success")
        }
    },[])
    return (
        <div className={`icon-button `+color} onClick={props.handleFunction}>
            { props.icon === "grid" ? <FaGripHorizontal/> : null}
            { props.icon === "table" ? <FaList/> : null}
            { props.icon === "delete" ? <FaTrashAlt/> : null}
            { props.icon === "edit" ? <FaEdit/> : null}
        </div>
    );
};

export default IconButton;