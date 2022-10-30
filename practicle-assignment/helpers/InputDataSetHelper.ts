var validator = require('validator');

export function InitiallySetData(fields:any, action:string, setInputValue:any, selectedEmployee:any) {
    for (let i = 0; i < fields.length; i++) {
        let relatedField = fields[i]
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
