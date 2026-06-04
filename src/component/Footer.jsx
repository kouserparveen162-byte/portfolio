import React from "react";

function Footer() {
  return (
<footer
  style={{
    background: "#070707",
    padding: "70px 20px 30px",
    borderTop: "1px solid rgba(255,73,124,.2)"
  }}
>
  <div className="container">

    <div className="row">

      {/* Left Side */}

      <div className="col-lg-6 mb-4">

        <h2
          style={{
            color: "#e612f1",
            fontWeight: "bold",
            marginBottom: "15px"
          }}
        >
          Kouser Portfolio
        </h2>

        <p
          style={{
            color: "#ccc",
            lineHeight: "28px"
          }}
        >
          Passionate React Developer creating
          modern, responsive and user-friendly
          web applications with clean UI design.
        </p>

      </div>

      {/* Right Side */}

      <div className="col-lg-6 text-lg-end">

        <h5
          style={{
            color: "#fff",
            marginBottom: "20px"
          }}
        >
          Follow Me
        </h5>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >

          {[
            "facebook",
            "instagram",
            "linkedin",
            "github"
          ].map((icon, i) => (

            <a
              key={i}
              href="#"
              style={{
                width: "45px",
                height: "45px",
                background: "#2b3441",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#e612f1",
                textDecoration: "none",
                fontSize: "18px",
                transition: ".4s"
              }}
            >
              <i className={`bi bi-${icon}`}></i>
            </a>

          ))}

        </div>

      </div>

    </div>

    {/* Bottom */}

    <hr
      style={{
        borderColor: "#080808",
        margin: "30px 0"
      }}
    />

    <p
      style={{
        color: "#aaa",
        textAlign: "center",
        margin: 0
      }}
    >
      © 2026
      <span
        style={{
          color: "#e612f1",
          fontWeight: "bold",
          marginLeft: "5px"
        }}
      >
        Kouser Portfolio
      </span>
      {" "} | All Rights Reserved
    </p>

  </div>
</footer>
  );
}

export default Footer;
