import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavbarComponents() {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackroundColor();

    window.addEventListener("scroll", changeBackroundColor);
  });
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            NgodingKuy.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((data) => {
                return (
                  <div className="nav-link" key={data.id}>
                    <NavLink
                      to={data.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {data.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
