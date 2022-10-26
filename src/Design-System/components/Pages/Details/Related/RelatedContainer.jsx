import React from "react";
import RelatedBox from "./RelatedBox";
import { Title } from "../../../index";
import "./Related.css";
import { DataRelatedGame } from "../../../global/Data/DataBox";

const RelatedContainer = () => {
    return (
        <div className="related-container row">
            <Title TitleDecoration="Other Related" TitleSpan="Games" />
            {DataRelatedGame.length ? (
                DataRelatedGame.map((el, index) => {
                    return (
                        <RelatedBox
                            Title={el.Title}
                            TitleSm={el.TitleSm}
                            Views={el.Views}
                            Evaluate={el.Evaluate}
                            Img={el.Img}
                            key={index}
                        />
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
        </div>
    );
};

export default RelatedContainer;
