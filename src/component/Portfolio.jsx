import React, { useState } from "react";
import { motion } from "framer-motion";

import hotel from "../img/portfolio/app-1.jpg";
import buger from "../img/portfolio/buger.png"
import icecream from "../img/portfolio/app-3.jpg";
import restaurant from "../img/portfolio/product-1.jpg";

const portfolioItems = [
  {
    title: "Hotel Management",
    category: "hotel",
    img: hotel,
    desc: "Modern hotel management system",
  },
  {
    title: "Burger Website",
    category: "buger",
    img: buger,
    desc: "Fast food burger website",
  },
  {
    title: "Ice Cream Shop",
    category: "icecream",
    img: icecream,
    desc: "Beautiful ice cream shop website",
  },
  {
    title: "Restaurant Website",
    category: "restaurant",
    img: restaurant,
    desc: "Restaurant ordering website",
  },
  {
    title: "Ice Cream Shop",
    category: "icecream",
    img: icecream,
    desc: "Beautiful ice cream shop website",
  },
  {
    title: "Restaurant Website",
    category: "restaurant",
    img: restaurant,
    desc: "Restaurant ordering website",
  },
];

/* ANIMATION VARIANT */
const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <section
        style={{
          padding: "100px 20px",
          background: "linear-gradient(135deg,#000,#1a001f,#cc12f1)",
          marginBottom: "100px",
        }}
      >
        <div className="container">

          {/* TITLE */}
          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            My Portfolio
          </h1>

          {/* FILTER BUTTONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "50px",
              flexWrap: "wrap",
            }}
          >
            {["all", "hotel", "buger", "icecream", "restaurant"].map(
              (btn, i) => (
                <button
                  key={i}
                  onClick={() => setFilter(btn)}
                  style={{
                    padding: "10px 25px",
                    border: "none",
                    borderRadius: "30px",
                    cursor: "pointer",
                    transition: ".4s",
                    background: filter === btn ? "#cc12f1" : "#111",
                    color: "white",
                  }}
                >
                  {btn}
                </button>
              )
            )}
          </div>

          {/* CARDS */}
          <div className="row">
            {filteredItems.map((item, index) => (
              <motion.div
                className="col-lg-3 col-md-6 mb-4"
                key={index}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  style={{
                    background: "#111",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 5px 20px rgba(0,0,0,.5)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(204,18,241,0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "20px" }}>
                    <h3 style={{ color: "#cc12f1" }}>{item.title}</h3>

                    <p style={{ color: "#ddd" }}>{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;