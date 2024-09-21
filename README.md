# Knockout TypeScript Frontend Starter

A modern frontend application starter template, leveraging TypeScript, and several popular development tools like Webpack and Babel. This project aims to provide a robust and scalable setup for building responsive and interactive user interfaces without relying on large frontend frameworks like React, Vue, or Angular.

## Table of Contents
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Building and Running](#building-and-running)
- [Why No React, Vue, or Angular?](#why-no-react-vue-or-angular)
- [License](#license)

## Getting Started

To get started with the project, clone the repository and install the dependencies using npm:

```sh
git clone knockout-typescript-frontend-starter
cd knockout-typescript-frontend-starter
npm install
```

## Scripts

The following scripts are defined in the `package.json`:

- `build:client`: Builds the client for production.
- `build:client:dev`: Builds the client for development.
- `build`: Builds the client for production.
- `build:dev`: Builds the client for development.
- `start`: Builds the project and starts a production server.
- `start:dev`: Builds the project in development mode and starts a development server with live-reloading.

You can run these scripts using `npm run <script>`.

## Dependencies

The project has the following core dependencies:

- **express**: Used for serving the client application in production.
- **knockout**: A JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model.
- **page**: A small client-side routing library that decouples the route definitions from the handlers.

## Building and Running

### Production

To build and start the project in production mode:

```sh
npm start
```

### Development

To build and start the project in development mode with live-reloading:

```sh
npm run start:dev
```

## Why No React, Vue, or Angular?

While React, Vue, and Angular are excellent frameworks for building modern web applications, there are various reasons you might choose to build a frontend application without them:

1. **Performance**: Without the overhead of these frameworks, lightweight libraries and vanilla JavaScript can lead to better performance for certain types of applications.

2. **Learning Curve**: Simplifying the tech stack can be advantageous for developers who are not familiar with these frameworks. Using TypeScript and smaller libraries can be easier to learn and understand.

3. **Flexibility**: By not being tied to a specific framework, developers can choose specialized tools and libraries that best fit their project's requirements.

4. **Bundle Size**: Reducing the number of dependencies can result in a smaller bundle size, which can improve load times and performance, especially for mobile users.

5. **Control**: Using smaller libraries or custom JavaScript allows for more granular control over the application's architecture and behavior, avoiding the "magic" that often comes with larger frameworks.

6. **Legacy Code Integration**: For projects that need to integrate with older codebases or existing applications, it might be easier to use plain JavaScript or simpler libraries rather than adopting a full-fledged framework.

By focusing on TypeScript and carefully chosen smaller libraries like Knockout and Page.js, this starter template aims to give developers a solid foundation to build modern, scalable, and performant web applications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.