import React from "react";
import "./TopHero.css";
import img from "../../../../../assets/images/profile.jpg";
const TopHero = () => {
    return (
        <div className="top-hero row gap-5 gap-lg-0 ">
            <div className="box-img col-lg-4">
                <img src={img} alt="" />
            </div>
            <div className="content-box  col-lg-4">
                <button className="mn-button ">offline</button>
                <h2>Alan Smithee</h2>
                <p>
                    You Haven't Gone Live yet. Go Live By Touching The Button
                    Below.
                </p>
                <button className="mn-button ">Start Live Stream</button>
            </div>
            <div className="description-box col-lg-4">
                <h5>
                    Downloaded
                    <span>3</span>
                </h5>
                <h5>
                    Friends Online
                    <span>16</span>
                </h5>
                <h5>
                    Live Streams
                    <span>none</span>
                </h5>
                <h5>
                    Clips
                    <span>29</span>
                </h5>
            </div>
        </div>
    );
};

export default TopHero;
