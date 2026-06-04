import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "999",
        background: "#000", // black background
        padding: "15px 0",
        boxShadow: "0px 5px 20px rgba(204,18,241,.4)"
      }}
    >
      <div className="container">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          {/* Logo */}

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              gap: "10px"
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "#cc12f1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              K
            </div>

            <h2
              style={{
                margin:0,
                color:"#cc12f1",
                fontWeight:"bold"
              }}
            >
              Kouser
            </h2>

          </Link>

          {/* Menu */}

          <ul
            style={{
              display:"flex",
              gap:"35px",
              listStyle:"none",
              margin:0,
              padding:0
            }}
          >

            {[
              ["Home","/"],
              ["About","/about"],
              ["Services","/service"],
              ["Portfolio","/portfolio"],
              ["Contact","/contact"]
            ].map((item,index)=>(

              <li key={index}>
                <Link
                  to={item[1]}
                  style={{
                    textDecoration:"none",
                    color:"#fff",
                    fontSize:"17px",
                    fontWeight:"600",
                    transition:"0.4s"
                  }}
                >
                  {item[0]}
                </Link>
              </li>

            ))}

          </ul>

          {/* Button */}

<a
  href="/cv.pdf"
  
  style={{
    border: "none",
    padding: "12px 28px",
    borderRadius: "30px",
    background: "#cc12f1",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0px 5px 15px rgba(204,18,241,.5)",
    textDecoration: "none",
    display: "inline-block"
  }}
>
  Download CV
</a>

        </div>

      </div>
    </header>
  );
}

export default Header;