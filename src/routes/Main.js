import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DetailSection from '../components/DetailSection';
import MenuButton from '../components/MenuButton';


export default function Main(props) {
    return (
        <>
            <Navbar />
            <HeroSection />
            <DetailSection />
            <MenuButton />
        </>
    )
}