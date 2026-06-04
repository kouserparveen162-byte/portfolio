import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

import heroImg from "../img/hero-img.jpg";
import profileImg from "../img/profile-img.jpg";

import hotel from "../img/portfolio/app-1.jpg";
import burger from "../img/portfolio/app-2.jpg";
import icecream from "../img/portfolio/app-3.jpg";
import restaurant from "../img/portfolio/product-1.jpg";

/* SERVICES */
const services = [
  { icon: "bi-code-slash", title: "React Development", description: "Modern UI development" },
  { icon: "bi-window", title: "Frontend Development", description: "Responsive websites" },
  { icon: "bi-server", title: "Backend (Node.js)", description: "Scalable APIs" },
  { icon: "bi-database", title: "MongoDB", description: "Database management" },
  { icon: "bi-phone", title: "Responsive Design", description: "Mobile friendly UI" },
  { icon: "bi-layers", title: "Full Stack", description: "Complete solutions" }
];

/* SKILLS */
const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 85 },
  { name: "React", value: 80 },
  { name: "Bootstrap", value: 75 }
];

/* PORTFOLIO */
const portfolioItems = [
  { title: "Hotel Management", category: "hotel", img: hotel, desc: "Modern system" },
  { title: "Burger Website", category: "burger", img: burger, desc: "Fast food UI" },
  { title: "Ice Cream Shop", category: "icecream", img: icecream, desc: "Shop design" },
  { title: "Restaurant Website", category: "restaurant", img: restaurant, desc: "Food ordering UI" }
];

function Home() {
  const typedRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  /* Typed */
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["React Developer", "Frontend Designer", "MERN Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  /* AOS */
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${heroImg})`,
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white"
        }}
      >
        <div>
          <h1 style={{ fontSize: "60px" }}>
            Hi, I'm <span style={{ color: "#cc12f1" }}>Kouser Parveen</span>
          </h1>

          <span ref={typedRef} style={{ fontSize: "28px", color: "#cc12f1" }} />

          <br />

          <button
            style={{
              marginTop: "25px",
              padding: "12px 30px",
              borderRadius: "30px",
              border: "none",
              background: "linear-gradient(45deg,#cc12f1,#9b00ff)",
              color: "white",
              cursor: "pointer"
            }}
          >
            Hire Me
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "100px 20px",
          background: "#0a0a0a",
          color: "#fff"
        }}
      >
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-5 text-center">
              <img
                src={profileImg}
                alt=""
                style={{
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  border: "5px solid #cc12f1",
                  boxShadow: "0 0 35px rgba(204,18,241,.8)"
                }}
              />
            </div>

            <div className="col-lg-7">
              <h1 style={{ color: "#cc12f1" }}>About Me</h1>

              <p style={{ color: "#ccc", lineHeight: "28px" }}>
                I am a passionate React Developer building modern web apps.
              </p>

              {skills.map((skill, i) => (
                <div key={i} style={{ marginBottom: "15px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#fff"
                    }}
                  >
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>

                  <div style={{ height: "10px", background: "#222", borderRadius: "10px" }}>
                    <div
                      style={{
                        width: `${skill.value}%`,
                        height: "100%",
                        background: "#cc12f1",
                        borderRadius: "10px"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 20px", background: "#0a0a0a" }}>
        <div className="container text-center">

          <h1 style={{ color: "#cc12f1" }}>My Services</h1>

          <div className="row mt-5">

            {services.map((s, i) => (
              <div className="col-lg-4 mb-4" key={i}>
                <div
                  style={{
                    background: "#111",
                    padding: "30px",
                    borderRadius: "20px",
                    color: "#fff",
                    border: "1px solid rgba(204,18,241,.2)",
                    transition: ".4s",
                    cursor: "pointer"
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(204,18,241,.6)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "none")
                  }
                >
                  <i
                    className={`bi ${s.icon}`}
                    style={{ fontSize: "40px", color: "#cc12f1" }}
                  />
                  <h4>{s.title}</h4>
                  <p style={{ color: "#ccc" }}>{s.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ padding: "100px 20px", background: "#0a0a0a" }}>
        <div className="container text-center">

          <h1 style={{ color: "#cc12f1" }}>My Portfolio</h1>

          <div className="mt-4 mb-5">
            {["all", "hotel", "burger", "icecream", "restaurant"].map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                style={{
                  margin: "5px",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  border: "none",
                  background: filter === btn ? "#cc12f1" : "#111",
                  color: "#fff"
                }}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className="row">
            {filteredItems.map((item, i) => (
              <div className="col-lg-3 col-md-6 mb-4" key={i}>
                <div
                  style={{
                    background: "#111",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: ".4s"
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <img
                    src={item.img}
                    style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h4 style={{ color: "#cc12f1" }}>{item.title}</h4>
                    <p style={{ color: "#ccc" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "100px 20px", background: "#0a0a0a" }}>
        <div className="container">

          <div className="text-center mb-5">
            <h1 style={{ color: "#cc12f1" }}>Contact Me</h1>
            <p style={{ color: "#ccc" }}>Let's work together</p>
          </div>

          <div className="row g-4">

            <div className="col-lg-7">
              <div style={{ background: "#111", padding: "30px", borderRadius: "15px" }}>

                {["Name", "Email", "Subject"].map((p, i) => (
                  <input
                    key={i}
                    placeholder={p}
                    style={{
                      width: "100%",
                      marginBottom: "15px",
                      padding: "12px",
                      background: "#1a1a1a",
                      border: "1px solid #333",
                      color: "#fff",
                      borderRadius: "10px"
                    }}
                  />
                ))}

                <textarea
                  rows="5"
                  placeholder="Message"
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#1a1a1a",
                    border: "1px solid #333",
                    color: "#fff",
                    borderRadius: "10px"
                  }}
                />

                <button
                  style={{
                    marginTop: "15px",
                    padding: "12px 30px",
                    borderRadius: "30px",
                    border: "none",
                    background: "linear-gradient(45deg,#cc12f1,#9b00ff)",
                    color: "#fff"
                  }}
                >
                  Send Message
                </button>

              </div>
            </div>

            <div className="col-lg-5">
              <div style={{ background: "#111", padding: "30px", borderRadius: "15px", color: "#fff" }}>
                <h4 style={{ color: "#cc12f1" }}>Contact Info</h4>
                <p>📍 Karachi</p>
                <p>📞 +92 3030466514</p>
                <p>📧 email@gmail.com</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default Home;