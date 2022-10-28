import React from 'react';
import HomePageTopSection from "../../organisms/HomePageTopSection/HomePageTopSection";

interface Props{
    description:string,
    handleFunction: () => void;
    buttonContent:string
}
const HomePage = (props:Props) => {
    return (
        <HomePageTopSection buttonContent={props.buttonContent} description={props.description} handleFunction={props.handleFunction}/>
    );
};

export default HomePage;