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
import { Button } from "react-bootstrap";
import { Border } from "react-bootstrap-icons";

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
            {/* Button whatsapp reference */}
            <Button
                id="whatsapp-link"
                href="https://wa.me/351962935461?text=Olá%20Carla%2C%20gostaria%20de%20marcar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                // no border and background color
                style={{ Border: "none" }}
            >
                Marcar Consulta
            </Button>
        </div >
            <PsicologiaPsicoterapia className="section-spacing" />
            <br></br>
            <Introduction className="section-spacing" />
            <br></br>
            <MindfulWalking className="section-spacing" />
            <br></br>
            <Eventos className="section-spacing" />
            <br></br>
            <Contacts className="section-spacing" /></>
    );
}

export default LandingPage;