import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import "./ContentBox.css";
export default function ContentBox() {
    return (
        <div className="contentbox">
            <div>
                <h5>Fortnite</h5>
                <h5>
                    <FaStar /> <span>4.8</span>
                </h5>
            </div>
            <div>
                <h5>Sandbox</h5>
                <h5>
                    <FaDownload /> <span>2.3M</span>
                </h5>
            </div>
        </div>
    );
}
