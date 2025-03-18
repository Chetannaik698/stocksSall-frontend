import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ZerodhaNavbar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" fixed="top" className="bg-white shadow-sm py-3 px-4 px-md-5 nav">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-primary fw-bold">
            STOCKSTALL <i className="fa-solid fa-arrow-trend-up"></i>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav">
          <FaBars className="text-dark" size={24} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="nav-box">
            <Nav.Link
              as={Link}
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-primary fw-bold"
                  : "text-secondary"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              className={
                location.pathname === "/products"
                  ? "text-primary fw-bold"
                  : "text-secondary"
              }
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pricing"
              className={
                location.pathname === "/pricing"
                  ? "text-primary fw-bold"
                  : "text-secondary"
              }
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/support"
              className={
                location.pathname === "/support"
                  ? "text-primary fw-bold"
                  : "text-secondary"
              }
            >
              Support
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signup"
              className={
                location.pathname === "/signup"
                  ? "text-primary fw-bold"
                  : "text-secondary"
              }
            >
              Signup
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className={
                location.pathname === "/login"
                  ? "text-primary fw-bold"
                  : "text-secondary"
              }
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="text-secondary"
            >
                <i class="fa-solid fa-bars" style={{fontSize:"18px"}}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZerodhaNavbar;
