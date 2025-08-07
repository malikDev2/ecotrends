import { Link } from 'react-router-dom';

function Home() {
    return(<>
    <h1>Economic Trends</h1>
    <div className="homedivs">
        <Link to="affordability" style={{textDecoration: 'None'}}>
            <div className="home"  style={{background: 'rgba(255, 193, 24, 1)'}} >
                <h2>Affordability</h2>
            </div>
        </Link>
        <Link to="economy" style={{textDecoration: 'None'}}>
            <div className="home" style={{background: 'rgba(0, 241, 48, 1)'}}>
                <h2>Economy</h2>
            </div>
        </Link>
        <Link to="inequality" style={{textDecoration: 'None'}}>
            <div className="home" style={{background: 'rgba(102, 0, 146, 0.56)'}}>
                <h2>Inequality</h2>
            </div>
        </Link>

    </div>
    
    
    </>)

}

export default Home;