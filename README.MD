# Webpack Single SPA

This repository contains a micro-frontend architecture implementation using Webpack and React.js. It includes five separate applications: Header, Login, Signup, Dashboard, and Store, all managed within a single repository.

## Project Structure

The project is structured into multiple packages, each representing a different part of the application:

webpack-single-spa
├── packages
│ ├── app
│ ├── dashboard
│ ├── header
│ ├── login
│ ├── signup
│ └── store
├── .gitignore
└── package.json

### Main `package.json`

```json
{
  "private": true,
  "name": "web-app",
  "workspaces": ["packages/*"],
  "scripts": {
    "build": "yarn workspaces run build",
    "serve": "wsrun --parallel serve",
    "start": "concurrently \\"wsrun --parallel start\\" \\"wsrun --parallel serve\\""
  },
  "devDependencies": {
    "concurrently": "^5.1.0",
    "wsrun": "^5.2.0"
  }
}
```

### Getting Started

To get started with this repository, follow the steps below:

### Prerequisites

1. Ensure you have the following installed on your machine:

- Node.js
- Yarn
- Installation
- Clone the repository:

```
git clone https://github.com/yourusername/webpack-single-spa.git
cd webpack-single-spa
```

2. Install dependencies:

`yarn install`

3. Running the Applications
   To build and serve the applications, use the following commands:

- Build all applications:
  `yarn build`
- Serve the applications:

`yarn serve`
Start the development server:

`yarn start`

### Micro-Frontend Architecture

- This repository leverages the micro-frontend architecture to manage different parts of a web application as separate, independently deployable units. Each package within the packages directory represents a standalone application that can be developed, tested, and deployed independently.

- Contributing
  Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.
