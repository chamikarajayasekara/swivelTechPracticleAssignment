import { render } from "@testing-library/react";
import IconButton from "./IconButton";

describe("<IconButton/>", () => {
    it("rendered with props", () => {
        function handleFunction (){

        }
        const {container} = render(
            <IconButton icon={"grid"} handleFunction={handleFunction} ></IconButton>
        )
        expect(container).toBeInTheDocument();
    })
})