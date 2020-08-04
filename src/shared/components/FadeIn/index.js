import React, { useState, useRef, useEffect } from 'react';
import '../../css/fade.css';
const FadeIn = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const fadeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!isVisible) setVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.5 }
        );
        fadeObserver.observe(domRef.current);
        return () => fadeObserver.unobserve(domRef.current);
    });
    return (
        <div
            className={`fade-in ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
            {props.children}
        </div>
    );
};
export default FadeIn;
