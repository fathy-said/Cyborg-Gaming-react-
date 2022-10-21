import React from "react";
import Library from "../global/Library/Library";
import img1 from "../../assets/images/avatar-01.jpg";
import img2 from "../../assets/images/avatar-02.jpg";
import img3 from "../../assets/images/avatar-03.jpg";

import "./Gaming.css";
const Gaiming = () => {
    return (
        <div className="gaming">
            <Library Title="Dota 2" Img={img1} />
            <Library Title="Fortnite" Img={img2} />
            <Library Title="CS-GO" Img={img3} />
        </div>
    );
};

export default Gaiming;
