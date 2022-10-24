import React from "react";
import "./LiveStream.css";
const LiveStream = ({ Img, Title, Description }) => {
    return (
        <div style={{ color: "#FFF" }} className="box-live col-lg-4">
            <div className="all">
                <img src={Img} alt="" />

                <h3>{Title}</h3>
                <p>{Description}</p>
            </div>
        </div>
    );
};

export default LiveStream;
