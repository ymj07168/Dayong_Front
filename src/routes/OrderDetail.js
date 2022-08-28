import Navbar from "../components/Navbar"
import OrderItem from "../components/OrderItem";
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function OrderDetail() {

    //주문내역 리스트
    const [orderList, setOrderList] = useState([]);


     const getOrderList = async () => {
        const json = await axios.get('/auth/order/orderList', {headers: {'Authorization': sessionStorage.getItem('token')}})
        
        setOrderList(json.data.sort((a, b) => b.order_id - a.order_id))
     }


     useEffect(() => {
         getOrderList();

     }, []);


    return (
        <>
            <Navbar />
             <div>
                {orderList.map((item) => (
                    <OrderItem
                        key={item.order_id}
                        props={item}
                    />
                ))}
            </div> 
             
        </>
    )
}