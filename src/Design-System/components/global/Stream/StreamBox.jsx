import React from "react";
import { FaCheck } from "react-icons/fa";
import "./Steam.css";
const StreamBox = ({ UserImg, LiveImg, Title, SmTitle, ViewNum }) => {
    return (
        <div
            style={{ color: "#fff" }}
            className="stream col-md-6 col-lg-4 col-xl-3"
        >
            <div className="box">
                <div className="box-img">
                    <img src={LiveImg} alt="" />
                    <span className="live">live</span>
                    <div className="box-span">
                        <span>{ViewNum}</span>
                        <span>CS-GO</span>
                    </div>
                </div>
                <div className="info">
                    <img src={UserImg} alt="" />
                    <div className="body-left">
                        <h6>
                            <span>
                                <FaCheck />
                            </span>
                            {SmTitle}
                        </h6>
                        <h4>{Title}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamBox;
