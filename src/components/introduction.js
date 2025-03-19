import React from 'react';
import './intro.css'
const Introduction = () => {

    const redirectLinkedin = () => {
        window.open("https://www.linkedin.com/in/carla-milhano-aaa95658/");
    };
    return (
        <div id='skill-check'>
            <div id='header'><h1>Sobre mim </h1>
                <button onClick={redirectLinkedin} type="button" class="btn btn-primary" id="bi-linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </button>
            </div>
            <p>Reconheço-me na frase de Jung, “Conheça todas as teorias, domine todas as técnicas mas ao tocar uma alma humana, seja apenas, outra alma humana.”</p>
            <p>Entre as minhas mais doces recordações de infância moram os piqueniques em família, na natureza, aos fins de semana. Tenho entranhado, o cheiro a pinheiros e a terra, o esvoaçar livre dos cabelos, com a brisa, as brincadeiras, os pés descalços, o embalo nas redes à sombra das árvores, as músicas dos pássaros e das folhas.
            </p>
            <p>Sou Psicóloga Clínica e Psicoterapeuta, desde 2005, com formação pós-graduada em Terapia comportamental e cognitiva. No contexto clínico, trabalho muito com as emoções e a partir delas. A minha abordagem é sobretudo  integrativa, procurando adoptar as diversas técnicas e métodos, em função do cliente.
            </p>
            <p>Facilito, também, o desenvolvimento de pessoas, equipas e organizações há mais de 25 anos, como consultora , formadora e coach. Desenho, concebo e entrego projetos de formação em empresas, nas mais variadas áreas comportamentais, com destaque na área da Liderança, Comunicação, Técnicas de falar em público, Gestão emocional, Storytelling e Mindfulness.
            </p>

            <h1>Sobre a minha formação</h1>
            <p>Sou licenciada em Psicologia Social e das Organizações, pela Faculdade de Psicologia e Ciências da Educação da Universidade de Lisboa. Na mesma faculdade, fiz Mestrado de Psicologia , na área do Stress e bem estar.
            </p>
            <p>
                Com formação em Aconselhamento e Psicoterapia Comportamental e Cognitiva, pela APTCC. <br></br>
                Sou Coach com certificação internacional ICF - Nível ACSTH, pelo Activision-Institute.<br></br>
                Certificada em Meditation and mindfulness Teacher Training, por School of positive transformation, U.S.<br></br>
                Com formação em Dança-movimento terapia, por Linni Deihl, Nova York.<br></br>
                Certificada em análise comportamental DISC, por TTI sucessinsights.
            </p>

        </div>
    );
};

export default Introduction;