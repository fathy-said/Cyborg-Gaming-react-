import React from "react";
import LiveStream from "./LiveStream";
import { DataLive } from "../../global/Data/DataBox";
const AllLive = () => {
    return (
        <div className="row gap-4 gap-lg-0 mt-4">
            {DataLive.length ? (
                DataLive.map((el, index) => {
                    return (
                        <LiveStream
                            key={index}
                            Title={el.title}
                            Description={el.description}
                            Img={el.img}
                        />
                    );
                })
            ) : (
                <h2 className=" text-center text-white text-capitalize">
                    not found data
                </h2>
            )}
        </div>
    );
};

export default AllLive;
