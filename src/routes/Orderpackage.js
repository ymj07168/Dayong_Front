import Navbar from "../components/Navbar";
import Packagecomponents from "../components/Packagecomponents.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../css/Basket.css'

const Orderpackage = () => {

    return (
        <div>
            <Navbar />
            <Packagecomponents />
        </div>
    )
}

export default Orderpackage;