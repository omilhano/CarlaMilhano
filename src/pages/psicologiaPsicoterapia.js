import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../components/psicologia.css';
import { Button } from "react-bootstrap";

const PsicologiaPsicoterapia = () => {
    return (
        <Container id="psicologia-psicoterapia" className="py-5">
            <Col id='psicologia-psicoterapia-text' className="text-center">
                <h1>Consultas de psicologia e psicoterapia</h1>
                <br></br>
                <h2 id="session-locations">
                    Em Consultório <span class="line-break">| Na natureza | Online</span>
                </h2>


                <h3 id="psicologia-psicoterapia-text-title">
                    Têm o objetivo de:
                </h3>
                <span id='psicologia-psicoterapia-text-span'>
                    Fornecer apoio psicológico a adultos com dificuldades gerais e específicas
                    e/ou promover o bem estar integral, psicológico e emocional da pessoa.
                </span>
                <br></br>
                <br></br>
                <span id='psicologia-psicoterapia-text-span'>
                    Promover todo o potencial interno e recursos para experienciar viver de forma
                    mais plena, presente e feliz.
                </span>
                <br></br>
                <br></br>
                <h3>Abordagens:</h3>
                <p>Psicoterapia cognitiva, comportamental e integrativa</p>
                <p>Técnicas psicoterapêuticas de 1ª, 2ª e 3ª geração</p>

                <div id="experiencias-psicologia">
                    <h3>Experiência de Acompanhamento psicológico de adultos com:</h3>
                    <br></br>

                    <ul className="flex-list">
                        <li id="bullet-point">Stress</li>
                        <li id="bullet-point">Traumas</li>
                        <li id="bullet-point">Depressão</li>
                        <li id="bullet-point">Ansiedade</li>
                        <li id="bullet-point">Ansiedade social</li>
                        <li id="bullet-point">Ataques de pânico</li>
                        <li id="bullet-point">Dificuldades relacionais</li>
                        <li id="bullet-point">Perturbações de personalidade</li>
                        <li id="bullet-point">Entre outras</li>
                    </ul>
                </div>
                <br></br>
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
            </Col>
        </Container>
    );
};

export default PsicologiaPsicoterapia;
