import React from "react";
import { Title } from "../../index";
import Box from "./Box/Box";

import "./TopBox.css";
const TopBox = ({ TitleDecoration, TitleSpan }) => {
    return (
        <>
            <div className="box-left col-lg-5 col-xl-4">
                <Title
                    TitleDecoration={TitleDecoration}
                    TitleSpan={TitleSpan}
                />
                <Box />
                <Box />
                <Box />
                <a href="#" className="all-game">
                    View All Games
                </a>
            </div>
        </>
    );
};

export default TopBox;
