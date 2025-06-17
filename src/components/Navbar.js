import react from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { useState } from "react";

const NavbarComponents = () => {

    const [expanded, setExpanded] = useState(false); // Controls expanded state

    const handleNavClick = () => {
        setExpanded(false); // Collapse the navbar after link click
    };

    return (
        <Navbar expanded={expanded} expand="lg" className="bg-white" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="m-auto">
                        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>Carla Milhano</Navbar.Brand>
                        <Nav.Link as={Link} to="/psicologiaepsicoterapia" onClick={handleNavClick}>Consultas de Psicologia</Nav.Link>
                        <Nav.Link as={Link} to="/mindfulwalking" onClick={handleNavClick}>Passeios meditativos</Nav.Link>
                        <Nav.Link as={Link} to="/eventos" onClick={handleNavClick}>Eventos</Nav.Link>
                        <Nav.Link as={Link} to="/contactos" onClick={handleNavClick}>Contactos</Nav.Link>
                        <Nav.Link id="whatsapp-link"
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
