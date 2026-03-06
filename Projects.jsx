import React, { useState } from 'react';
// Certifique-se de importar o CSS correspondente ou ter os estilos globais carregados
// import './Projects.css';

const Projects = () => {
    // Estado para controlar a exibição dos projetos extras
    // Substitui a lógica de 'esconderBotao' e selecionar 'projetosInativos'
    const [mostrarTodos, setMostrarTodos] = useState(false);

    // Dados dos projetos (Substitua pelos dados reais do seu HTML)
    const projetos = [
        {
            id: 1,
            titulo: "Projeto 1",
            descricao: "Descrição do projeto 1",
            imagem: "https://via.placeholder.com/300", // Coloque o caminho da sua imagem
            link: "#"
        },
        {
            id: 2,
            titulo: "Projeto 2",
            descricao: "Descrição do projeto 2",
            imagem: "https://via.placeholder.com/300",
            link: "#"
        },
        {
            id: 3,
            titulo: "Projeto 3",
            descricao: "Descrição do projeto 3",
            imagem: "https://via.placeholder.com/300",
            link: "#"
        },
        {
            id: 4,
            titulo: "Projeto 4",
            descricao: "Descrição do projeto 4",
            imagem: "https://via.placeholder.com/300",
            link: "#"
        },
        // Adicione mais projetos aqui
    ];

    // Define quantos projetos aparecem inicialmente (antes de clicar no botão)
    const quantidadeInicial = 3;

    return (
        <section className="projetos" id="projetos">
            <h2 className="titulo">Meus projetos</h2>

            <div className="container-projetos">
                {projetos.map((projeto, index) => {
                    // Lógica: O projeto recebe a classe 'ativo' se for um dos iniciais OU se o botão foi clicado
                    const isAtivo = index < quantidadeInicial || mostrarTodos;

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

            {/* Renderização condicional do botão: Só aparece se mostrarTodos for falso */}
            {!mostrarTodos && (
                <button
                    className="btn-mostrar-projetos"
                    onClick={() => setMostrarTodos(true)}
                >
                    Mostrar mais
                </button>
            )}
        </section>
    );
};

export default Projects;