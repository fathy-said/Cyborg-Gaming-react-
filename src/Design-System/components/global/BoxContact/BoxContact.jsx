import React from "react";
import { FaCheck } from "react-icons/fa";
import "./BoxContact.css";
const BoxContact = ({ Img, Title, Number }) => {
    return (
        <div className="box-contact flex-column flex-md-row gap-3 gap-md-1">
            <div className="all">
                <div className="box-img">
                    <span>{Number}</span>
                    <img src={Img} alt="" />
                </div>
                <div className="box-title">
                    <span>
                        <FaCheck />
                    </span>
                    <h5>{Title}</h5>
                </div>
            </div>
            <button className="mn-button ">Follow</button>
        </div>
    );
};

export default BoxContact;
