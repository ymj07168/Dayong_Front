import React from 'react';
import '../App.css';
import { Button } from './Button'
import '../css/HeroSection.css';
import { Link } from 'react-router-dom';
import mainImg from '../image/mainImg.jpg';


function HeroSection() {

    return (
        <div className='hero-container'>
            <img className="main-img" src={mainImg} style={{ width: "400px", height: "250px" }} />
            <div className='hero-info'>
                <h2>최고네 한식점</h2>
            </div>
        </div>
    )
}

export default HeroSection