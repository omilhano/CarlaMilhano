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
                    <img src={Carla}></img>
                    <div className="overlay">
                        <p id="text-1">Carla Milhano</p>
                        <p id="text-2">Psicóloga Clínica e Psicoterapeuta</p>
                        <p id="text-3">Membro da Ordem dos Psicólogos Portugueses (OPP).</p>
                        <p id="text-3">Especialista em psicologia clínica e da saúde, pela OPP.</p>
                        <p id="text-3">Especialista em Psicologia social e das organizações, pela OPP.
                        </p>
                    </div>
                </div>
            </Container>
        </div><Introduction /></>
    );
}

export default LandingPage;