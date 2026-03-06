import React, { useState } from 'react';

// Importando imagens dos projetos
import imgGta from '../assets/projeto-gta.png';
import logoClean from '../assets/LOGO 1_quadrado_clean.png'; // Adicionado import para LOGO 1_quadrado_clean.png
import imgLemma from '../assets/Lemma.png';
import imgPata from '../assets/Pata.png';

const Projects = () => {
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const projetos = [
        {
            id: 1,
            titulo: "Projeto 1",
            descricao: "Projeto feito visando introduzir às pessoas sobre tecnologia que usamos no dia-a-dia com línguagem simplificada e exemplos do cotidiano.",
            imagem: imgGta, // Usando a imagem importada
            link: "https://go.hotmart.com/V87306213H?dp=1"
        },
        {
            id: 2,
            titulo: "Projeto 2",
            descricao: "Projeto feito usando C++, ESP32 e componenetes eletronicos",
            imagem: logoClean, // Usando a imagem importada
            link: "./src/imagens/imagens/LOGO 1_quadrado_clean.png" // Link original do HTML
        },
        {
            id: 3,
            titulo: "Projeto 3",
            descricao: "PI Segundo Semestre - Sistema criado para Auxíliar uma empresa em seu processo PHP, Laravel",
            imagem: imgLemma, // Usando a imagem importada
            link: "https://github.com/Quanty-IT/lemma-languages"
        },
        {
            id: 4,
            titulo: "Projeto 4",
            descricao: "Projeto feito usando Java e MySQL",
            imagem: imgPata, // Usando a imagem importada
            link: "https://github.com/Quanty-IT/friendly-paw"
        },
        {
            id: 5,
            titulo: "Projeto 5",
            descricao: "Projeto feito usando HTML, CSS e JavaScript",
            imagem: "https://via.placeholder.com/300?text=Projeto+5",
            link: "#" // Placeholder
        },
        {
            id: 6,
            titulo: "Projeto 6",
            descricao: "Projeto feito usando HTML, CSS e JavaScript",
            imagem: "https://via.placeholder.com/300?text=Projeto+6",
            link: "#" // Placeholder
        },
        {
            id: 7,
            titulo: "Projeto 7",
            descricao: "Projeto feito usando HTML, CSS e JavaScript",
            imagem: "https://via.placeholder.com/300?text=Projeto+7",
            link: "#" // Placeholder
        },
        {
            id: 8,
            titulo: "Projeto 8",
            descricao: "Projeto feito usando HTML, CSS e JavaScript",
            imagem: "https://via.placeholder.com/300?text=Projeto+8",
            link: "#" // Placeholder
        }
    ];

    const quantidadeInicial = 4;

    return (
        <section className="projetos" id="projetos">
            <h2 className="titulo">Meus projetos</h2>

            <div className="container-projetos">
                {projetos.map((projeto, index) => {
                    const isAtivo = index < quantidadeInicial || mostrarTodos; // Lógica para mostrar os primeiros 4 ou todos

                    return (
                        <div key={projeto.id} className={`projeto ${isAtivo ? 'ativo' : ''}`}>
                            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                                <img src={projeto.imagem} alt={projeto.titulo} />
                                <h3>{projeto.titulo}</h3>
                                <div className="informacoes-projeto">
                                    <p>{projeto.descricao}</p>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>

            {!mostrarTodos && (
                <button className="btn-mostrar-projetos" onClick={() => setMostrarTodos(true)}>
                    Mostrar mais
                </button>
            )}
        </section>
    );
};

export default Projects;