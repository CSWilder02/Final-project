import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import logo from "./logo.png";

function BasicNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navbarStyle = {
    position: "fixed",
    width: "100%",
    height: "100px",
    padding: "25px",
    backgroundColor: scrolled ? "#111111" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "90px", paddingTop: "20px" }} src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            style={{
              color: "white",
              marginLeft: "50px",
              textDecoration: "none",
              paddingTop: "20px",
            }}
            href="/"
          >
            Landing
          </NavLink>
          <NavLink
            style={{
              color: "white",
              marginLeft: "90px",
              textDecoration: "none",
              paddingTop: "20px",
            }}
            href="/compare"
          >
            Compare
          </NavLink>
          <NavLink
            style={{
              color: "white",
              marginLeft: "90px",
              textDecoration: "none",
              paddingTop: "20px",
            }}
            href="/time"
          >
            Time
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
