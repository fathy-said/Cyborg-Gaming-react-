import React from "react";
import "../../global/InfoBox/InfoBox.css";
import { FaStar, FaDownload } from "react-icons/fa";
import "./InfoBox.css";
const InfoBox = ({ NameEvaluation, Evaluation, NameViews, Views }) => {
    return (
        <>
            <div className="box-info">
                <div className="info">
                    <h5> {NameEvaluation}</h5>
                    <h6>
                        <FaStar /> <span>{Evaluation}</span>
                    </h6>
                </div>
                <div className="info">
                    <h5>{NameViews}</h5>
                    <h6>
                        <FaDownload /> <span>{Views}</span>
                    </h6>
                </div>
            </div>
        </>
    );
};

export default InfoBox;
