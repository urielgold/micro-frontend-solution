###################################
# Microfrontend Project

This repository contains a main application and four microfrontend applications that can be run independently. Each microfrontend can be started using 'npm run start'. Additionally, each microfrontend has a sandbox environment that can be launched using 'npm run sandbox'.

## Main Application (main)

The main application is the core of the project and integrates the microfrontends into a single application. To start the main application in development mode, use:

```bash
npm run dev
```

This will run the main application and load the microfrontends to form a cohesive user interface.

## Microfrontends

The project includes the following microfrontend applications:

### Grid Microfrontend (grid)

The grid microfrontend is responsible for displaying data in a grid layout.

Before running the microfrontend, navigate to the 'grid' directory and install the required dependencies using:

```bash
cd grid
npm install
```


To start the grid microfrontend in development mode, use:

```bash
npm run start
```
To launch the sandbox environment for the grid microfrontend, use:

```bash
npm run sandbox
```

### Text Microfrontend (text)

The text microfrontend handles the rendering of text content.

Before running the microfrontend, navigate to the 'text' directory and install the required dependencies using:

```bash
cd text
npm install
```


To start the text microfrontend in development mode, use:

```bash
npm run start
```
To launch the sandbox environment for the text microfrontend, use:

```bash
npm run sandbox
```
### Pic Microfrontend (pic)

The pic microfrontend deals with displaying images.

Before running the microfrontend, navigate to the 'pic' directory and install the required dependencies using:

```bash
cd pic
npm install
```


To start the pic microfrontend in development mode, use:

```bash
npm run start
```

To launch the sandbox environment for the pic microfrontend, use:

```bash
npm run sandbox
```

### List Microfrontend (list)

The list microfrontend handles displaying data in a list format.

Before running the microfrontend, navigate to the 'list' directory and install the required dependencies using:

```bash
cd list
npm install
```


To start the list microfrontend in development mode, use:

```bash
npm run start
```

To launch the sandbox environment for the list microfrontend, use:

```bash
npm run sandbox
```
## Technology Stack

- Webpack - All the micro frontend applications in this project are vanilla JavaScript (VanillaJS) applications bundled using Webpack.


- Vite VanillaJS - only for the main application.
