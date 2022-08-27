import axios from "axios"
import { useState, useEffect } from "react"
import "../css/Order.css"


const Ordercomponents = ({ order }) => {
    const [deliver, setDeliver] = useState({
        dayong: 0,
        total: 0,
        delivery: 1,
        address: ''
    })

    const { dayong, total, delivery, address } = deliver;
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setDeliver({
            ...deliver, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };



    return (
        <div>
            <div className="deliveryinfo">
                <p >배달정보</p>


            </div>
            <div className="ordername">

                <p className="orderInfo">주문자 이름</p>
                <p className="ordercontent">이효원</p>
                {/* {localStorage.getItem(name)} */}
            </div>

            <div className="ordername">

                <label  className="orderInfo" htmlFor="배달 주소">배달 주소<br/></label><input className="inputcss" type="text" name="address" onChange={onChange} />

            </div>

            <div className="ordername">

            <p  className="orderInfo">결제수단</p>
            <p className="ordercontent">카드결제</p>

            </div>


            <div className="ordername">

            <p  className="orderInfo">결제금액</p>
            <p className="ordercontent">원</p>


            </div>

            <div  className="ordersubmit">
            <button type="submit">주문하기</button>

            </div>
        </div>

    )
}

export default Ordercomponents