import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DetailSection from '../components/DetailSection';

export default function Main(props) {
    return (
        <>
            <Navbar />
            <HeroSection />
            <DetailSection />
        </>
    )
}