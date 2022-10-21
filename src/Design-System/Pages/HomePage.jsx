import React from "react";
import FooterContainer from "../components/Gaming/Footer/FooterContainer";
import Gaming from "../components/Gaming/Gaming";
import PopularContainer from "../components/global/popular/PopularContainer";

import { Header, Hero, AllContainer } from "../components/index";
const HomePage = () => {
    return (
        <>
            <Header />
            <AllContainer>
                <Hero />
                <PopularContainer />
                <Gaming />
            </AllContainer>
            <FooterContainer />
        </>
    );
};

export default HomePage;
