import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { blurData } from "../../utils"

type TMainReaderProps = {
    images: Array<string>
}

const MainReader: React.FC<TMainReaderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef();
    const settings: Settings = {
        className: "slider",
        dots: true,
        infinite: false,
        adaptiveHeight: true,
        touchMove: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slider__dots',
        afterChange: i => setCurrentSlide(i)
    };
    return (
        <div className="reader">
            <Slider {...settings}>
                {
                    images.map((img, i) => (
                        <div className="slider__item" key={`page_${i}`}>
                            <Image
                                key={i}
                                className="slider__image" layout="responsive"
                                width={450}
                                height={650}
                                blurDataURL={blurData()}
                                placeholder="blur"
                                src={img}
                                alt={`page_${i}`}
                            />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default MainReader;