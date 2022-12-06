# 1. Getting Started

[https://lit.dev/](https://lit.dev/)

```bash
npm init -y
```

```json
{
  "name": "first-lit-html",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "engines": {
    "node": "19.2.0"

  }
}
```

```bash
npm i lit
```

[Getting Started - Lit](https://lit.dev/docs/getting-started/#install-locally-from-npm)

what is caret symbol in `package.json`

**[What's the difference between tilde(~) and caret(^) in package.json?](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)**

![Untitled](1%20Getting%20Started%201f054cc867124864a31a551d433bb9be/Untitled.png)

![Untitled](1%20Getting%20Started%201f054cc867124864a31a551d433bb9be/Untitled%201.png)

```json
{
  "name": "first-lit-html",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "engines": {
    "node": "^19.2.0"
  },
  "dependencies": {
    "lit": "^2.4.1"
  }
}
```