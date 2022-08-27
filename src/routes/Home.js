import styles from "../css/Home.module.css"
import Zoom from 'react-reveal/Zoom'
import heart from '../image/emptyheart.png'

const Home =() => {
    return (
        <div>
            <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
            <img src={heart} className="App-logo" alt="logo" />
            <h1 className="App-title">예시</h1>
          </header>
        </Zoom>
        </div>
    )
}

export default Home;