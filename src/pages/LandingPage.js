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
                        <p id="text-1">Bem-vindos</p>
                        <p id="text-2">à minha página</p>
                        <p id="text-3">Psicóloga clínica e Psicoterapeuta</p>
                    </div>
                </div>
            </Container>
        </div><Introduction /></>
    );
}

export default LandingPage;