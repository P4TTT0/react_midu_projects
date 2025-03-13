# Crear punto de entrada desde cero.
## 1) Crear el proyecto: npm create vite@latest
## 2) Seleccionar vanilla
## 3) Instalar typescript: npm install -D typescript
## 5) Instalar los tipos: npm install -D @types/react @types/react-dom
## 6) Instalar react: npm install -D @vitejs/plugin-react react react-dom
## 7) Crear archivo vite.config.ts y configurarle:
`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
})`
## 8) Incluir el archivo vite.config.ts en el archivo tsconfig.json:
`"include": ["vite.config.ts"]`
## 9) Instalar eslinter: npm install -D ts-standard
## 10) Configurar eslinter en package.json:
`"scripts": {
    "lint:fix": "ts-standard --fix"
  }`