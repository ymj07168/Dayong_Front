import { Link } from 'react-router-dom';
import '../css/Menu.css'

const Menucomponents = ({ menuImg, name, price }) => {

    return (
        <div className="menubox">
            <Link to={`/option/${name}`} style={{ color: "black" }}>
            <div className="menucontent">
                <img className='menu-img' src={menuImg} style={{width: "150px", height:"100px"}}/>
                <h5>{name}</h5>
                <p>{price}</p>
            </div></Link>

        </div>

    )
}

export default Menucomponents;