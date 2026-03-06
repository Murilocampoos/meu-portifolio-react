import { useState } from 'react';
import './App.css';

// 1. IMPORTS NO TOPO (Nomes únicos e caminhos corrigidos)
import fotoPerfil from './assets/foto-perfil.png';
import imgGta from './assets/projeto-gta.png';
import imgLogo from './assets/LOGO 1_quadrado_clean.png';
import imgLemma from './assets/Lemma.png';
import imgPata from './assets/Pata.png';

function App() {
  // Estado para controlar o "Mostrar Mais"
  const [mostrarTodos, setMostrarTodos] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#topo" aria-label="Voltar ao topo">
            <span className="brand__badge">MCL</span>
          </a>

          <nav className="nav">
            <a className="nav__link" href="#projetos">MEUS PROJETOS</a>
            <a className="nav__link" href="https://www.linkedin.com/in/murilo-campos-lopes-99a529126/" target="_blank">CURRICULO</a>
          </nav>
        </div>
      </header>

      <main id="topo" className="page">
        <section className="hero" aria-label="Apresentação">
          <div className="hero__grid">
            <div className="hero__copy">
              <h1 className="hero__title">Murilo de<br />Campos Lopes</h1>
              <p className="hero__subtitle">Um Desenvolvedor dedicado em meus projetos e ansioso para novos desafios!</p>
              <p className="hero__subtitle">Em meus cargos anteriores, aprimorei minhas habilidades em solucionar problemas e resolver questões técnicas de forma eficiente. Minha experiência inclui fornecer suporte de help desk para garantir operações sem falhas e realizar palestras abrangentes e ministrar treinamentos para aprimorar a proficiência técnica dos membros da equipe.

                Nesta landing page mostrarei um pouco do meu portfólio, ideias e interesses.</p>

              <div className="social" aria-label="Redes sociais">
                <a className="social__link" href="https://github.com/Murilocampoos" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
                <a className="social__link" href="https://www.linkedin.com/in/murilo-campos-lopes-99a529126/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                <a className="social__link" href="#" target="_blank" rel="noreferrer" aria-label="WhatsApp">wa</a>
                <a className="social__link" href="https://www.instagram.com/murilocamposl/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              </div>
            </div>

            <div className="hero__media">
              <div className="photo-card" aria-label="Foto de perfil">
                <img className="photo-card__img" src={fotoPerfil} alt="Foto de portifolio" />
              </div>
            </div>
          </div>
        </section>

        <section className="projetos" id="projetos">
          <h2 className="section-title">MEUS PROJETOS</h2>

          <div className="container-projetos">
            {/* PRIMEIROS 3 PROJETOS (Sempre visíveis) */}
            <div className="projeto ativo">
              <a href="https://go.hotmart.com/V87306213H?dp=1" target="_blank" rel="noreferrer">
                <img src={imgGta} alt="Projeto E-book Educativo" />
                <h3>Projeto 1</h3>
                <div className="informacoes-projeto">
                  <p>Tecnologia com linguagem simplificada.</p>
                  <p>🔗 Acessar página</p>
                </div>
              </a>
            </div>

            <div className="projeto ativo">
              <a href="#" target="_blank" rel="noreferrer">
                <img src={imgLogo} alt="Projeto QuantIT" />
                <h3>Projeto 2</h3>
                <div className="informacoes-projeto">
                  <p>C++, ESP32 e componentes eletrónicos.</p>
                  <p>🔗 Ver no GitHub</p>
                </div>
              </a>
            </div>

            <div className="projeto ativo">
              <a href="https://github.com/Quanty-IT/lemma-languages" target="_blank" rel="noreferrer">
                <img src={imgLemma} alt="Projeto Lemma" />
                <h3>Projeto 3</h3>
                <div className="informacoes-projeto">
                  <p>Sistema em PHP e Laravel.</p>
                  <p>🔗 Ver no GitHub</p>
                </div>
              </a>
            </div>

            {/* LÓGICA DO MOSTRAR MAIS: Só exibe o 4º se mostrarTodos for true */}
            {mostrarTodos && (
              <div className="projeto ativo">
                <a href="https://github.com/Quanty-IT/friendly-paw" target="_blank" rel="noreferrer">
                  <img src={imgPata} alt="Projeto Pata Amiga" />
                  <h3>Projeto 4</h3>
                  <div className="informacoes-projeto">
                    <p>Desenvolvido em Java e MySQL.</p>
                    <p>🔗 Ver no GitHub</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <button
            className="btn-mostrar-projetos"
            onClick={() => setMostrarTodos(!mostrarTodos)}
          >
            {mostrarTodos ? "Mostrar menos" : "Mostrar mais"}
          </button>
        </section>

      </main>
    </>
  );
}

export default App;