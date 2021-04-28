# Microfrontend Fundamentals

This repository contains the code examples from the single-spa-worksho.com Microfrontends Fundamentals course.

The project is structured so that each folder is a microfrontend, grouped by its number with the others from the same lesson in the course. In addition to the code examples here, there is a code exercise for each lesson in the single-spa-workshop.com web app.

## Getting Started

### Prerequisites

- Install [git](https://git-scm.com/downloads)
- Install [nodejs](https://nodejs.org/)
- Install [pnpm](https://pnpm.js.org/). Using npm or yarn is also possible, but this project only has a pnpm lock file so using pnpm guarantees correct versions of every library.

### Installation

Run the following commands in an operating system terminal shell:

```sh
git clone https://github.com/single-spa-workshop/microfrontend-fundamentals.git
cd microfrontend-fundamentals
pnpm install
```

## Running the code

Each top-level folder in the project is a microfrontend that runs by itself. To run all of the folders for one lesson together, open one terminal for each folder.

To run a microfrontend:

```sh
# Replace 01-vanilla-app with the name of the folder you want to run
pnpm start -- 01-vanilla-app
```

This will output to the terminal a URL that you can open in the browser. For example:

```sh
Project is running at http://127.0.0.1:8301/
```

Once you open up that URL in the browser, open up your browser devtools and go to the Console tab.

Some examples only log things to the browser console, others display UI.

## Project Notes

This repository is not meant to be used as a starter kit for microfrontends. What it does in it's webpack configuration facilitates the lessons, but should not be mimicked at your company. Use the [single-spa CLI](https://single-spa.js.org/docs/create-single-spa) or view the [official examples](https://single-spa.js.org/docs/examples) for starting new projects.
