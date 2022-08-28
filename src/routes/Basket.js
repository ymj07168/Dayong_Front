import Navbar from "../components/Navbar";
import Basketcomponents from "../components/Basketcomponents"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../css/Basket.css'
import axios from "axios";


const Basket = () => {
    //장바구니에 있던 거 이름
    //장바구니 총 가격





    const [basket, getBasket] = useState([]);
    const getBaskets = async () => {
        await axios.get('/auth/myMenu', { headers: { 'Authorization': sessionStorage.getItem('token') } })
            .then((res) => {

                const idfilter = res.data.filter((item) => {
                    return item.user.nickname === sessionStorage.user_id;
                })

                getBasket(idfilter)
            })
    }

    const [cal, setCal] = useState(0);
    var sum = 0;
    const calculate = () => {
        for (var i = 0; i < basket.length; i++) {

            sum += basket[i].price * basket[i].num
        }
        return sum

    }

    useEffect(() => {
        getBaskets();
        calculate();

    }, [])


    const Clickdelivery = () => {

        sessionStorage.setItem('price', sum)

    }

    const Clickpackage = () => {
        sessionStorage.setItem('price', sum)

    }


    return (
        <div>
            <Navbar />
            <div className="basketcomponent">
                {basket.map((item) => <Basketcomponents menu={item.menu_name} price={item.price}  quantity={item.num} />)}

            </div>
            <div className="basketprice">
                <p >총 {calculate()} 원</p>

            </div>
            <div className="orderbutton">
                <Link to="/orderdelivery"><p className="orderdelivery" onClick={Clickdelivery}>배달 주문</p></Link>
                <Link to="/orderpackage"><p className="orderpackage" onClick={Clickpackage}>포장 주문</p></Link>

            </div>
        </div>
    )
}

export default Basket;