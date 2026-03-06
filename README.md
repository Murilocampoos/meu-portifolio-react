 # Meu Portfólio (React + Vite)

Landing page / portfólio pessoal desenvolvido em **React** com **Vite**, com layout inspirado no protótipo do projeto.

## Visão geral

- Seção de destaque (hero) com apresentação e links sociais
- Seção de projetos com cards e botão de “mostrar mais”
- Layout responsivo (desktop e mobile)

## Tecnologias

- **React**
- **Vite**
- **JavaScript (ESM)**
- **CSS**
- **ESLint**

## Como rodar o projeto

Pré-requisitos:

- **Node.js** (recomendado: LTS)
- **npm**

Instalação e execução:

```bash
npm install
npm run dev
```

Depois, acesse a URL exibida no terminal (ex.: `http://localhost:5173`).

## Scripts úteis

```bash
npm run dev
npm run build
npm run preview
```

## Estrutura do projeto

```text
meu-novo-portifolio/
  public/
  src/
    assets/           # Imagens e recursos estáticos (foto, logos, thumbnails)
    App.jsx           # Página principal (hero + projetos)
    App.css           # Estilos do layout
    main.jsx          # Entry-point do React
    index.css         # Estilos globais
  index.html
  vite.config.js
  package.json
```

## Prints / Demonstração

Vou anexar prints na página do GitHub.

Sugestão de organização no repositório:

```text
docs/
  prints/
    home.png
    projetos.png
    mobile.png
```

E depois referenciar aqui assim:

```md
![Home](docs/prints/home.png)
![Projetos](docs/prints/projetos.png)
![Mobile](docs/prints/mobile.png)
```
