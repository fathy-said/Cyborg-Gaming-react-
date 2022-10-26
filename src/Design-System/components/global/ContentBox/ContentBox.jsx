import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import "./ContentBox.css";
export default function ContentBox({ Title, TitleSm, Views, Evaluate }) {
    return (
        <div className="contentbox">
            <div>
                <h5>{Title}</h5>
                <h5>
                    <FaStar /> <span>{Evaluate}</span>
                </h5>
            </div>
            <div>
                <h5>{TitleSm}</h5>
                <h5>
                    <FaDownload /> <span>{Views}</span>
                </h5>
            </div>
        </div>
    );
}
