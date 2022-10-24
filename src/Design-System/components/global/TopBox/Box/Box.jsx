import React from "react";
import "./Box.css";
import img from "../../../../assets/images/avatar-01.jpg";
import { FaStar, FaDownload } from "react-icons/fa";
const Box = () => {
    return (
        <>
            <div className="box">
                <img src={img} alt="" />
                <div className="info">
                    <h5>fortnite</h5>
                    <h6>Sandbox</h6>
                    <div className="icon">
                        <span>
                            <FaStar /> 2.9
                        </span>
                        <span>
                            <FaDownload /> 2.2M
                        </span>
                    </div>
                </div>

                <div className="down-icon">
                    <button>
                        <FaDownload />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Box;
