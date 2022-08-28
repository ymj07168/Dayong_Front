import Navbar from "../components/Navbar";
import Basketcomponents from "../components/Basketcomponents"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../css/Basket.css'

const Order = () => {
    const [price, setPrice] = useState(0);
    var basketoption = {
        name: '',       //주문하는 사람 이름
        basket: {},     //장바구니에 있던 거 이름
        price: '',      //장바구니 총 가격
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

    const Clickpackage = () => {

    }
    return (
        <div>
            <Navbar />
            <Basketcomponents />
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