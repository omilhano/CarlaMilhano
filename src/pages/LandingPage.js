import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carla from "../images/CarlaMilhano.jpg";
import CarlaMilhano from "../images/nobg.png";
import "./MainPage.css";
import Introduction from "../components/introduction";
import PsicologiaPsicoterapia from "./psicologiaPsicoterapia";
import MindfulWalking from "./Mindfulwalking";
import Eventos from "./Eventos"; 
import Contacts from "./Contacts";

const LandingPage = () => {
    return (
        <><div className="colorized">
            <Container id="landing">
                <div className="first-section">
                    <img src={Carla} id="landing-page-photo"></img>
                    <div className="overlay">
                        <p id="text-1">Carla Milhano</p>
                        <p id="text-2">Psicóloga Clínica e Psicoterapeuta</p>
                    </div>

                </div>
            </Container>
            <p id="text-3">Especialista em psicologia clínica e da saúde</p>
            <p id="text-3">Especialista em Psicologia social e das organizações</p>
        </div>
            <Introduction className="section-spacing" />
            <br></br>
            <PsicologiaPsicoterapia className="section-spacing"/>
            <br></br>
            <MindfulWalking className="section-spacing"/>
            <br></br>
            <Eventos className="section-spacing"/>
            <br></br>
            <Contacts className="section-spacing"/></>
    );
}

export default LandingPage;