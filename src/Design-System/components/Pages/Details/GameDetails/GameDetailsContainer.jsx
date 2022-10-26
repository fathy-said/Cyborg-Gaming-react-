import React from "react";
import "./GameDetailsContainer.css";
import { FaStar, FaDownload, FaServer, FaGamepad } from "react-icons/fa";
import { ContentBox } from "../../../index";

import img1 from "../../../../assets/images/details-01.jpg";
import img2 from "../../../../assets/images/details-02.jpg";
import img3 from "../../../../assets/images/details-03.jpg";
const GameDetailsContainer = () => {
    return (
        <div className="row game-details-container " style={{ color: "#fff" }}>
            <>
                <div className="content col-md-6">
                    <div className="box">
                        <ContentBox
                            Title="Fortnite"
                            TitleSm={"Sandbox"}
                            Views={"4.8"}
                            Evaluate={"2.3M"}
                        />
                    </div>
                </div>
                <div className="game-icon col-md-6">
                    <div className="box">
                        <div>
                            <span>
                                <FaStar />
                            </span>
                            <span>4.8</span>
                        </div>
                        <div>
                            <span>
                                <FaDownload />
                            </span>
                            <span>2.3M</span>
                        </div>
                        <div>
                            <span>
                                <FaServer />
                            </span>
                            <span className="text-uppercase">36gb</span>
                        </div>
                        <div>
                            <span>
                                <FaGamepad />
                            </span>
                            <span>action</span>
                        </div>
                    </div>
                </div>
            </>

            <>
                <img src={img1} alt="" className="col-md-6 col-lg-4" />
                <img src={img2} alt="" className="col-md-6 col-lg-4" />
                <img src={img3} alt="" className="col-md-6 col-lg-4" />
            </>
            <>
                <p>
                    Cyborg Gaming is free HTML CSS website template provided by
                    TemplateMo. This is Bootstrap v5.2.0 layout. You can make a
                    small contribution via PayPal to info [at] templatemo.com
                    and thank you for supporting. If you want to get the PSD
                    source files, please contact us. Lorem ipsum dolor sit
                    consectetur es dispic dipiscingei elit, sed doers eiusmod
                    lisum hored tempor.
                </p>
                <button className="mn-button">Download Fortnite Now!</button>
            </>
        </div>
    );
};

export default GameDetailsContainer;
// gap-4 gap-md-0
