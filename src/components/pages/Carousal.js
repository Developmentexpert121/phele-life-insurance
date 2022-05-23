import React from 'react'
// import { Carousel } from '3d-react-carousal';
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HomeSlider1 from "../../assets/homeSlider1.jpg";
import HomeSlider2 from "./../../assets/homeSlider2.jpg";
import HomeSlider3 from "./../../assets/homeSlider3.jpg";

const images = [HomeSlider1,HomeSlider2,HomeSlider3,HomeSlider1,HomeSlider2, HomeSlider3];

function Carousal() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imgIndex, setImgIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImgIndex(next),
    };


    return (
        <div className="App">
            <h1>React 3D Slider</h1>
            <Slider {...settings}>
                {images.map((img, idx) => (

                    <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>

                        <img src={img} alt={idx} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousal;
