# Vue 3 Training - Vue Shop

A simple Vue.js shopping web application practice.

## Language and Tools

<div align="center">
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  </a>
  <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> 
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> 
  </a>
  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> 
  </a>
</div>

## Features
- [X] Infinite scroll
- [X] Firebase Authentication
- [X] Dockerized
- [X] Unit Testing(with [Vitest](https://vitest.dev/))
- [ ] E2E Testing(with [cypress](https://www.cypress.io/))
- [ ] CI/CD(with [GitHub Actions])
- [ ] GraphQL

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Chia1104/vue-ts-firebase-example)

## Get Started

Generate the .env file, and add your Firebase credentials.

```bash
$ cp .env.example .env
```

Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.

```bash
$ yarn
$ yarn dev
```

Testing the app.

```bash
$ yarn test:vitest # <-- test with vitest
```

Build the Docker image.

Open http://localhost:8080 to view it in your browser.

```bash
$ docker build -t app:v1 .
$ docker run -p 8080:8080 app:v1
```
