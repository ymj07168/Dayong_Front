import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import "../css/Order.css"



const Packagecomponents = ({ order }) => {
    const history = useNavigate();
    const [check, setCheck] = useState(false);
    const [deliver, setDeliver] = useState({
        dayong: false,
        total: 0,
        delivery: 0,
        total: localStorage.price,
    })

    const { dayong, total, delivery, address } = deliver;


    const onClick = (e) => {
        console.log(e.target.checked)

        if (e.target.checked) {
            setCheck(e.target.checked)
            setDeliver({
                ...deliver, // 기존의 input 객체를 복사한 뒤
                dayong: e.target.checked // name 키를 가진 값을 value 로 설정
            });

        } else {
            setCheck(e.target.checked)

            setDeliver({
                ...deliver, // 기존의 input 객체를 복사한 뒤
                dayong: e.target.checked // name 키를 가진 값을 value 로 설정
            });

        }
    }

    const handleSubmit = async() => {
        await axios.post('/auth/order', deliver,{headers: {'Authorization': sessionStorage.getItem('token')}})
        .then((res) => {
            console.log(res)
if(res.status === 201) {
    alert('주문이 완료되었습니다.')
    history('/mapinfo')
}
        })
    }


    console.log(deliver)

    const onOrder = (e) => {
        history('/mapInfo');
    }

    return (
        <div>
            <div className="deliveryinfo">
                <p >포장정보</p>


            </div>
            <div className="ordername">

                <p className="orderInfo">주문자 이름</p>
                <p className="ordercontent">이효원</p>
                {/* {localStorage.getItem(name)} */}
            </div>

            <div className="ordername">

                <label className="orderInfo" htmlFor="포장용기">포장용기 여부<br /></label>
                <input type="checkbox" name="dayong" checked={check} onChange={onClick} style={{ marginLeft: "5px" }} />
                <label className="ordercontent" htmlFor="포장용기">&nbsp;&nbsp;포장용기 가져갈게요<br /></label>

            </div>

            <div className="ordername">

                <p className="orderInfo">결제수단</p>
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

export default Packagecomponents