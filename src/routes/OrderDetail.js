import Navbar from "../components/Navbar"
import OrderItem from "../components/OrderItem";
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function OrderDetail() {

    //주문내역 리스트
    const [orderList, setOrderList] = useState([]);


     const getOrderList = async () => {
        await axios.get('/auth/order/orderList', {headers: {'Authorization': sessionStorage.getItem('token')}})
        .then((res) => {

           setOrderList(res.data)
        })
            
     
         
         

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
                        key={item.id}
                        props={item}
                    />
                ))}
            </div> 
             
        </>
    )
}