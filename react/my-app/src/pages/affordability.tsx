import { Link } from "react-router-dom";


import React, { useState } from "react";
import homeprice from "../assets/homeprice.png";
import price from "../assets/price.png";
import wage from "../assets/wage.png";
import verd from "../assets/verd.png";

type ChartId = "home" | "wage" | "price" | "verdict";

const DEFAULT_BODY_BG = "#190088ff";
const PAGE_BG = "#f5f7ff";

// Verdict-specific colors (scoped to this file/component)
const VERDICT_COLORS = {
  bodyBg: "#fff15bff",
  bodyText: "#030303ff",
  verdictBg: "#ffcf99",
  verdictBase: "#ffe8cc",
};

const Afford: React.FC = () => {
  // independent toggles per card (no auto-closing others)
  const [expanded, setExpanded] = useState<Record<ChartId, boolean>>({
    home: false,
    wage: false,
    price: false,
    verdict: false,
  });

  const toggle = (id: ChartId) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const verdictActive = expanded.verdict;

  return (
    <div className="afford-page" style={{ backgroundColor: PAGE_BG, minHeight: "100vh" }}>
      <h1 style={{ marginTop: 0, textAlign: "center" }}>Affordability</h1>

      <div
        className="bodydiv"
        style={{
          backgroundColor: verdictActive ? VERDICT_COLORS.bodyBg : DEFAULT_BODY_BG,
          color: verdictActive ? VERDICT_COLORS.bodyText : undefined,
          transition: "background-color 0.35s ease, color 0.35s ease",
        }}
      >
        {/* Home Prices */}
        <div
          className={`chartdiv ${expanded.home ? "expanded" : ""}`}
          onClick={() => toggle("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("home") : undefined)}
        >
          <h2>Home Prices</h2>
          <div className="chart-row">
            <img src={homeprice} alt="Home prices chart" />
            <div className={`expand-content ${expanded.home ? "show" : ""}`}>
              <p>
                Over recent years, home values climbed faster than many wages,
                lifting down payment hurdles and monthly costs.
              </p>
            </div>
          </div>
        </div>

        {/* Wages */}
        <div
          className={`chartdiv ${expanded.wage ? "expanded" : ""}`}
          onClick={() => toggle("wage")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("wage") : undefined)}
        >
          <h2>Wages</h2>
          <div className="chart-row">
            <img src={wage} alt="Wages chart" />
            <div className={`expand-content ${expanded.wage ? "show" : ""}`}>
              <p>
                Wage growth has improved but remains uneven across sectors and regions,
                shaping affordability in different ways.
              </p>
            </div>
          </div>
        </div>

        {/* Price Increase */}
        <div
          className={`chartdiv ${expanded.price ? "expanded" : ""}`}
          onClick={() => toggle("price")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("price") : undefined)}
        >
          <h2>Price Increase</h2>
          <div className="chart-row">
            <img src={price} alt="Price increase chart" />
            <div className={`expand-content ${expanded.price ? "show" : ""}`}>
              <p>
                Essential categories like housing and transport remain elevated; even with
                cooler inflation, higher price levels strain budgets.
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
      <Link to="/">
        <button>Back</button>
    </Link>
    </div>
  );
};

export default Afford;
