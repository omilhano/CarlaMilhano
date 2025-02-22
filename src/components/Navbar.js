import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const NavbarComponents = () => {
    return (
        <Navbar expand="lg" className="bg-transparent">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="m-auto">
                        <Navbar.Brand as={Link} to="/">Carla Milhano</Navbar.Brand>
                        <Nav.Link as={Link} to="/sobre-mim">Sobre mim</Nav.Link>
                        <Nav.Link as={Link} to="/mindful">Mindful walking</Nav.Link>
                        <Nav.Link as={Link} to="/eventos">Eventos</Nav.Link>
                        <Nav.Link as={Link} to="/psicologia">Psicologia</Nav.Link>
                        <Nav.Link as={Link} to="/agenda">Agenda</Nav.Link>
                        <Nav.Link as={Link} to="/para-ler">Para ler</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponents;
