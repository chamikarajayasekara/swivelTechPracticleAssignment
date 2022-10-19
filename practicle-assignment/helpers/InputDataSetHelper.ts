var validator = require('validator');

export function InitiallySetData(fields:any, action:string, setInputValue:any, setInputErrorValue:any, selectedEmployee:any, setEditFields:any) {
    for (let i = 0; i < fields.length; i++) {
        let relatedField = fields[i]
        setEditFields((prev:any) => ({
            ...prev,
            [relatedField['dbName']]: false,
        }));
        setInputErrorValue((prev:any) => ({
            ...prev,
            [relatedField['dbName']]: {"error":false, message:""},
        }));

        if (action === "add"){

            if(relatedField['dbName'] === "gender"){
                setInputValue((prev:any) => ({
                    ...prev,
                    [relatedField['dbName']]:"M",
                }));
            }else{
                setInputValue((prev:any) => ({
                    ...prev,
                    [relatedField['dbName']]:"",
                }));
            }
        }else{
            setInputValue((prev:any) => ({
                ...prev,
                [relatedField['dbName']]: selectedEmployee[relatedField['dbName']],
            }));
        }
    }
}

export function InputValueGet(inputValue:any, dbName:string) {
    return inputValue[dbName];
}

export function errorIdentifiedInSubmit(fields:any,obj:any,setInputErrorValue:any, setEditFields:any , inputErrorValue:any){
    for (let i = 0; i < fields.length; i++) {
        let relatedField = fields[i];
        for (var key in obj) {
            if (obj[key] === null || obj[key] === ""){
                if (relatedField.dbName === key){
                    let errorMessage: string = relatedField.errorMessage;
                    let errorField = relatedField.dbName;

                    if(errorField === "gender"){
                        setInputErrorValue((prev:any) => ({
                            ...prev,
                            [errorField ]: {"error":false, "message": ""},
                        }));
                    }else {
                        setInputErrorValue((prev:any) => ({
                            ...prev,
                            [errorField ]: {"error":true, "message": errorMessage},
                        }));
                    }

                    setEditFields((prev:any) => ({
                        ...prev,
                        [errorField]: true,
                    }));
                }
            }else {
                if (relatedField.dbName === key){
                    let errorMessage: string = relatedField.errorMessage;
                    let errorField = relatedField.dbName;
                    if (key === "firstName"){
                        if(obj[key].length >=  6 && obj[key].length <= 10){
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField ]: {"error":false, "message":""},
                            }));
                        }else{
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField]: {"error":true, "message":"min 6 character and max 10 characters."},
                            }));
                            setEditFields((prev:any) => ({
                                ...prev,
                                [errorField]: true,
                            }));
                        }
                    }

                    if (key === "lastName"){
                        if(obj[key].length >=  6 && obj[key].length <= 10){
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField ]: {"error":false, "message":""},
                            }));
                        }else{
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField]: {"error":true, "message":"min 6 character and max 10 characters."},
                            }));
                            setEditFields((prev:any) => ({
                                ...prev,
                                [errorField]: true,
                            }));
                        }
                    }
                    if (key === "emailAddress"){
                        if(validator.isEmail(obj[key])){
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField ]: {"error":false, "message":""},
                            }));
                        }else{
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField]: {"error":true, "message":"please add valid email."},
                            }));
                            setEditFields((prev:any) => ({
                                ...prev,
                                [errorField]: true,
                            }));
                        }
                    }


                    if (key === "phoneNumber"){
                        const regex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
                        let matches = regex.test(obj[key]);
                        if(matches){
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField ]: {"error":false, "message":""},
                            }));
                        }else{
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField]: {"error":true, "message":"Please add valid phone number."},
                            }));
                            setEditFields((prev:any) => ({
                                ...prev,
                                [errorField]: true,
                            }));
                        }
                    }

                    if (key === "gender"){
                        if(obj[key]){
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField ]: {"error":false, "message":""},
                            }));
                        }else{
                            setInputErrorValue((prev:any) => ({
                                ...prev,
                                [errorField]: {"error":true, "message":"add gender"},
                            }));
                            setEditFields((prev:any) => ({
                                ...prev,
                                [errorField]: true,
                            }));
                        }
                    }
                    // setInputErrorValue((prev:any) => ({
                    //     ...prev,
                    //     [errorField ]: {"error":false, "message":""},
                    // }));
                    // setEditFields((prev:any) => ({
                    //     ...prev,
                    //     [errorField]: false,
                    // }));

                }
            }
        }
        console.log(inputErrorValue )
    }
}


export function ErrorsExists(editFields:any) {
    const areTrue = Object.values(editFields).some(
        value => value === true
    );
    return areTrue;
}


export function checkIsNullishByAll(obj:any, fields:any, inputErrorValue :any) {
    let result = false;
    let resultArray:any = [];
    for (let i = 0; i < fields.length; i++) {
        let relatedField: any = fields[i];


            if(relatedField.mandatory === true){
                if ( relatedField.dbName in obj ){
                    if (obj[relatedField.dbName] === null || obj[relatedField.dbName]  === ""){
                        resultArray.push('true')
                    }else{
                        resultArray.push('false')
                    }
                }
            }else{
                resultArray.push('false')
            }
        }
    resultArray.some((x:string) => {
        if (x === 'true'){
            result = true;
        }
    })
    return result;
}


export function checkErrorsBeforeSubmit(obj:any, fields:any,){
    let result = false;
    let resultArray:any = [];
    for (let i = 0; i < fields.length; i++) {
        let relatedField = fields[i];
        if (relatedField.dbName === "firstName"){
            if(obj[relatedField.dbName].length >=  6 && obj[relatedField.dbName].length <= 10){
                resultArray.push('false')
            }else{
                resultArray.push('true')
            }
        }

        if (relatedField.dbName === "lastName"){
            if(obj[relatedField.dbName].length >=  6 && obj[relatedField.dbName].length <= 10){
                resultArray.push('false')
            }else{
                resultArray.push('true')
            }
        }

        if (relatedField.dbName === "emailAddress"){
            if(validator.isEmail(obj[relatedField.dbName])){
                resultArray.push('false')
            }else{
                resultArray.push('true')
            }
        }

        if (relatedField.dbName === "phoneNumber") {
            const regex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
            let matches = regex.test(obj[relatedField.dbName]);
            if (matches) {
                resultArray.push('false')
            } else {
                resultArray.push('true')
            }
        }

        if (relatedField.dbName === "gender"){
            if(obj[relatedField.dbName]){
                resultArray.push('false')
            }else{
                resultArray.push('true')
            }
        }
    }

    resultArray.some((x:string) => {
        if (x === 'true'){
            result = true;
        }
    })

    return result;
}