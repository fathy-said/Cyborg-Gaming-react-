import React from "react";
import Library from "../global/Library/Library";
import { DataLibrary } from "../global/Data/DataBox";
import "./Gaming.css";
import TitleBox from "../global/TitleBox/TitleBox";
const Gaiming = ({ TitleDecoration, TitleSpan }) => {
    return (
        <div className="gaming  text-lg-start">
            <TitleBox TitleDecoration={TitleDecoration} TitleSpan={TitleSpan} />

            {DataLibrary.length ? (
                DataLibrary.map((el, index) => {
                    return (
                        <Library key={index} Img={el.Img} Title={el.Title} />
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
        </div>
    );
};

export default Gaiming;
