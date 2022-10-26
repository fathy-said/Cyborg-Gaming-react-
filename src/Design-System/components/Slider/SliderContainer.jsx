import React from "react";
import { Title } from "../index";
import "./Slider.css";
import Swiper from "./Swiper";

const SliderContainer = ({ TitleDecoration, TitleSpan }) => {
    return (
        <>
            <div className="box-slide col-lg-6 col-xl-7">
                <Title
                    TitleDecoration={TitleDecoration}
                    TitleSpan={TitleSpan}
                />
                <div className=" swiper-box mt-3">
                    <Swiper />
                </div>
            </div>
        </>
    );
};

export default SliderContainer;
// {
//     DataSlider.length ? (
//         DataSlider.map((el, index) => {
//             return <SliderBox key={index} Img={el.Img} />;
//         })
//     ) : (
//         <h2>not found data</h2>
//     );
// }
