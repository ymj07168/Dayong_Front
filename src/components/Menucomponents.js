import { Link } from 'react-router-dom';
import '../css/Menu.css'

const Menucomponents = ({name, price}) => {

    return (
        <div>
            <Link to={`/option/${name}`} style={{ color: "black" }}>
            <div className="menubox">
                <h1>{name}</h1>
                <h3>{price}</h3>
            </div>
            </Link>
        </div>
        
    )
}

export default Menucomponents;