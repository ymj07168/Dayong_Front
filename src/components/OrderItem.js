import "../css/OrderItem.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function OrderItem({props}) {
 
    
    return (
        <div className="orderItemcontainer">
            <p>주문번호 : {props.id}     </p>                                     
             <p>배달상태 : {props.status}</p>
             <p>주문시각 : {props.created_at}</p>
            <p>주문가격 : {props.total}</p>
             <p>다회용기 사용여부: {props.dayong ? "O": "X"} </p> 

    <Link to='/mapinfo'><div><p className="orderItembutton">지도 확인하기</p></div></Link>
        </div>
     )
}