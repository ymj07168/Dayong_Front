import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import "../css/MyPage.css";
import myImg from "../image/dayong.png";
import axios from 'axios';

export default function MyPage() {

    const [id, setId] = useState('');
    const [point, setPoint] = useState(0);
    const [orderNum, setOrderNum] = useState(0);

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    axios.get(`/auth/mypage`, config)
        .then(
            result => {
                setId(result.data.user)
                setPoint(result.data.point)
                setOrderNum(result.data.주문수)
            }
        )
//주문&주문완료
    return (
        <>
            <Navbar />
            <div className='mypage-container'>
                <img src={myImg} style={{ width: "100px" }} />
                <p className="myinfo">
                    {id}
                </p>
                <div className='mypage-detail'>
                    <Link to='/point-detail'><div className='point-info'>
                        <h5>포인트</h5>
                        <p>{point}</p>
                    </div></Link>
                    <Link to='/order-detail'><div className='order-info'>
                        <h5>주문내역</h5>
                        <p>{orderNum}</p>
                    </div></Link>
                </div>
            </div >
        </>
    )
}