import React from "react";
import "./Related.css";
import { ContentBox } from "../../../index";
const RelatedBox = ({ Title, TitleSm, Views, Evaluate, Img }) => {
    return (
        <div className="related-box col-lg-6">
            <div className="box">
                <img src={Img} alt="" />
                <div>
                    <ContentBox
                        Title={Title}
                        TitleSm={TitleSm}
                        Views={Views}
                        Evaluate={Evaluate}
                    />
                </div>
            </div>
        </div>
    );
};

export default RelatedBox;
// <ContentBox
//     Title="Fortnite"
//     TitleSm={"Sandbox"}
//     Views={"4.8"}
//     Evaluate={"2.3M"}
// />
