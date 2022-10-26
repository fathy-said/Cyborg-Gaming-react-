import React from "react";

import { Hero, Gaming, PopularContainer } from "../components/index";
const HomePage = () => {
    return (
        <>
            <Hero />
            <PopularContainer />
            <Gaming TitleDecoration="Your Gaming" TitleSpan="Library" />
        </>
    );
};

export default HomePage;
