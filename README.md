# Veloce - Precision in Motion

## 📖 Sobre o Projeto

O **Veloce** é uma plataforma web premium e imersiva dedicada à exibição de uma coleção exclusiva de carros clássicos e esportivos. Criado com uma estética automotiva dark e toques em tons de dourado (*gold accent*), o projeto foca em entregar uma experiência interativa rica, elegante e moderna.

O grande diferencial tecnológico é o **Showroom 3D Interativo**, que roda diretamente no navegador, combinado com **animações de scroll avançadas** que guiam o usuário pela experiência de descobrir veículos lendários.

A interface também possui **recursos nativos de acessibilidade**, permitindo redimensionamento de fonte dinâmico e suporte à Língua Brasileira de Sinais (Libras), garantindo que a experiência seja inclusiva para todos.

---

## ✨ Principais Funcionalidades

- **Catálogo de Veículos**: Apresentação de carros icônicos (Porsche 911 930 Turbo, Fiat Punto GT, Datsun 240K GT) com miniaturas integradas e pré-visualizações elegantes.
- **Showroom 3D (Three.js)**: Modal interativo de visualização de modelos 3D (`.gltf`).
  - Carregamento de modelos comprimidos via Draco Decoder.
  - Iluminação avançada (Key/Fill/Bounce/Spot) e sistema de *ambient glow*.
  - Rotação, pan e zoom pelo mouse (OrbitControls).
  - Transições suaves e *fade-in/fade-out* ao trocar de modelo.
- **Seção de Performance Interativa (NOVO)**:
  - **Contadores de Números Animados (GSAP)**: Números subindo dinamicamente de 0 até o valor final da especificação do carro.
  - **Comparativo Visual**: Barras de progresso preenchidas proporcionalmente ao scroll da página (ScrollTrigger Scrub).
  - **Efeito Parallax**: Fundo cintilante (ambient glow) rolando de forma desacoplada com o movimento do scroll.
- **Acessibilidade Embutida**:
  - Redimensionamento de fonte integrado ao longo de toda a hierarquia CSS (escalonando pelo elemento raiz `html`).
  - Integração oficial com o widget VLibras.

---

## 🚀 Tecnologias Utilizadas

- **HTML5 & CSS3** (Vanilla CSS para tokens e designs customizados)
- **JavaScript (ES6+)** (Arquitetura em módulos para o 3D)
- **Tailwind CSS** (via CDN, utilizado para grid e utilitários rápidos)
- **Three.js v0.165** (Motor WebGL para o Showroom 3D)
- **GSAP & ScrollTrigger** (Core de animações e transições na rolagem)
- **VLibras** (Plugin para tradução em Libras)

---

## 🛠️ Como Executar o Projeto Localmente

Como o projeto utiliza arquivos do tipo Módulo ES6 (`type="module"`) e importa recursos 3D locais (`.gltf`, texturas), por restrições de **CORS** do navegador, o clique direto em `index.html` não carregará os modelos em 3D.

Você precisa de um **servidor local**. Algumas opções recomendadas:

### Opção 1: Usando Node.js / npx (Recomendado)
Se possuir o [Node.js](https://nodejs.org/) instalado, abra o terminal no repositório:
```bash
npx serve .
```
Acesse no navegador: `http://localhost:3000`

### Opção 2: VS Code - Live Server
1. Abra o projeto no [Visual Studio Code](https://code.visualstudio.com/).
2. Instale a extensão **Live Server**.
3. Clique com botão direito no arquivo `index.html` e escolha **"Open with Live Server"**.

### Opção 3: Usando Python
Se tiver Python instalado:
```bash
python -m http.server 8000
```
Acesse no navegador: `http://localhost:8000`

---

## 👥 Equipe e Responsabilidades

Projeto originalmente idealizado pela equipe e recebendo novas implementações de experiência e usabilidade.

- **Izabelle Luna**  
  *Frontend & UI/UX Design*  
  Responsável pela estruturação inicial das páginas (HTML), design da interface premium, tipografia e estilização responsiva utilizando Tailwind CSS.

- **Lucas Raphael**  
  *Integração 3D (Three.js)*  
  Responsável pela implementação do Showroom 3D, carregamento otimizado de modelos GLTF/GLB, controle de câmera, iluminação virtual e manipulação do canvas 3D.

- **Matteus**  
  *Animações e Interatividade*  
  Responsável pela integração básica do GSAP e lógicas de estados visuais.

- **Guilherme Jatobá**  
  *Acessibilidade, Dados e Novas Features GSAP*  
  Responsável pela implementação de recursos de acessibilidade, estruturação dos dados (`cars.json`) e pelas novas atualizações com contadores em GSAP, seção de Performance comparativa e melhorias nas animações gerais (ScrollTrigger).

