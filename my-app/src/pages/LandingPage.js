import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carla from "../images/CarlaMilhano.jpg";
import "./MainPage.css";

const LandingPage = () => {
    return (
        <div className="colorized">
            <Container id="landing">
                <div className="first-section">
                    <img src={Carla}></img>
                    <p>Bem vinda à minha página</p>
                    <p>Psicóloga clínica e Psicoterapeuta</p>
                </div>
            </Container>
        </div>
    );
}

export default LandingPage;