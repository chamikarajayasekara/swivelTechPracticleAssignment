import React, {useEffect} from 'react';

import {Toast, ToastContainer} from "react-bootstrap";

interface Props {
    alert:any
}
const Toaster = (props:Props) => {
    const [showA, setShowA] = React.useState(true);
    const toggleShowA = () => setShowA(!showA);
    useEffect(()=>{
        setShowA(true)
    },[props.alert])
    return (
        <div>
            {
                props.alert.alert ?
                    <ToastContainer className="p-3" position={'top-end'} >
                        <Toast show={showA} onClose={toggleShowA}    delay={3000} autohide>
                            <Toast.Header className={props.alert.severity === "success" ? 'toast-header-success' : 'toast-header-danger'}>
                                <strong className="me-auto">{props.alert.message}</strong>
                            </Toast.Header>
                            {/*<Toast.Body>{props.alert.message}</Toast.Body>*/}
                        </Toast>
                    </ToastContainer>

                    : null
            }
        </div>
    );
};


export default Toaster;