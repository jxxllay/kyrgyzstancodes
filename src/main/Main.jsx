import React from "react";
import HeroBlock from "./heroBlock/HeroBlock";
import AboutUs from "./aboutUs/AboutUs";
import Courses from "./courses/Courses";
import HowItWorks from "./howItWorks/HowItWorks";



export const Main = () => {
    return (
        <>
            <HeroBlock />
            <AboutUs />
            <Courses />
            <HowItWorks />
        </>
    )
}