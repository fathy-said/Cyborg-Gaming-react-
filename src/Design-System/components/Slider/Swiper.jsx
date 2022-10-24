import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderBox from "./Slider";

import { DataSlider } from "../global/Data/DataBox";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const SwiperBox = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },

                    1200: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {DataSlider.length ? (
                    DataSlider.map((el, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SliderBox Img={el.Img} />
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <h2>not found data</h2>
                )}
            </Swiper>
        </>
    );
};

export default SwiperBox;

//=========================================================

// .slider-speaker {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

//=========================================================
