# André Manoel — Portfólio

Site de portfólio de André Manoel (UX/UI Designer × Design Engineer).
HTML/CSS/JS puro, sem build. CSS modularizado por camada e JS por responsabilidade.

## Estrutura

```
.
├── index.html            # página principal
├── unitech.html          # case study UniTech
├── contagotas.html       # case study ContaGotas
├── css/
│   ├── main.css          # entry point (@import na ordem da cascata)
│   ├── tokens.css        # design tokens
│   ├── base.css          # reset, foco, prefers-reduced-motion
│   ├── layout.css        # wrap, section, marquee, reveal
│   └── components/       # 1 arquivo por seção
├── js/
│   ├── i18n.js           # dicionário PT/EN + troca de idioma
│   ├── cursor.js         # cursor custom (ativação segura)
│   ├── reveal.js         # reveal on scroll + contadores
│   └── process.js        # stepper sticky do processo
├── assets/               # imagens, CV, etc.
├── robots.txt
└── .nojekyll             # GitHub Pages: não processar via Jekyll
```

## Rodar localmente

Como usa `@import` e `fetch` de fontes, sirva por HTTP (abrir via `file://` pode bloquear):

```bash
# Python
python3 -m http.server 8000
# ou Node
npx serve .
```

Acesse http://localhost:8000

## Deploy — GitHub Pages

1. Crie um repositório no GitHub (ex.: `portfolio`).
2. Suba o conteúdo desta pasta:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/Andremluna/portfolio.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. Em ~1 min o site fica em `https://andremluna.github.io/portfolio/`.

Os caminhos são relativos, então funciona tanto em subpasta (`/portfolio/`) quanto na raiz.
Para publicar na raiz (`https://andremluna.github.io/`), nomeie o repositório como `andremluna.github.io`.

### Domínio próprio (opcional)
Crie um arquivo `CNAME` na raiz com o domínio (ex.: `andremanoel.com`) e configure o DNS conforme a doc do GitHub Pages.

## Deploy — Netlify / Vercel (alternativas)

- **Netlify:** arraste a pasta em app.netlify.com/drop, ou conecte o repo (build command vazio, publish dir `.`).
- **Vercel:** `vercel` na raiz, ou importe o repo (framework: Other, output `.`).

Nada muda no código — é estático.

## Notas
- `_private/` (backup, proposta, artefatos de perfil) está no `.gitignore` e **não** é publicado.
- Avatar do hero e previews dos projetos usam URLs externas; para robustez, hospede a foto em `assets/` e ajuste o `src` no `index.html`.
