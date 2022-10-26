import React from "react";
import "./Herostream.css";
import { Title } from "../../../index";

const HeroStream = ({ TitleDecoration, TitleSpan, children }) => {
    return (
        <>
            <div
                className="box-left col-lg-5 col-xl-4"
                style={{ color: "#fff" }}
            >
                <Title
                    TitleDecoration={TitleDecoration}
                    TitleSpan={TitleSpan}
                />
                {children}
            </div>
        </>
    );
};

export default HeroStream;
