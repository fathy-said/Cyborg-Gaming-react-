import React from "react";
import "./Popular.css";
const PopularBox = ({ Img, children }) => {
    return (
        <div className="popular col-md-6 col-lg-3 ">
            <div className="box">
                <img src={Img} alt="" />
                {children}
            </div>
        </div>
    );
};

export default PopularBox;
