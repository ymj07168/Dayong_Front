import axios from "axios"
import { useState, useEffect } from "react"
import "../css/Order.css"
import menu1 from "../image/menu1.jpg";
import menu2 from "../image/menu2.jpg";
import menu3 from "../image/menu3.jpg";
import menu4 from "../image/menu4.jpg";



const Basketcomponents = ({menu, price,  quantity}) => {

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

        const findItem = Menu.find((item) => {
            return item.name === menu;
        })


    return (
        <div>
            <div className="orderbox">
                <div className="ordercontent">
                    <h5>
                        {menu}
                    </h5>

                    <img src={findItem.img} style={{width: "80px", height: "80px", marginTop: "5px"}} />
                    <div className="basketinfo">
                    <p>
                        {price}원
                    </p>
                    <p>
                        주문수량: {quantity}
                    </p>
                    <p>
                        총 {price*quantity} 원
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Basketcomponents