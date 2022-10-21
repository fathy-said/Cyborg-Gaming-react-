import React from "react";
import PopularBox from "./PopularBox";
import "./Popular.css";

import TitleBox from "../TitleBox/TitleBox";
import { DataPopular } from "../Data/DataBox";
import InfoBox from "../InfoBox/InfoBox";
const PopularContainer = () => {
    return (
        <div className=" row  PopularContainer">
            <TitleBox TitleDecoration="Most Popular" TitleSpan="Right Now" />
            {DataPopular.length ? (
                DataPopular.map((el, index) => {
                    return (
                        <PopularBox key={index} Img={el.Img}>
                            <InfoBox
                                key={index}
                                NameEvaluation={el.NameEvaluation}
                                Evaluation={el.Evaluation}
                                NameViews={el.NameViews}
                                Views={el.Views}
                            />
                        </PopularBox>
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
            <a href="#" className="mn-button">
                Discover Popular
            </a>
        </div>
    );
};

export default PopularContainer;
