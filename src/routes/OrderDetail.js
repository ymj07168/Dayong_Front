import Navbar from "../components/Navbar"
import OrderItem from "../components/OrderItem";
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function OrderDetail() {

    //주문내역 리스트
    const [orderList, setOrderList] = useState([]);

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    const getOrderList = async () => {
        const json = await (await axios.get('/auth/order/orderList', config));
        setOrderList(json.data);
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
                        id={item.order_id}
                        status={item.status}
                        total={item.total}
                        createdAt={item.created_at}
                    />
                ))}
            </div>
            {/* <div className="orderItem-container">
                <div className="orderItem-detail">
                    <div>
                        배달상태: 배달 중<br />
                        주문상세: 안동찜닭 1개<br />
                        주문시각: 2022-08-11 10:30:25<br />
                        주문가격: 11,000원<br />
                        다회용기 사용여부: O <br />
                    </div>
                </div>
                <button>지도 확인하기</button>
            </div> */}
        </>
    )
}