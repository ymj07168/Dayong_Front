import Menucomponets from "../components/Menucomponents.js"
import Navbar from "../components/Navbar.js";

const Menu = () => {
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

    return (
        <div>
            <Navbar/>
            {Menu.map((item) => <Menucomponets key={item.name} name={item.name} price={item.price} />)}
        </div>
    )
}

export default Menu;