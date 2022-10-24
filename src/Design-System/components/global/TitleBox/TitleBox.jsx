import React from "react";
import "./Title.css";
const TitleBox = ({ TitleDecoration, TitleSpan }) => {
    return (
        <>
            <h4 className=" text-lg-start title-box">
                <span>{TitleDecoration} </span>
                {TitleSpan}
            </h4>
        </>
    );
};

export default TitleBox;
// <TitleBox TitleDecoration="Most Popular" TitleSpan="Right Now" />;
