import React from "react";

import { AllLive, Title } from "../index";
const LiveStreamContainer = () => {
    return (
        <div className="live-stream-container ">
            <Title
                TitleDecoration="How To Start Your"
                TitleSpan="Live Stream"
            />

            <AllLive />
            <button className="mn-button">Go To Profile</button>
        </div>
    );
};

export default LiveStreamContainer;
