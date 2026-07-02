# 🚁 Swarm 79 — Site Oficial
  Este é um projeto conjunto do Grupo de Estudos, Pesquisa e Inovação em Robótica Aérea · Universidade Federal de Sergipe nomeado equipe SWARM79 como enfatizado no aspecto
  geral tudo que for tratado sobre este projeto en si deve ser feito em conjunto como forma de fometentar atividades de engajamento a equipe fora isto este readme contem uma pequena
  previa do que é passado mais detalhadamente no manual da swarm , dito isso é inprecindivel que qualquel integrante da equipe com acesso ao projeto leia o manual e as instruções 
  recomenteadas antes e realizar qualquer alteração no projeto sem a plena ciencia do que realmente está fazendo

  Logo abaixo está uma colinha com informações rapidas para uso e manutenção no projeto lembrando que estas informações rapidas não substituem a informação integra do manual, mas quebram um galho
  para quem a não tem muito tempo ou ja leu o manual, use com sabedoria.

![Swarm 79](https://img.shields.io/badge/Swarm%2079-UFS-C8102E?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📁 Estrutura do Projeto

```
swarm79/
├── index.html        # Página principal (home)
├── equipe.html       # Integrantes por sub-área
├── blog.html         # Blog e notícias completas
├── style.css         # Estilos visuais globais
├── script.js         # Lógica e dados dinâmicos
└── images/
    ├── logo.png      # Logo da equipe (círculo no hero)
    ├── sobre.jpg     # Imagem de fundo da seção Sobre Nós
    ├── hero1.jpg     # Imagens do carrossel do hero
    ├── hero2.jpg
    ├── hero3.jpg
    └── equipe/
        └── *.jpg     # Fotos dos integrantes
```

---

## 🚀 Como Rodar Localmente

**Opção 1 — VS Code + Live Server (recomendado)**
```bash
# 1. Abra a pasta swarm79/ no VS Code
# 2. Instale a extensão Live Server (Ritwick Dey)
# 3. Clique com botão direito em index.html → Open with Live Server
# Acesse: http://127.0.0.1:5500
```

**Opção 2 — Python**
```bash
cd swarm79/
python -m http.server 8080
# Acesse: http://localhost:8080
```

**Opção 3 — Direto no navegador**
```
Dê dois cliques em index.html
(fontes externas podem não carregar via file://)
```

---

## ✏️ Guia de Edição Rápida

### Onde editar cada coisa

| O quê | Arquivo | Onde |
|---|---|---|
| Imagens do hero | `index.html` | `#hero-bg-track` |
| Texto principal | `index.html` | `.hero-title` / `.hero-subtitle` |
| Números de destaque | `index.html` | `.h-stat` |
| Cards do carrossel | `script.js` | array `ADS` |
| Tempo entre imagens | `script.js` | `initHeroBg()` |
| Velocidade do carrossel | `style.css` | `cs-slide Xs` |
| Imagem do Sobre Nós | `index.html` | `.sobre-card img` |
| Texto do Sobre Nós | `index.html` | `.sobre-text` / `#sobre-expanded` |
| Cards de sub-área | `index.html` | `.areas-grid` |
| Redes sociais | `index.html` | `.social-links` |
| Notícias (home) | `script.js` | array `NEWS` |
| Posts completos | `blog.html` | array `POSTS` |
| Eventos do calendário | `script.js` | array `EVENTS` |
| Integrantes | `equipe.html` | array `TEAM` |
| Cores do site | `style.css` | `:root` |

---

### 📢 Adicionar card no carrossel de anúncios

Em `script.js`, array `ADS`:

```js
{ 
  tag:   "Parceiro",           // rótulo do card
  title: "Título do card",     // título principal
  desc:  "Descrição curta.",   // 1-2 linhas
  cta:   "Saiba mais",         // texto do botão
  link:  "https://..."         // URL de destino
}
```

---

### 📰 Adicionar uma notícia

**Passo 1** — Em `script.js`, array `NEWS` (aparece na home):
```js
{ id:7, tag:"Evento", title:"Título", excerpt:"Resumo curto." }
```

**Passo 2** — Em `blog.html`, array `POSTS` (post completo):
```js
{ id:7, tag:"Evento", date:"Julho 2026", title:"Título", body:"Texto completo..." }
```

> ⚠️ O `id` deve ser **idêntico** nos dois arrays para o link "Ver mais" funcionar.

---

### 📅 Adicionar evento no calendário

Em `script.js`, array `EVENTS`:

```js
{ day:15, month:8, year:2026, name:"Nome do Evento", desc:"Descrição curta." }
```

> Mês em número: 1 = Janeiro, 12 = Dezembro.

---

### 👤 Adicionar integrante

Em `equipe.html`, array `TEAM`:

```js
{
  area:     "programacao",              // veja valores aceitos abaixo
  name:     "Nome Sobrenome",
  role:     "Função na sub-área",
  photo:    "images/equipe/nome.jpg",  // "" para usar iniciais
  github:   "https://github.com/...",  // "" para ocultar
  linkedin: "https://linkedin.com/..."  // "" para ocultar
}
```

**Valores aceitos para `area`:**

| Valor | Seção |
|---|---|
| `"mecanica"` | Mecânica |
| `"programacao"` | Programação |
| `"marketing"` | Marketing |
| `"eletrica e eletronica"` | Elétrica e Eletrônica |
| `"lideranca"` | Liderança |
| `"orientacao"` | Orientação |

---

### 🎨 Mudar as cores do site

Em `style.css`, variáveis `:root`:

```css
:root {
  --red:    #C8102E;   /* cor de destaque principal */
  --bg:     #0d0d0d;   /* fundo mais escuro */
  --bg2:    #111;      /* fundo de cards */
  --bg3:    #161616;   /* fundo levemente mais claro */
  --text:   #f0efe8;   /* texto principal */
  --muted:  #888;      /* texto secundário */
}
```

---

### ⚡ Mudar velocidade do carrossel

Em `style.css`:

```css
.cs-track { animation: cs-slide 30s linear infinite; }
/*                                ^^^
   14s = rápido | 30s = moderado | 60s = lento       */
```

---

## 🖼️ Tamanhos de Imagem Recomendados

| Imagem | Dimensão | Formato |
|---|---|---|
| `logo.png` | 400×400px | PNG |
| `hero*.jpg` | 1920×1080px | JPG |
| `sobre.jpg` | 900×400px | JPG |
| `equipe/*.jpg` | 200×200px | JPG |

---

## 📄 Documentação

O manual completo de administração está disponível em `Manual_de_Administração_do_Site____SWARM79.pdf`
cobrindo todos os
fluxos de edição com exemplos de código.

---

## 🔗 Links

- 🌐 Instagram: [@equipe.swarm79](https://instagram.com/equipe.swarm79)
- 💼 LinkedIn: [swarm79](https://linkedin.com/company/swarm79)
- 💻 GitHub: [EquipeSwarm79](https://github.com/EquipeSwarm79)
- 📧 Contato: equipeswarm79@gmail.com

---

## 🛠️ Tecnologias

- HTML5 / CSS3 / JavaScript puro (sem frameworks)
- [Tabler Icons](https://tabler.io/icons) — biblioteca de ícones
- [Google Fonts](https://fonts.google.com) — Bebas Neue + DM Sans

---

<p align="center">
  © 2026 Swarm 79 · Universidade Federal de Sergipe · Todos os direitos reservados
</p>
