import React from "react";
import PopularBox from "./PopularBox";
import "./Popular.css";
import img1 from "../../../assets/images/popular-01.jpg";
import img2 from "../../../assets/images/popular-02.jpg";
import img3 from "../../../assets/images/popular-03.jpg";
import img4 from "../../../assets/images/popular-04.jpg";
import img5 from "../../../assets/images/popular-05.jpg";
import img6 from "../../../assets/images/popular-06.jpg";
import img7 from "../../../assets/images/popular-07.jpg";
import img8 from "../../../assets/images/popular-08.jpg";
import TitleBox from "../TitleBox/TitleBox";

const PopularContainer = () => {
    return (
        <div className=" row  PopularContainer">
            <TitleBox TitleDecoration="Most Popular" TitleSpan="Right Now" />
            <>
                <PopularBox
                    NameEvaluation="fortnite"
                    Evaluation="4.8"
                    NameViews="sandbox"
                    Views="2.3M"
                    Img={img1}
                />
                <PopularBox
                    NameEvaluation="PubG"
                    Evaluation="4.8"
                    NameViews="Battle S
"
                    Img={img2}
                    Views="2.3M"
                />
                <PopularBox
                    NameEvaluation="Dota2"
                    Evaluation="4.8"
                    NameViews="Steam-X
"
                    Img={img3}
                    Views="2.3M"
                />
                <PopularBox
                    NameEvaluation="CS-GO"
                    Evaluation="4.8"
                    NameViews="Legendary"
                    Views="2.3M"
                    Img={img4}
                />
                <PopularBox
                    NameEvaluation="Mini Craft"
                    Evaluation="4.8"
                    NameViews="Legendary"
                    Views="2.3M"
                    Img={img5}
                />
                <PopularBox
                    NameEvaluation="Eagles Fly"
                    Evaluation="4.8"
                    NameViews="Matrix Games

"
                    Img={img6}
                    Views="2.3M"
                />
                <PopularBox
                    NameEvaluation="Warface"
                    Evaluation="4.8"
                    NameViews="Max 3D

"
                    Img={img7}
                    Views="2.3M"
                />
                <PopularBox
                    NameEvaluation="Warcraft"
                    Evaluation="4.8"
                    NameViews="Legend"
                    Views="2.3M"
                    Img={img8}
                />
            </>
            <a href="#" className="mn-button">
                Discover Popular
            </a>
        </div>
    );
};

export default PopularContainer;
