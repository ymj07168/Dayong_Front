import Navbar from "../components/Navbar";
import Delivercomponent from "../components/Delivercomponents"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../css/Basket.css'

const Orderdeliver = () => {

    return (
        <div>
            <Navbar />
            <Delivercomponent />
        </div>
    )
}

export default Orderdeliver;