import React from "react";
import "./Slider.css";
import { InfoBox } from "../index";

const SliderBox = ({ Img }) => {
    return (
        <div className="slider">
            <div className="box-img">
                <img src={Img} alt="" />
                <h5>2.4k streaming</h5>
            </div>
            <InfoBox
                // key={""}
                NameEvaluation={"Island Rusty"}
                Evaluation={"4.8"}
                NameViews={"249K Downloads"}
                Views={"2.3"}
            />
        </div>
    );
};

export default SliderBox;
