import React from "react";
import { FaPlay } from "react-icons/fa";
import img1 from "../../../../assets/images/feature-left.jpg";
import img2 from "../../../../assets/images/feature-right.jpg";
import "./hero.css";
const HeroBox = () => {
    return (
        <div
            className="details-hero row gap-4 gap-md-0"
            style={{ color: "#fff" }}
        >
            <div className="body-left col-md-4 ">
                <img src={img1} alt="" />
            </div>
            <div className="body-right col-md-8">
                <img src={img2} alt="" />

                <a
                    href="https://www.youtube.com/watch?v=s-gHPF32hWw"
                    target="_blank"
                >
                    <FaPlay />
                </a>
            </div>
        </div>
    );
};

export default HeroBox;
