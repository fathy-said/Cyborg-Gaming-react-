import React from "react";
import HeroStream from "./HeroStream";
import { Slider, BoxContact } from "../../../index";
import { DataTopStream } from "../../../global/Data/DataBox";
import "./Herostream.css";

const HeroStreamContainer = () => {
    return (
        <div className="slider-container row justify-content-between gap-4 gap-lg-0 mx-1 mx-lg-0">
            <Slider TitleDecoration="Live" TitleSpan="Streams" />

            <HeroStream TitleDecoration="Top" TitleSpan="Streamers">
                {DataTopStream.length ? (
                    DataTopStream.map((el, index) => {
                        return (
                            <BoxContact
                                key={index}
                                Title={el.Title}
                                Number={el.number}
                                Img={el.Img}
                            />
                        );
                    })
                ) : (
                    <h2>not found data</h2>
                )}
            </HeroStream>
        </div>
    );
};

export default HeroStreamContainer;
