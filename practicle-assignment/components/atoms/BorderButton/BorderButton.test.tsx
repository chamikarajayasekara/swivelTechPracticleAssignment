import { render } from "@testing-library/react";
import BorderButton from "./BorderButton";

describe("<BorderButton/>", () => {
    it("rendered with props", () => {
        function handleFunction (){

        }
        let key = 1;
        const {container} = render(
            <BorderButton className={"borderButton"} MainHandleFunction={handleFunction} content={"Save"} buttonName={"Save"}></BorderButton>
        )
        expect(container).toBeInTheDocument();
    })
})