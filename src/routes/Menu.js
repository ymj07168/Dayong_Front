import Menucomponets from "../components/Menucomponents.js"
import Navbar from "../components/Navbar.js";
import menu1 from "../image/menu1.jpg";
import menu2 from "../image/menu2.jpg";
import menu3 from "../image/menu3.jpg";
import menu4 from "../image/menu4.jpg";
import "../css/Menu.css"

const Menu = () => {

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

    return (
        <div>
            <Navbar />
            <h1 className="menu-title">대표메뉴</h1>
            <div className="menu-container">
                {Menu.map((item) => <Menucomponets key={item.name} menuImg={item.img} name={item.name} price={item.price} />)}
            </div>
        </div>
    )
}

export default Menu;