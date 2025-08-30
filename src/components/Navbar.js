import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const NavbarComponents = () => {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 80; // height of navbar in px
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <Navbar expand="lg" className="bg-white" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="m-auto">
                        <Navbar.Brand onClick={() => handleScroll("landing")}>Carla Milhano</Navbar.Brand>
                        <Nav.Link onClick={() => handleScroll("psicologia-psicoterapia")}>Consultas de Psicologia</Nav.Link>
                        <Nav.Link onClick={() => handleScroll("mindfulwalking")}>Passeios meditativos</Nav.Link>
                        <Nav.Link onClick={() => handleScroll("eventos")}>Eventos</Nav.Link>
                        <Nav.Link onClick={() => handleScroll("contacts")}>Contactos</Nav.Link>
                        <Nav.Link
                            id="whatsapp-link"
                            href="https://wa.me/351962935461?text=Olá%20Carla%2C%20gostaria%20de%20marcar%20uma%20consulta."
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
