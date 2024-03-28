# Life Flow

Life Flow is a backend project that provides a centralized hub for managing and processing `Blood Donor and Requester` data. Follow the instructions below to run the application locally.

# Installing

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- TypeScript: Install TypeScript globally using the following command:

```bash
  npm install -g typescript
```

## Clone the repository:

```bash
  git clone https://github.com/Porgramming-Hero-web-course/l2-b2-fullstack-track-assignment-8-fahimshariar28.git
```

## Navigate to the project directory:

```bash
  l2-b2-fullstack-track-assignment-8-fahimshariar28
```

## Install the dependencies:

```bash
  npm install
```

## Configuring the Environment Variables

Create a `.env` file in the root of the project and add any necessary environment variables. You can use the provided `.env.example` file as a template.

```bash
  NODE_ENV= DEVELOPMENT
  PORT= PORT Here
  DATABASE_URL= DATABASE_URL Here
```

# Usage

## Development Mode

To run the application in development mode with automatic transpilation and server restart:

```bash
  npm run dev
```

This command uses `ts-node-dev` to watch for changes in the `src` directory, transpile TypeScript files, and restart the server.

## Production Mode

To build the project for production:

```bash
  npm run build
```

This command uses the TypeScript compiler `tsc` to transpile the TypeScript code into JavaScript. The compiled code is output to the `dist` directory.

To start the application in production mode:

```bash
  npm start
```
