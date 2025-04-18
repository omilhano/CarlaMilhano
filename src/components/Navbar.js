import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const NavbarComponents = () => {
    return (
        <Navbar expand="lg" className="bg-white" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="m-auto">
                        <Navbar.Brand as={Link} to="/">Carla Milhano</Navbar.Brand>
                        <Nav.Link as={Link} to="/psicologiaepsicoterapia">Consultas de Psicologia</Nav.Link>
                        <Nav.Link as={Link} to="/mindfulwalking">Passeios meditativos</Nav.Link>
                        <Nav.Link as={Link} to="/eventos">Eventos</Nav.Link>
                        <Nav.Link as={Link} to="/contactos">Contactos</Nav.Link>
                        <Nav.Link id="whatsapp-link"
                            href="https://wa.me/351963497479?text=Olá%20Carla%2C%20gostaria%20de%20marcar%20uma%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Marcar Consulta
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponents;
