import { Link } from "react-router-dom";


import React, { useState } from "react";
import top from "../assets/top1.png";
import topt from "../assets/topten.png";
import both from "../assets/bothalf.png";
import verd from "../assets/verd.png";

type ChartId = "topo" | "ten" | "bot" | "verdict";

const DEFAULT_BODY_BG = "#190088ff";
const PAGE_BG = "#faffa1ff";

const VERDICT_COLORS = {
  bodyBg: "#f74141ff",
  bodyText: "#030303ff",
  verdictBg: "#ff999cff",
  verdictBase: "#ffe8cc",
};

const Ineq: React.FC = () => {
  // independent toggles per card (no auto-closing others)
  const [expanded, setExpanded] = useState<Record<ChartId, boolean>>({
    topo: false,
    ten: false,
    bot: false,
    verdict: false,
  });

  const toggle = (id: ChartId) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const verdictActive = expanded.verdict;

  return (
    <div className="afford-page" style={{ backgroundColor: PAGE_BG, minHeight: "100vh" }}>
      <h1 style={{ marginTop: 0, textAlign: "center" }}>Inequality</h1>

      <div
        className="bodydiv"
        style={{
          backgroundColor: verdictActive ? VERDICT_COLORS.bodyBg : DEFAULT_BODY_BG,
          color: verdictActive ? VERDICT_COLORS.bodyText : undefined,
          transition: "background-color 0.35s ease, color 0.35s ease",
        }}
      >
        {/* Top One Percent */}
        <div
          className={`chartdiv ${expanded.topo ? "expanded" : ""}`}
          onClick={() => toggle("topo")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("topo") : undefined)}
        >
          <h2>Top One Percent</h2>
          <div className="chart-row">
            <img src={top} alt="Home prices chart" />
            <div className={`expand-content ${expanded.topo ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>

        {/* Top Ten Percent */}
        <div
          className={`chartdiv ${expanded.topo ? "expanded" : ""}`}
          onClick={() => toggle("ten")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("ten") : undefined)}
        >
          <h2>Top Ten Percent</h2>
          <div className="chart-row">
            <img src={topt} alt="Home prices chart" />
            <div className={`expand-content ${expanded.ten ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Half */}
        <div
          className={`chartdiv ${expanded.topo ? "expanded" : ""}`}
          onClick={() => toggle("bot")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("bot") : undefined)}
        >
          <h2>Bottom Half</h2>
          <div className="chart-row">
            <img src={both} alt="Home prices chart" />
            <div className={`expand-content ${expanded.topo ? "bot" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div
          className={`chartdiv verdict ${expanded.verdict ? "expanded" : ""}`}
          onClick={() => toggle("verdict")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("verdict") : undefined)}
          style={{
            backgroundColor: verdictActive ? VERDICT_COLORS.verdictBg : VERDICT_COLORS.verdictBase,
            transition: "background-color 0.35s ease",
          }}
          data-body-bg={VERDICT_COLORS.bodyBg}
          data-verdict-bg={VERDICT_COLORS.verdictBg}
          data-body-text={VERDICT_COLORS.bodyText}
        >
          <h2>Verdict</h2>
          <div className="chart-row">
            <img src={verd} alt="" />
            <div className={`expand-content ${expanded.verdict ? "show" : ""}`}>
              <p>
                Affordability is tight: prices are high relative to wages, but continued
                wage gains and easing price growth would help.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="b">
        <button>Back</button>
    </Link>
    </div>
  );
};

export default Ineq;
