import * as React from 'react';
import Image from "next/image";
import Slider, {Settings} from "react-slick";


const TopList: React.FC = () => {
    const settings: Settings = {
        className: "top-slider",
        touchMove: true,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider className="top-block" {...settings}>
            <div className="top-block__item">
                <Image src="/mock/main_screen_img.jpg" alt="top" layout="fill"/>
            </div>
            <div className="top-block__item">
                <Image src="/mock/main_screen_img.jpg" alt="top" layout="fill"/>
            </div>
        </Slider>
    );
}

export default TopList;
