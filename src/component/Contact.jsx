import React from "react";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0a0a0a",
        padding: "100px 20px",
      }}
    >
      <div className="container">
        {/* TITLE */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              color: "#e612f1",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Send Your Message
          </h2>

          <p
            style={{
              color: "#ccc",
              fontSize: "18px",
            }}
          >
            Feel free to contact me for any React / Web Development work
          </p>
        </motion.div>

        <div className="row g-4">
          {/* LEFT FORM */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: "#111",
                padding: "30px",
                borderRadius: "20px",
                boxShadow: "0 0 25px rgba(230,18,241,.2)",
              }}
            >
              <div className="row g-3">
                {["Your Name", "Your Email", "Subject"].map((ph, i) => (
                  <div className="col-md-12" key={i}>
                    <motion.input
                      placeholder={ph}
                      className="form-control"
                      whileFocus={{ scale: 1.02 }}
                      style={{
                        background: "#1a1a1a",
                        color: "#fff",
                        border: "1px solid #333",
                        padding: "14px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                ))}

                <div className="col-md-12">
                  <motion.textarea
                    rows="6"
                    placeholder="Message"
                    className="form-control"
                    whileFocus={{ scale: 1.02 }}
                    style={{
                      background: "#1a1a1a",
                      color: "#fff",
                      border: "1px solid #333",
                      padding: "14px",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className="col-md-12">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px #e612f1",
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background:
                        "linear-gradient(45deg,#e612f1,#9b00ff)",
                      border: "none",
                      padding: "14px 35px",
                      color: "#fff",
                      borderRadius: "30px",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT INFO */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: "#111",
                padding: "30px",
                borderRadius: "20px",
                color: "white",
                height: "100%",
                boxShadow: "0 0 25px rgba(230,18,241,.25)",
              }}
            >
              <h4
                style={{
                  color: "#e612f1",
                  marginBottom: "25px",
                }}
              >
                Contact Details
              </h4>

              <div className="mb-4">
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Model Colony, Karachi
                </p>

                <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  +92 3030466514
                </p>

                <p>
                  <i className="bi bi-envelope-fill me-2"></i>
                  umer4040445@gmail.com
                </p>
              </div>

              <hr style={{ borderColor: "#333" }} />

              <p
                style={{
                  color: "#bbb",
                  marginTop: "20px",
                }}
              >
                I usually respond within 24 hours. Let's build something
                amazing together 🚀
              </p>

              {/* SOCIAL LINKS */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "25px",
                }}
              >
                <motion.a
                  href="https://www.linkedin.com/in/kouser-parveen-01273a3a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px #e612f1",
                  }}
                  style={{
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1a1a1a",
                    borderRadius: "50%",
                    color: "#e612f1",
                    textDecoration: "none",
                    border: "1px solid #e612f1",
                    fontSize: "20px",
                  }}
                >
                  <i className="bi bi-linkedin"></i>
                </motion.a>

                <motion.a
                  href="https://github.com/kouserparveen162-byte"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px #e612f1",
                  }}
                  style={{
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#1a1a1a",
                    borderRadius: "50%",
                    color: "#e612f1",
                    textDecoration: "none",
                    border: "1px solid #e612f1",
                    fontSize: "20px",
                  }}
                >
                  <i className="bi bi-github"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;