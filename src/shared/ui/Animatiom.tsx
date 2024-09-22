import React, { useRef } from 'react';
import s from "./Animation.module.scss"
import gsap from 'gsap';



const Animatiom = () => {
const circle = useRef(null)
const heandleClick = () => {
    gsap.fromTo(circle.current, {rotation: 0}, {rotation: 30})
}
    return (
        <>
        <div ref = {circle} className = {s.square}>
        </div>
    <button onClick={heandleClick}>click</button>
    </>
    );
};

export default Animatiom;