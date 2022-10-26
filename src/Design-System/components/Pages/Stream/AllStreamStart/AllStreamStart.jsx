import React from "react";
import { DataSteamAll } from "../../../global/Data/DataBox";
import { StreamBox, Title } from "../../../index";
import "./AllStreamStart.css";
const StreamStart = () => {
    return (
        <div className=" row all-stream-start">
            <Title TitleDecoration="Most Popular " TitleSpan="Live Stream" />

            {DataSteamAll.length ? (
                DataSteamAll.map((el, index) => {
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
            <button className="mn-middle">Load More Streams</button>
        </div>
    );
};

export default StreamStart;
