import React from 'react';
import './intro.css'
const Introduction = () => {

    const redirectLinkedin = () => {
        window.open("https://www.linkedin.com/in/carla-milhano-aaa95658/");
    };
    return (
        <div id='skill-check'>
            <div id='header'><h1>Sobre mim </h1>
            <button id='linkedin-button' onClick={redirectLinkedin}>
                <svg id='linkedin-place' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0d6efd" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                </button>
            </div>
            <p id='about-me-text'>
                Reconheço-me na frase de Jung, “Conheça todas as teorias, domine todas as técnicas mas ao tocar uma alma humana, seja apenas, outra alma humana.” <br></br>Entre as minhas mais doces recordações de infância moram os piqueniques em família, na natureza, aos fins de semana.<br></br> Tenho entranhado o cheiro a pinheiros e a terra, o esvoaçar livre dos cabelos, com a brisa, as brincadeiras, os pés descalços, o embalo nas redes à sombra das árvores, as músicas dos pássaros e das folhas. <br></br>Sou Psicóloga Clínica e Psicoterapeuta, desde 2005.
            </p>
            <h1>Sobre a minha formação</h1>
            <p id='about-me-text'>
                Sou licenciada em Psicologia Social e das Organizações, pela Faculdade de Psicologia e Ciências da Educação da Universidade de Lisboa. Na mesma faculdade, fiz Mestrado de Psicologia, na área do Stress e bem estar.<br></br> Com formação em Aconselhamento e Psicoterapia Comportamental e Cognitiva, pela APTCC. <br></br> Sou Coach com certificação internacional ICF - Nível ACSTH, pelo Activision-Institute.<br></br>Certificada em Meditation and mindfulness Teacher Training, por School of positive transformation, U.S. <br></br> Com formação em Dança-movimento terapia, por Linni Deihl, Nova York. <br></br>Certificada em análise comportamental DISC, por TTI sucessinsights.
            </p>
        </div>
    );
};

export default Introduction;