import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carla from "../images/CarlaMilhano.jpg";
import CarlaMilhano from "../images/nobg.png";
import "./MainPage.css";
import Introduction from "../components/introduction";

const LandingPage = () => {
    return (
        <><div className="colorized">
            <Container id="landing">
                <div className="first-section">
                    <img src={Carla} id="landing-page-photo"></img>
                    <div className="overlay">
                        <p id="text-1">Carla Milhano</p>
                        <p id="text-2">Psicóloga Clínica e Psicoterapeuta</p>
                        <p id="text-3">Membro da Ordem dos Psicólogos Portugueses</p>
                        <p id="text-3">Especialista em psicologia clínica e da saúde</p>
                        <p id="text-3">Especialista em Psicologia social e das organizações</p>
                    </div>
                </div>
            </Container>
        </div><Introduction /></>
    );
}

export default LandingPage;