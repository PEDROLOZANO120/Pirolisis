# Pirólisis de Residuos Plásticos (Servidor dinámico)

Este repositorio sirve el recurso de pirólisis con un servidor Node.js para que deje de ser un HTML estático. El contenido se renderiza desde una plantilla y se agrega un dato dinámico (fecha/hora de generación).

## Requisitos

- Node.js 18+ (o versión compatible con `express`/`ejs`)

## Uso rápido

```bash
make install
make start
```

Luego abre: <http://localhost:3000>

## Desarrollo manual

```bash
npm install
npm start
```

## Estructura

- `server.js`: servidor Express.
- `views/index.ejs`: plantilla principal con el recurso.
- `public/`: archivos estáticos opcionales.
