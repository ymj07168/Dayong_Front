import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import '../css/Option.css';
import menu1 from "../image/menu1.jpg";
import menu2 from "../image/menu2.jpg";
import menu3 from "../image/menu3.jpg";
import menu4 from "../image/menu4.jpg";
import axios from "axios";

const Optioncomponents = () => {
    const [menuName, setMenuName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    }
    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity((prev) => prev - 1)

        }
    }


    let { menuname } = useParams();
    const Menu = [
        {
            img: menu1,
            name: '마약파전',
            price: 11000,
        },
        {
            img: menu2,
            name: '김치전',
            price: 8000,
        },
        {
            img: menu3,
            name: '모듬전',
            price: 15000,
        },
        {
            img: menu4,
            name: '전통막걸리',
            price: 4000,
        }]

    let findItem = Menu.find((item) => {
        return item.name == menuname;
    });

    let config = {
        headers: {
            'Authorization': sessionStorage.getItem('token'),
            'content-type': 'application/json;charset=UTF-8'
        }
    }

    const onClick = () => {
        let data = {
            menu_name: findItem.name,
            price: findItem.price,
            num: quantity
        }
        axios.post(`/auth/menu`, data, config)
            .then((result) => {
                console.log(result)
                alert("장바구니에 추가되었습니다.")
            })
    }
    return (
        <div className='option'>
            <div className='menuItem-img'>
                <img src={findItem.img} style={{ width: "400px", height: "300px" }} /></div>
            <div className='menu-info'>
                <h1>{findItem.name}</h1>
            </div>
            {/* <p className="menuname">{findItem.name}</p> */}
            <br />
            <br />
            <div className='menu-price'>
                <h2>가격 : &nbsp;{findItem.price}원</h2></div><br />
            <div className='menu-quantity'>
                <h2>수량 : &nbsp;</h2><button name="inc" onClick={handleIncrement} style={{ width: "30px", height: "30px", fontSize: "20px" }}> + </button>
                &nbsp;&nbsp;<h2>{quantity}</h2>&nbsp;&nbsp;
                <button name="dec" onClick={handleDecrement} style={{ width: "30px", height: "30px", fontSize: "20px" }}> - </button>
            </div>
            <div className='basket-btn-container'>
                <button className="basket-button" type="button" onClick={onClick}>장바구니 추가</button>
            </div>

        </div>

    )
}

export default Optioncomponents;

//이름 가격 개수
