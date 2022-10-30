import { render } from "@testing-library/react";
import InputController from "./InputController";

describe("<InputController/>", () => {
    it("rendered with props", () => {
        function handleFunction (){

        }
        const {container} = render(
           <InputController value={"test"} name={"firstName"} placeholder={"firstName"} type={"input"} onChange={handleFunction} label={"firstName"} errors={null} defaultValue={"test"} selectOptions={[{"name": "M"}, {"name": "F"}]} showAsInput={true} dbName={"fistName"} register={""}></InputController>
        )
        expect(container).toBeInTheDocument();
    })
})