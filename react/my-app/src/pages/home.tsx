import { Link } from 'react-router-dom';
import Eco from "../assets/eco.png";
import Aff from '../assets/afford.png';
import Ine from "../assets/ineq.png";

function Home() {
    return(<>
    <h1>Economic Trends</h1>
    <div className="homedivs">
        <Link to="affordability" style={{textDecoration: 'None'}}>
            <div className="home"  style={{background: 'rgba(255, 193, 24, 1)'}} >
                <img src={Aff} alt="Affordability" />
            </div>
        </Link>
        <Link to="economy" style={{textDecoration: 'None'}}>
            <div className="home" style={{background: 'rgba(0, 241, 48, 1)'}}>
                <img src={Eco} alt="Economy" />   
            </div>
        </Link>
        <Link to="inequality" style={{textDecoration: 'None'}}>
            <div className="home" style={{background: 'rgba(102, 0, 146, 0.56)'}}>
                <img src={Ine} alt="Inequality" />
            </div>
        </Link>

    </div>
    
    
    </>)

}

export default Home;