import Navbar from "../components/Navbar";
import Ordercomponents from "../components/Ordercomponents"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../css/Basket.css'

const Order = () => {
    const [price, setPrice] = useState(0);
    var basketoption = {
        name: '', 
        method: '',
        basket: '',
        price: '',

        
    }
    // const [basket, getBasket] = useState([]);
    //  const getBaskets = async() => {
    //      await axios.get('')
    //  }

    // useEffect(() => {
    //      getBaskets();

    // }, [])

    // return (
    //     <div>
    //         <Navbar/>
    //         {basket.map((item) => <Basketcomponents key={item.orderId} order={item}/>)}
    //     </div>
    // )
    const Clickdelivery = () => {
        //localStorage.setItem("basketoption", JSON.stringify(basketoption))
        console.log("배달")
    
    }

    const Clickpackage =() => {

    }
    return (
        <div>
            <Navbar />
            <Ordercomponents />
            <div className="basketprice">
                <p >총 {price} 원</p>

            </div>
            <div className="orderbutton">
                <Link to="/orderdelivery"><p className="orderdelivery" onClick={Clickdelivery}>배달 주문</p></Link>
                <Link to="/orderpackage"><p className="orderpackage" onClick={Clickpackage}>포장 주문</p></Link>

            </div>
        </div>
    )
}

export default Order;