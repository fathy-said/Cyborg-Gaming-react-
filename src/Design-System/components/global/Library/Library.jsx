import React from "react";
import img from "../../../assets/images/avatar-01.jpg";
import "./Library.css";
const Library = ({ Img, Title }) => {
    return (
        <div className=" library row  text-center">
            <div className="box-img col-12 col-lg-1 me-lg-3">
                <img src={Img} alt="" className=" " />
            </div>
            <div className="info-1 col-lg-2 info col-6">
                <h4>{Title}</h4>
                <h5>Sandbox</h5>
            </div>
            <div className="info-2 col-lg-2 info col-6">
                <h4>Date Added</h4>
                <h5>24/08/2036</h5>
            </div>
            <div className="info-3 col-lg-2 info col-6">
                <h4>Hours Played</h4>
                <h5>634 H 22 Mins</h5>
            </div>
            <div className="info-4 col-lg-2 info col-6">
                <h4>Currently</h4>
                <h5>Downloaded</h5>
            </div>
            <div className="bt-box col-lg-2">
                <button className="mn-button  ">download</button>
            </div>
        </div>
    );
};

export default Library;
