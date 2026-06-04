# QueAI Landing Page

Source code for [queai.dev](https://queai.dev) — the public site of the QueAI ecosystem.

<p align="center">
  <img src="logo.png" alt="QueAI logo" width="200">
</p>

## Sobre QueAI

QueAI es un **orquestador modular de IA**. Cada capacidad (chat, OCR, STT, TTS, RAG, …) es un contenedor Docker independiente con su propia UI y API REST. Un módulo puede ejecutar un modelo localmente en CPU, hacer de *thin proxy* a una API pública (OpenAI, Anthropic, ElevenLabs), o encadenar pasos en un pipeline. El kernel orquesta — local, cloud o híbrido.

Más información, código y documentación en [`queai-project/QueAI`](https://github.com/queai-project/QueAI).

## Este repositorio

- `index.html`, `style.css`, `app.js` — la landing pública.
- `install.sh` — copia espejo del instalador del kernel, servida en `https://queai.dev/install.sh`. Se mantiene sincronizada con el repo principal por un workflow.
- Assets visuales (logo, favicon, mascota Kyubit).

## Contribuir a la landing

1. Issues de la web: [Issues](https://github.com/queai-project/queai-project.github.io/issues).
2. Fork + Pull Request — los cambios al copy deben respetar el [positioning oficial](https://github.com/queai-project/QueAI/blob/main/docs/PRODUCTVISION.md).

## Licencia

MIT.
