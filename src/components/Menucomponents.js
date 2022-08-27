import { Link } from 'react-router-dom';
import '../css/Menu.css'

const Menucomponents = ({ menuImg, name, price }) => {

    return (
        <div>
            <Link to={`/option/${name}`} style={{ color: "black" }}><div className="menubox">
                <img className='menu-img' src={menuImg} />
                {name}
                {price}
            </div></Link>
        </div>

    )
}

export default Menucomponents;