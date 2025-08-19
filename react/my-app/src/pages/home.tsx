// Home.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Eco from "../assets/eco.png";
import Aff from "../assets/afford.png";
import Ine from "../assets/ineq.png";

type SectionId = "affordability" | "economy" | "inequality";

interface Section {
  id: SectionId;
  color: string;   
  bgColor: string;
  img: string;
  desc: string;
}

const sections: Section[] = [
  {
    id: "affordability",
    color: "rgba(255, 193, 24, 1)",
    bgColor: "#f9d981ff",
    img: Aff,
    desc:
      "Affordability: Trends and analysis on the cost of living, housing, and wages.",
  },
  {
    id: "economy",
    color: "rgba(0, 241, 48, 1)",
    bgColor: "#97ff82ff",
    img: Eco,
    desc:
      "Economy: Insights into GDP, inflation, trade, and fiscal policy.",
  },
  {
    id: "inequality",
    color: "rgba(102, 0, 146, 0.56)",
    bgColor: "#cc9fffff",
    img: Ine,
    desc:
      "Inequality: Data on wealth distribution, education, and opportunities.",
  },
];

const Home: React.FC = () => {
  const [selected, setSelected] = useState<SectionId | null>(null);
  const navigate = useNavigate();

  const handleClick = (id: SectionId) => {
    if (selected === id) {
      navigate(`/${id}`);
    } else {
      setSelected(id);
    }
  };

  const currentBg =
    selected ? sections.find((s) => s.id === selected)?.bgColor ?? "white" : "white";

  const active = selected ? sections.find((s) => s.id === selected)! : null;

  return (
    <div
      style={{
        backgroundColor: currentBg,
        minHeight: "100vh",
        transition: "background-color 0.8s",
      }}
    >
      <h1 style={{ marginTop: 0, textAlign: "center" }}>Economic Trends</h1>

      {/* Image + description above rectangle */}
      {active && (
        <div className="detail-panel vertical">
          <img className="detail-img" src={active.img} alt={active.id} />
          <div className="detail-text">
            <h2 style={{ margin: "0 0 .25rem" }}>
              {active.id.charAt(0).toUpperCase() + active.id.slice(1)}
            </h2>
            <p>{active.desc}</p>
            <div className="detail-hint" aria-hidden="true">
              Click the highlighted section again to open the page →
            </div>
          </div>
        </div>
      )}

      <div className="hero columns" role="group" aria-label="Topic selector">
        {sections.map((section) => {
          const isActive = selected === section.id;
          return (
            <button
              key={section.id}
              type="button"
              className={`hero-slice ${isActive ? "active" : selected ? "dimmed" : ""}`}
              style={{ ["--sliceColor" as any]: section.color }}
              aria-pressed={isActive}
              onClick={() => handleClick(section.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClick(section.id);
                }
              }}
            >
              <span className="slice-label">{section.id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
