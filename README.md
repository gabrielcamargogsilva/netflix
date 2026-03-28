# Seletor de Serviços de Streaming com Clone Netflix (Estudo)

Este repositório contém uma aplicação web que simula um seletor de serviços de streaming, com um clone completo da interface da Netflix integrado (seleção de perfis e catálogo). O objetivo principal é reforçar conceitos de HTML semântico, CSS responsivo, JavaScript para interatividade e boas práticas de acessibilidade.

## 🚀 Sobre
- Tipo: aplicação web de clonagem visual
- Uso: fins educacionais
- Inspiração: interface de serviço de streaming (Netflix)
- Fluxo: Seleção de Serviço → Seleção de Perfil (Netflix) → Catálogo (Netflix)

## 🧩 Tech Stack
- HTML5
- CSS3
- JavaScript (ES6+)

## 🛠️ Funcionalidades implementadas
- **Página de Seleção de Serviços**: Cards interativos para escolher entre Amazon Prime Video, Netflix e Disney+
- **Seleção de Perfis (Netflix)**: Interface para escolher perfil, com armazenamento local e ajuste de caminhos de imagem
- **Catálogo (Netflix)**: Carrosséis de filmes/séries organizados por categorias, com cards interativos, badges, progresso e links para trailers
- Estrutura semântica com `<main>`, `<section>`, `<nav>`, `<ul>`, `<li>`, `<figure>`, `<figcaption>`
- Ícones de favicon customizados
- Cards com hover e transições suaves
- Layout responsivo (desktop / tablet / celular)
- Tema escuro/claro (nas páginas de serviço e perfis)
- Navegação entre páginas com caminhos relativos/absolutos ajustados
- Dados de filmes/séries com tags, progresso e links externos

## 📁 Estrutura do Projeto
```
netflix/
├── README.md
├── index.html                 # Página de seleção de serviços
├── style.css                  # Estilos para a página inicial
├── assets/                    # Imagens dos serviços (logos)
│   ├── logo-netflix.png
│   ├── prime-video.png
│   └── disney.png
├── js/
│   └── video.js               # Script para vídeo
├── perfil/                    # Seção de perfis da Netflix
│   ├── perfil.html
│   ├── style.css
│   ├── assets/                # Imagens dos perfis
│   │   ├── logo-netflix.png
│   │   ├── perfil-1.png
│   │   ├── perfil-2.jpg
│   │   ├── perfil-3.jpg
│   │   ├── perfil-4.jpg
│   │   └── perfil-5.jpg
│   └── js/
│       └── index.js           # Lógica de seleção de perfil
└── catalogo/                  # Catálogo da Netflix
    ├── catalogo.html
    ├── catalogo.css
    ├── js/
    │   ├── main.js            # Inicialização do catálogo
    │   ├── data.js            # Dados dos filmes/séries
    │   ├── utils.js           # Utilitários
    │   └── components/        # Componentes modulares
    │       ├── Card.js        # Componente de card de filme
    │       └── Carousel.js    # Componente de carrossel
```

## 🔍 Observações
Trata-se de uma cópia para aprendizado, sem finalidade comercial ou uso oficial das marcas Netflix, Amazon ou Disney. O projeto serve como base para treinar layout, semântica, responsividade e JavaScript.

## ▶️ Como executar
1. Abra o projeto em um editor como VSCode.
2. Instale a extensão "Live Server" (ou similar).
3. Clique com o botão direito em `index.html` e selecione "Open with Live Server".
4. Navegue pela aplicação: Seleção de Serviço → Perfis (Netflix) → Catálogo.

Para desenvolvimento, certifique-se de que o servidor local esteja rodando para que os caminhos relativos funcionem corretamente.

---

*Desenvolvido como parte do curso/imersão de Front-End da Alura.*