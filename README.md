# Veloce - Precision in Motion

## 📖 Sobre o Projeto

O **Veloce** é uma plataforma web moderna e imersiva para exibição de uma coleção exclusiva de carros clássicos e esportivos. O grande diferencial do projeto é o seu **Showroom 3D Interativo**, que permite aos usuários visualizar os modelos de veículos em três dimensões com alto nível de detalhes diretamente pelo navegador.

A interface foi projetada com foco em uma estética automotiva premium, oferecendo animações fluidas, design responsivo e recursos de acessibilidade para garantir que todos possam aproveitar a experiência.

### ✨ Principais Funcionalidades
- **Catálogo de Veículos**: Apresentação de carros icônicos (Porsche 911 930 Turbo, Fiat Punto GT, Datsun 240K GT) com suas respectivas especificações técnicas.
- **Showroom 3D**: Integração com a biblioteca Three.js para renderização de modelos 3D (`.gltf`), permitindo rotação, zoom e visualização detalhada em um modal focado.
- **Animações Avançadas**: Utilização de GSAP e ScrollTrigger para transições de página e revelação de elementos na rolagem.
- **Acessibilidade**: Suporte a redimensionamento de fonte dinâmico e integração com o widget VLibras para tradução automática em Língua Brasileira de Sinais.

## 🚀 Tecnologias Utilizadas
- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **Tailwind CSS** (via CDN)
- **Three.js** (Renderização WebGL 3D)
- **GSAP & ScrollTrigger** (Animações)
- **VLibras** (Acessibilidade)

---

## 🛠️ Como Executar o Projeto Localmente

Como o projeto utiliza módulos ES6 (`type="module"`) e carrega arquivos externos de modelos 3D (`.gltf` / `.bin` / `.json`), ele **não funcionará corretamente se você apenas der um clique duplo no arquivo `index.html`** devido à política de segurança CORS do navegador.

Você precisará rodar um servidor local. Siga um dos métodos abaixo:

### Pré-requisitos
Ter o código-fonte baixado/clonado em sua máquina.

### Método 1: Usando Node.js (Recomendado)
Se você possui o [Node.js](https://nodejs.org/) instalado, abra o terminal na pasta raiz do projeto e execute:
```bash
npx serve .
```
Acesse no navegador através do link gerado (geralmente `http://localhost:3000`).

### Método 2: Usando VS Code (Live Server)
1. Abra a pasta do projeto no [Visual Studio Code](https://code.visualstudio.com/).
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
4. O navegador abrirá automaticamente o projeto rodando em um servidor local.

### Método 3: Usando Python
Se tiver o Python instalado, rode no terminal:
```bash
# Para Python 3.x
python -m http.server 8000
```
Acesse no navegador: `http://localhost:8000`

---

## 👥 Equipe e Responsabilidades

Este projeto foi desenvolvido por uma equipe de 4 integrantes. Abaixo estão as principais responsabilidades de cada um (você pode editar os nomes abaixo):

- **[Nome do Integrante 1]**  
  *Frontend & UI/UX Design*  
  Responsável pela estruturação das páginas (HTML), design da interface premium, tipografia e estilização responsiva utilizando Tailwind CSS.

- **[Nome do Integrante 2]**  
  *Integração 3D (Three.js)*  
  Responsável pela implementação do Showroom 3D, carregamento otimizado de modelos GLTF/GLB, controle de câmera, iluminação virtual e manipulação do canvas 3D.

- **[Nome do Integrante 3]**  
  *Animações e Interatividade*  
  Responsável pela integração do GSAP e ScrollTrigger para criar animações fluidas de scroll, *hover states* complexos nos cards e a lógica e design dos modais interativos.

- **[Nome do Integrante 4]**  
  *Acessibilidade e Dados (JSON)*  
  Responsável pela implementação de recursos de acessibilidade (como botões de ajuste de fonte e widget do VLibras) e estruturação dos dados dinâmicos do catálogo através do `cars.json`.
