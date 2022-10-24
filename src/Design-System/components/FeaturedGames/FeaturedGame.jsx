import React from "react";
import { TopBox, Slider } from "../index";
import "./FeaturedGame.css";
const FeaturedGame = () => {
    return (
        <>
            <div className="slider-container row justify-content-between gap-4 gap-lg-0 mx-1 mx-lg-0">
                <Slider />
                <TopBox TitleDecoration="Top " TitleSpan="Downloaded" />
            </div>
        </>
    );
};

export default FeaturedGame;
