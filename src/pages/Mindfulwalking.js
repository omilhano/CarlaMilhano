import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import "../components/Mindfulwalking.css";
import Caminhadas1 from "../images/caminhada-1.webp";
import Caminhadas2 from "../images/caminhada-2.webp";
import { Button } from "react-bootstrap";
import { JournalBookmarkFill } from "react-bootstrap-icons";

const Mindfulwalking = () => {
    return (
        <Container id="mindfulwalking">
            <h3 className="section-title">Passeios meditativos - Mindful walking</h3>

            <h3 className="quotation">
                <cite>"A cada passo a Terra cura-nos, e com cada passo nós curamos a Terra"</cite>
                <br />
                <span className="quote-source">Princípio budista</span>
            </h3>

            {/* Bootstrap Carousel */}
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

            {/* Text paragraphs */}
            <p className="mindful-paragraph">
                Gosto de caminhar em silêncio pela natureza. Sinto que o silêncio é uma forma de a honrar. Com este observar atento, aprendo com os seus ciclos, escuto melhor os seus ensinamentos, as suas preces, até as suas dores e ainda as suas canções.
            </p>
            <p className="mindful-paragraph">
                Também é quando silencio que escuto melhor os outros. Convido-me a uma escuta mais atenta ao meu corpo e emoções, e é no silêncio que escuto a minha respiração, a minha alma a vibrar, a tremer de medo ou a render-se de encanto.
            </p>
            <p className="mindful-paragraph">
                Ao caminhar de forma lenta, sintonizando os passos com a respiração, permito-me desacelerar, confiar, relaxar e sintonizar com o meu ritmo primordial.
            </p>
            <p className="mindful-paragraph">
                O meu Projeto de experiências de atenção plena na natureza,{" "}
                <a href="https://www.instagram.com/mindfulness.engageyoursenses?igsh=bDc4djRwaHdwcWVt" target="_blank" rel="noopener noreferrer" className="link-with-space">
                    mindfulness.engageyoursenses
                </a>{" "}
                nasceu da vontade de partilhar, com outros, este silêncio e experiências imersivas na natureza.
            </p>
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
        </Container>
    );
};

export default Mindfulwalking;
