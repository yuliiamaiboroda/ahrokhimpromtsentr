# Ahrokhimpromtsentr

This is a website built using Next.js, a React framework that enables
server-side rendering, automatic code splitting, and other advanced features to
help you build modern web applications.

## Tech

- [Next.js](https://nextjs.org/) - The React framework used
- [React](https://reactjs.org/) - JavaScript library for building user
  interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for
  rapidly building custom designs
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that
  adds static types to the language

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

## Prerequisites

- Node.js and npm installed on your machine.

## Installing

- Clone the repository:

```sh
gh repo clone yuliiamaiboroda/ahrokhimpromtsentr
```

- Change into the project directory:

```sh
cd ahrokhimpromtsentr
```

- Install dependencies:

```sh
npm install
```

- Start the development server:

```sh
npm run dev
```

- Open your browser and visit `http://localhost:3000` to see the website.

## Configuration with Environment Variables

To configure your application, create a .env file in the root directory and
populate it with the following environment variables:

### Google API Key

- **NEXT_APP_GOOGLE_API_KEY:** Your Google API key for Maps JavaScript API .

### Base URL

- **NEXT_PUBLIC_BASE_URL:** The base URL used for dynamic data requests in your
  application.

Ensure these variables are properly set in your .env file to enable secure and
seamless functionality within your application.

## Other commands

**Start the server in production mode.**

```sh
npm run build
npm start
```

**Start the server in development mode.**

```sh
npm run dev
```

**Run eslint code checks. This should be done before each PR, and all linting
errors must be fixed.**

```sh
npm run lint
```

**Similar to linting check, but automatically fixes simple errors.**

## License

MIT
