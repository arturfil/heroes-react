import React from 'react';
import './Hero.css';

const Hero = (props) => {

    return (
        <div className="container">
            <h3 onClick={props.clicked}>
                My name is {props.name}
            </h3>
            <p>
            </p>
            <p>
                And my super power is {props.superpowers}
            </p>
            <img src={props.img} alt=""/>
            <p>{props.life}</p>
        </div>
    )
}

export default Hero;