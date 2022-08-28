import Navbar from "../components/Navbar";
import Basketcomponents from "../components/Basketcomponents"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../css/Basket.css'
import menu1 from "../image/menu1.jpg";
import menu2 from "../image/menu2.jpg";
import menu3 from "../image/menu3.jpg";
import menu4 from "../image/menu4.jpg";
import axios from "axios";


const Basket = () => {
    //장바구니에 있던 거 이름
    //장바구니 총 가격



    const Menu = [
        {
            img: menu1,
            name: '마약파전',
            price: 11000,
        },
        {
            img: menu2,
            name: '김치전',
            price: 8000,
        },
        {
            img: menu3,
            name: '모듬전',
            price: 15000,
        },
        {
            img: menu4,
            name: '전통막걸리',
            price: 4000,
        }]

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
                {basket.map((item) => <Basketcomponents name={item.menu_name} price={item.price} image={menu1} quantity={item.num} />)}

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