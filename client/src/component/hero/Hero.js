import React from "react";
import './Hero.scss'

function Hero() {
    return (

        <div className="Hero">
            <div className="hero-content center">
                <h2 className="heading">Exclusive Farming Equipments</h2>
                <p className="subheading">
                    Exclusive Materials, for the Exclusive You.
                </p>
                <button className="cta btn-primary">Explore more</button>
            </div>
        </div>
    );
}

export default Hero;