import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import '../css/Option.css'

const Optioncomponents = () => {
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
            name: '마약파전',
            price: 11000,
        },
        {
            name: '김치전',
            price: 8000,
        },
        {
            name: '모듬전',
            price: 15000,
        },
        {
            name: '전통막걸리',
            price: 4000,
        }]

    let findItem = Menu.find((item) => {
        return item.name == menuname;
    });

    const onClick = () => {

    }
    return (
        <div className='option'>
            <p className="menuname">{findItem.name}</p>
            <p className="menuprice">{findItem.price}</p>
            <div>
                <button name="inc" onClick={handleIncrement}> + </button>
                <p>{quantity}</p>
                <button name="dec" onClick={handleDecrement}> - </button>
            </div>

            <button className="basketbutton" type="button" onClick={onClick}>장바구니 추가</button>
        </div>

    )
}

export default Optioncomponents;

//이름 가격 개수
