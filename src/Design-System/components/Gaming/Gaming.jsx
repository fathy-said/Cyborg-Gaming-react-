import React from "react";
import Library from "../global/Library/Library";
import img1 from "../../assets/images/avatar-01.jpg";
import img2 from "../../assets/images/avatar-02.jpg";
import img3 from "../../assets/images/avatar-03.jpg";
import { DataLibrary } from "../global/Data/DataBox";
import "./Gaming.css";
const Gaiming = () => {
    return (
        <div className="gaming">
            {DataLibrary.length ? (
                DataLibrary.map((el, index) => {
                    return (
                        <Library key={index} Img={el.Img} Title={el.Title} />
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
        </div>
    );
};

export default Gaiming;
