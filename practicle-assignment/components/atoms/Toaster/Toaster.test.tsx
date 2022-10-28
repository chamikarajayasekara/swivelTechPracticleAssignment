import { render } from "@testing-library/react";
import Toaster from "./Toaster";

describe("<Toaster/>", () => {
    it("rendered with props", () => {
        function handleFunction (){

        }
        let  alertA =  {
            message:"Employee Created Successfully",
            severity:"success",
            alert:true
        }
        const {container} = render(

            <Toaster alert={alertA}/>
        )
        expect(container).toBeInTheDocument();
    })
})