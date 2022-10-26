import React from "react";
import { FaPlay, FaRegEye } from "react-icons/fa";
import "./BoxMap.css";
const BoxMap = ({ Img, Title, View, Link }) => {
    return (
        <>
            <div className="but-box col-md-6 col-lg-4 col-xl-3">
                <div className="box">
                    <div className="box-img">
                        <img src={Img} alt="" />
                        <a href={Link} target="_blank">
                            <span>
                                <FaPlay />
                            </span>
                        </a>
                    </div>
                    <div className="info">
                        <h6>{Title}</h6>
                        <span>
                            <FaRegEye />
                            {View}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoxMap;
