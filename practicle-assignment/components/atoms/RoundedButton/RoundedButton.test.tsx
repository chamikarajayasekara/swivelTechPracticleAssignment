import { render } from "@testing-library/react";
import RoundedButton from "./RoundedButton";

describe("<RoundedButton/>", () => {
    it("rendered with props", () => {
        function handleFunction (){

        }
        const {container} = render(
           <RoundedButton content={"LIST EMPLOYEE"} handleFunction={handleFunction}/>
        )
        expect(container).toBeInTheDocument();
    })
})