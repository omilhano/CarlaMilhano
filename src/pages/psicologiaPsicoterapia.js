import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../components/psicologia.css';

const PsicologiaPsicoterapia = () => {
    return (
        <Container id="psicologia-psicoterapia" className="py-5">
            <Row>
                <Col>
                    <h1>Consultas de psicologia e psicoterapia</h1>
                    <h2>Em Consultório | Na natureza | Online</h2>

                    <h3 id="psicologia-psicoterapia-text-title">
                        Têm o objetivo de:
                    </h3>
                    <ul>
                        <li id="bullet-point">
                            Fornecer apoio psicológico a adultos com dificuldades gerais e específicas
                            e/ou promover o bem estar integral, psicológico e emocional da pessoa.
                        </li>
                        <li id="bullet-point">
                            Promover todo o potencial interno e recursos para experienciar viver de forma
                            mais plena, presente e feliz.
                        </li>
                    </ul>

                    <h3>Abordagens:</h3>
                    <p>Psicoterapia cognitiva, comportamental e integrativa</p>
                    <p>Técnicas psicoterapêuticas de 1ª, 2ª e 3ª geração</p>

                    <div id="experiencias-psicologia">
                        <h3>Experiência de Acompanhamento psicológico de adultos com:</h3>
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
                </Col>
            </Row>
        </Container>
    );
};

export default PsicologiaPsicoterapia;
