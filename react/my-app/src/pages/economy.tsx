import { Link } from "react-router-dom";


import React, { useState } from "react";
import gdp from "../assets/gdp.png";
import gdprate from "../assets/gdprate.png";
import gdppercap from "../assets/gdp.png";
import inflation from "../assets/inflation.png";
import unemppop from "../assets/unemppop.png";
import unemprate from "../assets/unemprate.png";
import verd from "../assets/verd.png";


type ChartId = "gdp" | "grate" | "gcap" | "infla" | "unemp" | "unrate" | "verdict";

const DEFAULT_BODY_BG = "#190088ff";
const PAGE_BG = "#f5f7ff";

const VERDICT_COLORS = {
  bodyBg: "#4efa30ff",
  bodyText: "#030303ff",
  verdictBg: "#ceff99ff",
  verdictBase: "#ffe8cc",
};

const Eco: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<ChartId, boolean>>({
    gdp: false,
    grate: false,
    gcap: false,
    infla: false,
    unemp: false,
    unrate: false,
    verdict: false,
  });

  const toggle = (id: ChartId) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const verdictActive = expanded.verdict;

  return (
    <div className="afford-page" style={{ backgroundColor: PAGE_BG, minHeight: "100vh" }}>
      <h1 style={{ marginTop: 0, textAlign: "center" }}>Economy</h1>

      <div
        className="bodydiv"
        style={{
          backgroundColor: verdictActive ? VERDICT_COLORS.bodyBg : DEFAULT_BODY_BG,
          color: verdictActive ? VERDICT_COLORS.bodyText : undefined,
          transition: "background-color 0.35s ease, color 0.35s ease",
        }}
      >
        {/* GDP */}
        <div
          className={`chartdiv ${expanded.gdp ? "expanded" : ""}`}
          onClick={() => toggle("gdp")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("gdp") : undefined)}
        >
          <h2>GDP</h2>
          <div className="chart-row">
            <img src={gdp} alt="Home prices chart" />
            <div className={`expand-content ${expanded.gdp ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>
        {/* GDP Rate */}
        <div
          className={`chartdiv ${expanded.grate ? "expanded" : ""}`}
          onClick={() => toggle("grate")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("grate") : undefined)}
        >
          <h2>GDP Rate</h2>
          <div className="chart-row">
            <img src={gdprate} alt="Home prices chart" />
            <div className={`expand-content ${expanded.grate ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>
        {/* GDP Per Capita*/}
        <div
          className={`chartdiv ${expanded.gcap ? "expanded" : ""}`}
          onClick={() => toggle("gcap")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("gcap") : undefined)}
        >
          <h2>GDP Per Capita</h2>
          <div className="chart-row">
            <img src={gdppercap} alt="Home prices chart" />
            <div className={`expand-content ${expanded.gcap ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>
        {/* Inflation */}
        <div
          className={`chartdiv ${expanded.gcap ? "expanded" : ""}`}
          onClick={() => toggle("infla")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("infla") : undefined)}
        >
          <h2>Inflation</h2>
          <div className="chart-row">
            <img src={inflation} alt="Home prices chart" />
            <div className={`expand-content ${expanded.infla ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>
        {/* Unemployment */}
        <div
          className={`chartdiv ${expanded.gcap ? "expanded" : ""}`}
          onClick={() => toggle("unemp")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("unemp") : undefined)}
        >
          <h2>Unemployed Population</h2>
          <div className="chart-row">
            <img src={unemppop} alt="Home prices chart" />
            <div className={`expand-content ${expanded.unemp ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>
        {/* Unemployment Rate */}
        <div
          className={`chartdiv ${expanded.gcap ? "expanded" : ""}`}
          onClick={() => toggle("unrate")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("unrate") : undefined)}
        >
          <h2>Unemployment Rate</h2>
          <div className="chart-row">
            <img src={unemprate} alt="Home prices chart" />
            <div className={`expand-content ${expanded.unrate ? "show" : ""}`}>
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
          // attach verdict colors directly to this div (also as data-attrs if you want to reuse/read them)
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

export default Eco;
