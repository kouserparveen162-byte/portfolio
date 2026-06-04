import React, { useEffect } from "react";
import profileImg from "../img/profile-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "Photoshop", value: 55 },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        background: "#0a0a0a",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center gy-5">
          {/* LEFT IMAGE */}
          <div
            className="col-lg-5 text-center"
            data-aos="fade-right"
          >
            <img
              src={profileImg}
              alt="Profile"
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                border: "5px solid #cc12f1",
                objectFit: "cover",
                boxShadow: "0 0 35px rgba(204,18,241,.8)",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="col-lg-7"
            data-aos="fade-left"
          >
            <h1
              style={{
                color: "#cc12f1",
                fontSize: "55px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              About Me
            </h1>

            <p
              style={{
                color: "#ccc",
                lineHeight: "32px",
                fontSize: "18px",
                marginBottom: "40px",
              }}
            >
              I am a passionate React Developer who builds modern,
              responsive and user-friendly web applications using
              React, Node.js and MongoDB. I focus on creating
              attractive UI designs and delivering high-quality
              web experiences for clients and users.
            </p>

            {/* SKILLS */}
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{ marginBottom: "25px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div
                  style={{
                    height: "12px",
                    background: "#222",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    data-aos="zoom-in-right"
                    style={{
                      width: `${skill.value}%`,
                      height: "100%",
                      background:
                        "linear-gradient(90deg, #cc12f1, #ff4df3)",
                      borderRadius: "20px",
                      boxShadow:
                        "0 0 15px rgba(204,18,241,.8)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;