import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Eco from "../assets/eco.png";
import Aff from '../assets/afford.png';
import Ine from "../assets/ineq.png";

function Home() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const sections = [
        {
            id: "affordability",
            color: "rgba(255, 193, 24, 1)",
            bgColor: "#f9d981ff",
            img: Aff,
            desc: "Affordability: Trends and analysis on the cost of living, housing, and wages."
        },
        {
            id: "economy",
            color: "rgba(0, 241, 48, 1)",
            bgColor: "#97ff82ff",
            img: Eco,
            desc: "Economy: Insights into GDP, inflation, trade, and fiscal policy."
        },
        {
            id: "inequality",
            color: "rgba(102, 0, 146, 0.56)",
            bgColor: "#cc9fffff",
            img: Ine,
            desc: "Inequality: Data on wealth distribution, education, and opportunities."
        }
    ];

    const handleClick = (id) => {
        if (selected === id) {
            navigate(`/${id}`);
        } else {
            setSelected(id);
        }
    };

    const currentBg = selected
        ? sections.find(s => s.id === selected)?.bgColor
        : "white";

    return (
        <div style={{ backgroundColor: currentBg, minHeight: "100vh", transition: "background-color 0.8s" }}>
            <h1>Economic Trends</h1>
            <div className="homedivs">
                {sections.map(section => (
                    <div
                        key={section.id}
                        className="home-wrapper"
                        onClick={() => handleClick(section.id)}
                    >
                        <div
                            className="home"
                            style={{ background: section.color }}
                        >
                            <img src={section.img} alt={section.id} />
                        </div>
                        {selected === section.id && (
                            <div className="description-box">
                                {section.desc}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
