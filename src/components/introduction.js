import React from 'react';
import './intro.css'
import Education from "../images/mortarboard.png";
const Introduction = () => {
    return (
        <div id='skill-check'>
            <h1>Quem é a Carla Milhano?</h1>
            <p><img id='hat' src={Education} alt="mortarboard" /> Mestre em Psicologia, área de Stress e Bem estar.</p>
            <p><img id='hat' src={Education} alt="mortarboard" /> Psicoterapeuta integrativa com formação em Terapia comportamental e cognitiva, pela APTCCI.</p>
            <p><img id='hat' src={Education} alt="mortarboard" /> Especialista em Psicologia Clínica e da Saúde, reconhecida pela Ordem dos Psicólogos Portugueses.</p>
            <p><img id='hat' src={Education} alt="mortarboard" /> Facilitadora certificada de meditação e mindfulness.</p>
            <p><img id='hat' src={Education} alt="mortarboard" /> Acompanhamento psicológico de adultos em casos de depressão, ansiedade, pânico, stress e burnout, regulação emocional, entre outras.</p>
        </div>
    );
};

export default Introduction;