import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import "../css/MyPage.css";
import myImg from "../image/myImg.png";

export default function MyPage() {

    const [point, setPoint] = useState(35);
    const [orderNum, setOrderNum] = useState(1);

    return (
        <>
            <Navbar />
            <div className='mypage-container'>
                <img src={myImg} style={{ width: "100px" }} />
                <p className="myinfo">
                    회원아이디
                </p>
                <div className='mypage-detail'>
                    <Link to='/point-detail'><div className=' point-info'> 포인트 <br />{point}</div></Link>
                    <Link to='/order-detail'><div className='order-info'>주문내역<br />{orderNum}</div></Link>
                </div>
            </div >
        </>
    )
}