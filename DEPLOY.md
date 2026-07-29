# Guia rápido de deploy

## GitHub Pages (recomendado)
```bash
git init && git add . && git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/Andremluna/portfolio.git
git push -u origin main
```
Settings → Pages → Deploy from a branch → `main` / `(root)`.
URL: https://andremluna.github.io/portfolio/

Raiz do usuário: nomeie o repo como `andremluna.github.io`.

## Checklist antes de subir
- [ ] Trocar a foto do hero por uma local em `assets/` (a atual é URL do LinkedIn com token que expira)
- [ ] Conferir que `_private/` não será commitado (já no .gitignore)
- [ ] Testar em http://localhost:8000 antes do push
