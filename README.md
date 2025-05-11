# Vanilla JS Calculator

Una calculadora básica desarrollada con **JavaScript puro**, HTML y CSS, para repasar fundamentos sin frameworks.

## 📂 Estructura

## 📂 Estructura

- **assets/**
  - `screenshotDesktop.png`
  - `screenshotMobile.png`
- **src/**
  - **utils/**
    - `script.js`
    - `helpers.js`
- `index.html`
- `styles.css`
- `README.md`

<details>
  <summary>📂 Estructura</summary>

- **assets/**
  - `screenshotDesktop.png`
  - `screenshotMobile.png`
- **src/**
  - **utils/**
    - `script.js`
    - `helpers.js`
- `index.html`
- `styles.css`
- `README.md`

</details>

flowchart TB
subgraph assets
A[screenshotDesktop.png]
B[screenshotMobile.png]
end

subgraph src
subgraph utils
C[script.js]
D[helpers.js]
end
end

E[index.html]
F[styles.css]
G[README.md]

assets --> src --> E
src --> F
src --> G

Puedes ver la estructura completa en la vista de repositorio:

👉 [Ver carpeta `src/utils/` en GitHub](https://github.com/saulvg/vanilla-js-calculator/tree/main/src/utils)

- `index.html` - interfaz de usuario.
- `style.css` - estilos con BEM-lite.
- `src/utils/script.js` - lógica de la calculadora en módulo ES
- `src/utils/helpers.js` – funciones auxiliares
- `assets/` – capturas de pantalla (PNG)

## ⚙️ Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+)

## 🚀 Uso local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/saulvg/vanilla-js-calculator.git
   ```

## 📱 / 🖥️ Capturas

### 🖥️ Vista Desktop

<p align="center"> <img src="assets/screenshotDesktop.png" alt="Calculadora en vista desktop" width="300px" /> </p>

### 📱 Vista Móvil

<p align="center"> <img src="assets/screenshotMobile.png" alt="Calculadora en vista móvil" width="250px" /> </p>
