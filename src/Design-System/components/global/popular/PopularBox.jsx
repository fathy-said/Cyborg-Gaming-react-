import React from "react";
import "./Popular.css";
import img from "../../../assets/images/popular-01.jpg";
import InfoBox from "../InfoBox/InfoBox";
const PopularBox = ({ NameEvaluation, Evaluation, NameViews, Views, Img }) => {
    return (
        <div className="popular col-md-6 col-lg-3 ">
            <div className="box">
                <img src={Img} alt="" />
                <InfoBox
                    NameEvaluation={NameEvaluation}
                    Evaluation={Evaluation}
                    NameViews={NameViews}
                    Views={Views}
                />
            </div>
        </div>
    );
};

export default PopularBox;
