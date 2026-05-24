# PIQUI

Landing page responsiva para validar o projeto piloto da PIQUI: pequenos lanches naturais, porcionados e prontos para grandes dias na escola.

## Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite mostrará a URL local no terminal, normalmente `http://localhost:5173`.

## Build

Gere a versão de produção:

```bash
npm run build
```

O resultado será criado na pasta `dist/`.

Para conferir o build localmente:

```bash
npm run preview
```

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Na Vercel, clique em `Add New Project`.
3. Importe o repositório do GitHub.
4. Confirme as configurações:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em `Deploy`.

O arquivo `vercel.json` já deixa o projeto pronto para esse fluxo.

## Observações

- Os links de WhatsApp usam placeholder e podem ser trocados no valor `whatsappUrl` em `src/App.jsx`.
- O formulário simula envio no frontend, sem backend.
- Antes de publicar, revise os textos e contatos finais da marca.
