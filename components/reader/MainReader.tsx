import { useEffect, useState } from "react";

type TMainReaderProps = {
    images: Array<string>
}

const MainReader: React.FC<TMainReaderProps> = ({ images }) => {
    const [touches, setTouches] = useState({ xStart: 0, xCurrent: 0, shift: 0, end: true })
    const [slideStatus, setSlideStatus] = useState({ next: 0, current: 0 })

    const touchHandler = (event: TouchEvent) => {
        let touch: Touch;
        if (typeof event !== 'undefined') {
            if (typeof event.touches !== 'undefined') {
                touch = event.touches[0];
                switch (event.type) {
                    case 'touchstart':
                        setTouches(prev => ({ ...prev, xStart: touch.pageX, end: false }))
                        break;
                    case 'touchmove':
                        setTouches(prev => ({ ...prev, xCurrent: touch.pageX, shift: ((((touch.pageX - prev.xStart) / window.innerWidth) * 100) * .5) }))
                        break;
                    case 'touchend':
                        setTouches({ xStart: 0, xCurrent: 0, shift: 0, end: true })
                        break;
                    default:
                        break;
                }
            }
        }
    }
    const checkSlide = () => {
        console.log(touches);
    }
    useEffect(() => {
        document.addEventListener('touchstart', touchHandler, false);
        document.addEventListener('touchmove', touchHandler, false);
        document.addEventListener('touchend', touchHandler, false);
    }, [])
    return (
        <div className="reader">
            <div className="reader__slider slider">
                <div className="slider__list"
                    style={{
                        transform: `translateX(${touches.shift}%)`,
                        transition: `${touches.end ? 'cubic-bezier(' + touches.shift + ', 0.55, 0.4, 1) .1s' : ''}`
                    }}
                >
                    {
                        images.map((img, i) => (
                            <div className="slider__item" key={i}>
                                <img className="slider__image" src={img} alt={`page_${i}`} key={`page_${i}`} />
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MainReader;