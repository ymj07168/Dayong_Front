import axios from "axios"
import { useState, useEffect } from "react"
import "../css/Order.css"
import { useNavigate } from "react-router-dom"


const Ordercomponents = ({ order }) => {
    const history = useNavigate();
    const [deliver, setDeliver] = useState({
        dayong: 0,
        total: localStorage.price,
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


    const handleSubmit = async() => {
        await axios.post('/auth/order', deliver,{headers: {'Authorization': sessionStorage.getItem('token')}})
        .then((res) => {
            console.log(res)
if(res.status === 201) {
    alert('주문이 완료되었습니다.')
    history('/order-detail')
}
        })
    }

    console.log(deliver)
    return (
        <div>
            <div className="deliveryinfo">
                <p >배달정보</p>


            </div>
            <div className="ordername">

                <p className="orderInfo">주문자 이름</p>
                <p className="ordercontent">{sessionStorage.user_id}</p>
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
            <p className="ordercontent">{localStorage.price}원</p>


            </div>

            <div  className="ordersubmit">
            <button type="submit" onClick={handleSubmit}>주문하기</button>

            </div>
        </div>

    )
}

export default Ordercomponents