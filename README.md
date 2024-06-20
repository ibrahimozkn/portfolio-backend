
# Portfolio Backend using PERN + Prisma ORM

This is the backend service for a portfolio website, built with the PERN stack (PostgreSQL, Express.js, React, Node.js) and Prisma ORM.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- CRUD operations for portfolio projects
- Integration with PostgreSQL using Prisma ORM
- RESTful API architecture

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/ibrahimozkn/portfolio-backend.git
cd portfolio-backend
\`\`\`

2. Install the dependencies:

\`\`\`bash
npm install
\`\`\`

or

\`\`\`bash
yarn install
\`\`\`

### Database Setup

1. Create a \`.env\` file in the root of the project and add your database connection string:

\`\`\`env
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=public"
\`\`\`

2. Migrate the database schema:

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

### Running the Application

1. Start the development server:

\`\`\`bash
npm run dev
\`\`\`

or

\`\`\`bash
yarn dev
\`\`\`

2. The server should now be running on \`http://localhost:3000\`.

## Database Schema

The database schema for this project is shown below:

![Database Schema](https://i.ibb.co/7JJpdPf/diagram.png)

## Project Structure

\`\`\`bash
.
├── controllers       # Contains the request handlers for the API
├── helpers           # Utility functions and middlewares
├── prisma            # Prisma schema and migration files
├── routes            # API routes
├── services          # Business logic for different features
├── index.ts          # Entry point of the application
├── package.json      # Project metadata and dependencies
├── tsconfig.json     # TypeScript configuration
└── .gitignore        # Files and directories to be ignored by git
\`\`\`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
