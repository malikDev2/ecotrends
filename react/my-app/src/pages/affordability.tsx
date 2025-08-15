import { Link } from "react-router-dom";


import React, { useState } from "react";
import homeprice from "../assets/homeprice.png";
import tut from "../assets/tuition.png";
import price from "../assets/price.png";
import wage from "../assets/wage.png";
import verd from "../assets/verd.png";

type ChartId = "home" | "tuition"  |  "wage" | "price" | "verdict";

const DEFAULT_BODY_BG = "#190088ff";
const PAGE_BG = "#faffa1ff";

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
    tuition: false,
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
                Since 1996, the average home price within the United States has swelled from just above $100k to well over $350k. In the same timeframe, the average age of first time home owners leaped from 29 to 38.
              </p>
            </div>
          </div>
        </div>

        {/* Tuition */}
        <div
          className={`chartdiv ${expanded.tuition ? "expanded" : ""}`}
          onClick={() => toggle("tuition")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? toggle("tuition") : undefined)}
        >
          <h2>Tuition</h2>
          <div className="chart-row">
            <img src={tut} alt="Home prices chart" />
            <div className={`expand-content ${expanded.tuition ? "show" : ""}`}>
              <p>
                The average annual college tuition (without housing) in 2025 is $13,500. This figure is up from around $9000 in 2010, $5000 in 2000, and $1000 in 1980.
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
                The average American wage as of 2025 is $66,621. Average American wage crossed the $50k mark in 2017, 40k in 2007, 30k in 1999, and 10k in 1978.
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
                A dollar in 1957 is $11.44 today. While the dollar is typically a very stable currency, high periods of inflation within the 70s and around COVID harmed its value. 
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
                Affordability is certainly an area of concern within America. Although wages have doubled since 2000, already high-paying positions create the bulk of this gain. With home prices and tuition tripling within the same span, it's hard to notice any wage gains at all.  
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

export default Afford;
