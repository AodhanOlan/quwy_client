import * as React from 'react';
import {useEffect, useState} from 'react';

const MainHeader: React.FC = () => {
    const [percent, setPercent] = useState(0)
    const scrollHandler = () => {
        const scroll = window.scrollY
        const max = 300
        if (scroll < max)
            setPercent((scroll / max))
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])
    return (
        <div className="main-header" style={{background: `rgba(68, 68, 68, ${percent})`}}>
            <div className="main-header__logo">
                <div className="main-logo" style={{filter: `invert(${percent})`}}>LOGO</div>
            </div>
            <div className="main-header__actions">
                <div className="profile-btn" style={{filter: `invert(${percent})`}}>
                    <div className="profile-btn__content">P</div>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
