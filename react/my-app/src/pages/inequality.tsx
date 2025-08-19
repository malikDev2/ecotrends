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
                Since 1960, the percentage of American wealth held by the wealthiest 1% of Americans has risen from 13% to 20 percent. This demographic's wealth share decreased from 1965-1980 down to 10%, only to increase ever since. Disposable wealth for investments (properties, businesses, stocks), high-profile connections, and the ability to easily afford private/higher education are amongst the 1%'s advantages.
              </p>
            </div>
          </div>
        </div>

        {/* Top Ten Percent */}
        <div
          className={`chartdiv ${expanded.ten ? "expanded" : ""}`}
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
                The wealthiest ten percent of Americans follow a similar path to wealthiest 1%. The top 10 percent possed 35% of the nation's capital in 1960, fell to 30% by 1980, and now posseses 47%, nearly half of America's wealth today. While members of the top ten don't possess all of the advantages of the 1%, lack of concern over rent/housing, tuition, employment, and loans grants this group a large advantage over the typical American.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Half */}
        <div
          className={`chartdiv ${expanded.bot ? "expanded" : ""}`}
          onClick={() => toggle("bot")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("bot") : undefined)}
        >
          <h2>Bottom Half</h2>
          <div className="chart-row">
            <img src={both} alt="Home prices chart" />
            <div className={`expand-content ${expanded.bot ? "show" : ""}`}>
              <p>
                The least wealthy half of American's face the opposite trend of the top. After possessing 18% of American wealth in 1960, and 21% in 1974, the group now only possesses 13% of the nations wealth. With price increases of rent, tuition, and groceries outpacing wage growth, many American's find theirselves in an increasingly dire financial situation. 
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
                American inequality is approaching a critical point. Less and less young Americans are able to afford a home or rent. College tuition is higher than ever, while degrees continue to decrease in value, resulting in increased under/unemployment and debt amongst graduates.
              </p>
              <p>
                The American middle class is shrinking, and for the first time since the great depression, children can expect to be less financially well off than their parents.
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
