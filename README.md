# Flores Nexus Website

Official website project for Flores Nexus Group.

This site is built with Astro and TailwindCSS. The goal of this project is to present Flores Nexus services in a clear, modern, mobile-first format.

## Purpose

The website is designed to function as a sales-focused catalog for digital services, including website packages, service descriptions, pricing, client intake forms, and internal sales support pages.

## Main Features

* Mobile-first landing page
* English and Spanish structure
* Service package presentation
* Pricing section
* Start Your Website form
* Representative Code field
* Stripe payment flow preparation
* FAQ section
* Legal-safe sales copy
* Internal Seller Hub structure

## Tech Stack

* Astro
* TailwindCSS
* TypeScript
* JavaScript
* CSS

## Project Structure

```
/
├── public/
│   ├── images/
│   ├── logos/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── blocks/
│   │   ├── cards/
│   │   ├── elements/
│   │   ├── sections/
│   │   └── shared/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── package.json
└── README.md
```

## Development Commands

All commands should be run from the root of the project.

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs project dependencies                |
| `npm run dev`     | Starts the local development server          |
| `npm run build`   | Builds the production version into `./dist/` |
| `npm run preview` | Previews the production build locally        |

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:4321/
```

## Production Build

To create the production version:

```bash
npm run build
```

The final static files will be generated inside:

```text
dist/
```

## Project Status

This project is under active customization for Flores Nexus Group.
