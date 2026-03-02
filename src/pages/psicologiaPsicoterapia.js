import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../components/psicologia.css';
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const PsicologiaPsicoterapia = () => {
    return (
        <Container id="psicologia-psicoterapia" className="py-5">

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Col id='psicologia-psicoterapia-text' className="text-center">

                    <h1>Consultas de psicologia e psicoterapia</h1>

                    <h2 id="session-locations">
                        Em Consultório <span className="line-break">| Na natureza | Online</span>
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
                    <br /><br />
                    <h3>Abordagens:</h3>
                    <p>Psicoterapia cognitiva, comportamental e integrativa</p>
                    <p>Técnicas psicoterapêuticas de 1ª, 2ª e 3ª geração</p>

                </Col>
            </motion.div>

            {/* Animate list separately for stagger effect */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div id="experiencias-psicologia">
                    <h3>Experiência de Acompanhamento psicológico de adultos com:</h3>

                    <ul className="flex-list">
                        {[
                            "Stress",
                            "Traumas",
                            "Depressão",
                            "Ansiedade",
                            "Ansiedade social",
                            "Ataques de pânico",
                            "Dificuldades relacionais",
                            "Perturbações de personalidade",
                            "Entre outras"
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Button
                    id="whatsapp-link"
                    href="https://wa.me/351962935461?text=Olá%20Carla%2C%20gostaria%20de%20marcar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ border: "none" }}
                >
                    Marcar Consulta
                </Button>
            </motion.div>

        </Container>
    );
};

export default PsicologiaPsicoterapia;
