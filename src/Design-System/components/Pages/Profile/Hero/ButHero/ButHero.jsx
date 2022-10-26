import React from "react";
import "./ButHero.css";
import { Title } from "../../../../index";
import BoxMap from "./Box-map/BoxMap";
import { DataButHero } from "../../../../global/Data/DataBox";
const ButHero = () => {
    return (
        <div className="but-hero row m-0">
            <Title TitleDecoration="Your Most Popular " TitleSpan="Clips" />

            {DataButHero.length ? (
                DataButHero.map((el, index) => {
                    return (
                        <BoxMap
                            Title={el.Title}
                            Img={el.Img}
                            View={el.View}
                            Link={el.Link}
                            key={index}
                        />
                    );
                })
            ) : (
                <h2>not found data</h2>
            )}
            <button className="mn-button">Load More Clips</button>
        </div>
    );
};

export default ButHero;
