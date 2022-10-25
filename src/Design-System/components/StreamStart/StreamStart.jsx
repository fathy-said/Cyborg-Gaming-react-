import React from "react";
import { DataSteam } from "../global/Data/DataBox";
import { StreamBox, Title } from "../index";
import "./StreamStart.css";
const StreamStart = () => {
    return (
        <div className=" row  stream-start">
            <Title TitleDecoration="Most Popular " TitleSpan="Live Stream" />

            {DataSteam.length ? (
                DataSteam.map((el, index) => {
                    return (
                        <StreamBox
                            key={index}
                            Title={el.Title}
                            SmTitle={el.SmTitle}
                            UserImg={el.UserImg}
                            LiveImg={el.LiveImg}
                            ViewNum={el.ViewNum}
                        />
                    );
                })
            ) : (
                <h2 className="text-white text-capitalize  text-center">
                    not found data
                </h2>
            )}
            <button className="mn-middle">Discover All Streams</button>
        </div>
    );
};

export default StreamStart;
