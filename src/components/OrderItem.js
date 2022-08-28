import "../css/OrderItem.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function OrderItem({props}) {
    const [day, setDay] = useState('');
 useEffect(() => {
    setDay((props.created_at).substr(0, 10).concat(' ' + (props.created_at).substr(11, 11)))
 },[])
    return (
        <div className="orderItemcontainer">
            <p>주문번호 : {props.order_id}     </p>                                     
             <p>주문상태 : {props.status}</p>
             <p>주문시각 : {day}</p>
            <p>주문가격 : {props.total}</p>
             <p>다회용기 사용여부: {props.dayong ? "O": "X"} </p> 


{props.status === '주문완료'  ? null:<Link to='/mapinfo'><div><p className="orderItembutton">지도 확인하기</p></div></Link>}
    
        </div>
     )
}