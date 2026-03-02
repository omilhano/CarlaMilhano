import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import "../components/Mindfulwalking.css";
import Caminhadas1 from "../images/caminhada-1.webp";
import Caminhadas2 from "../images/caminhada-2.webp";
import { Button } from "react-bootstrap";
import { JournalBookmarkFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut"
        }
    }
};

const Mindfulwalking = () => {
    return (
        <Container id="mindfulwalking">

            {/* Title */}
            <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="section-title"
            >
                Passeios meditativos - Mindful walking
            </motion.h3>

            {/* Quote */}
            <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="quotation"
            >
                <cite>"A cada passo a Terra cura-nos, e com cada passo nós curamos a Terra"</cite>
                <br />
                <span className="quote-source">Princípio budista</span>
            </motion.h3>

            {/* Carousel */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Carousel className="carousel-caminhadas my-4" interval={2500} pause={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-caminhadas"
                            src={Caminhadas1}
                            alt="Caminhada na natureza 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-caminhadas"
                            src={Caminhadas2}
                            alt="Caminhada na natureza 2"
                        />
                    </Carousel.Item>
                </Carousel>
            </motion.div>

            {/* Paragraphs with stagger effect */}
            {[
                `Gosto de caminhar em silêncio pela natureza. Sinto que o silêncio é uma forma de a honrar. Com este observar atento, aprendo com os seus ciclos, escuto melhor os seus ensinamentos, as suas preces, até as suas dores e ainda as suas canções.`,
                `Também é quando silencio que escuto melhor os outros. Convido-me a uma escuta mais atenta ao meu corpo e emoções, e é no silêncio que escuto a minha respiração, a minha alma a vibrar, a tremer de medo ou a render-se de encanto.`,
                `Ao caminhar de forma lenta, sintonizando os passos com a respiração, permito-me desacelerar, confiar, relaxar e sintonizar com o meu ritmo primordial.`,
                `  O meu Projeto de experiências de atenção plena na natureza,{" "}
                <a href="https://www.instagram.com/mindfulness.engageyoursenses?igsh=bDc4djRwaHdwcWVt" target="_blank" rel="noopener noreferrer" className="link-with-space">
                    mindfulness.engageyoursenses
                </a>{" "}
                nasceu da vontade de partilhar, com outros, este silêncio e experiências imersivas na natureza.`
            ].map((text, index) => (
                <motion.p
                    key={index}
                    className="mindful-paragraph"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                >
                    {index === 3 ? (
                        <>
                            O meu Projeto de experiências de atenção plena na natureza,{" "}
                            <a
                                href="https://www.instagram.com/mindfulness.engageyoursenses?igsh=bDc4djRwaHdwcWVt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-with-space"
                            >
                                mindfulness.engageyoursenses
                            </a>{" "}
                            nasceu da vontade de partilhar, com outros, este silêncio e experiências imersivas na natureza.
                        </>
                    ) : (
                        text
                    )}
                </motion.p>
            ))}

            {/* Button */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
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

export default Mindfulwalking;
