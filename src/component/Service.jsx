import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const services = [
  {
    icon: "bi-code-slash",
    title: "React Development",
    description:
      "Modern, fast and interactive web applications built with React.js.",
  },
  {
    icon: "bi-window",
    title: "Frontend Development",
    description:
      "Responsive and user-friendly interfaces using HTML, CSS, Bootstrap and JavaScript.",
  },
  {
    icon: "bi-server",
    title: "Node.js Backend",
    description:
      "Scalable backend solutions with Node.js and Express.js.",
  },
  {
    icon: "bi-database",
    title: "MongoDB Database",
    description:
      "Efficient database design and management using MongoDB.",
  },
  {
    icon: "bi-phone",
    title: "Responsive Design",
    description:
      "Mobile-friendly websites that work perfectly on all devices.",
  },
  {
    icon: "bi-cloud-arrow-up",
    title: "API Integration",
    description:
      "REST API integration and data handling for dynamic applications.",
  },
  {
    icon: "bi-palette",
    title: "UI / UX Design",
    description:
      "Clean, modern and attractive user interface design.",
  },
  {
    icon: "bi-git",
    title: "Git & GitHub",
    description:
      "Version control, collaboration and project management using Git.",
  },
  {
    icon: "bi-layers",
    title: "Full Stack Development",
    description:
      "Complete MERN stack applications from frontend to backend.",
  },
];

function Services() {
  return (
    <>
      <section
        id="services"
        style={{
          padding: "100px 20px",
          background: "#0a0a0a",
        }}
      >
        <div className="container">
          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h1
              style={{
                color: "#cc12f1",
                fontSize: "55px",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              My Services
            </h1>

            <p
              style={{
                color: "#ccc",
                fontSize: "18px",
              }}
            >
              Technologies & Services I Work With
            </p>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
                style={{
                  animation:
                    index % 2 === 0
                      ? "leftToRight 1.2s ease"
                      : "rightToLeft 1.2s ease",
                }}
              >
                <div
                  style={{
                    background: "#111",
                    padding: "30px",
                    borderRadius: "20px",
                    textAlign: "center",
                    height: "100%",
                    cursor: "pointer",
                    transition: "0.4s",
                    border: "1px solid rgba(204,18,241,.2)",
                    boxShadow: "0 0 15px rgba(0,0,0,.3)",
                    color: "#fff",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(204,18,241,.6)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(0,0,0,.3)";
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      margin: "0 auto 20px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "rgba(204,18,241,.1)",
                      border: "2px solid #cc12f1",
                      color: "#cc12f1",
                      fontSize: "40px",
                    }}
                  >
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h3
                    style={{
                      marginBottom: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#ccc",
                      lineHeight: "28px",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
        @keyframes leftToRight {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rightToLeft {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        `}
      </style>
    </>
  );
}

export default Services;