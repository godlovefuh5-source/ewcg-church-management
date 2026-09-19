# Architecture Overview

## Introduction
The EWCG Church Management and Ministry Web Application is designed to provide a comprehensive solution for managing church activities, including sermons, events, ministries, donations, and more. This document outlines the architecture of the application, detailing the technologies used, the structure of the application, and the interactions between different components.

## Technology Stack
- **Frontend:**
  - React
  - TypeScript
  - Vite
  - React Router
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - TypeScript
  - PostgreSQL
  - Prisma ORM

- **Authentication:**
  - JWT-based authentication
  - HTTP-only cookies
  - Password hashing with bcrypt/argon2
  - Role-based access control

- **File Storage:**
  - External object/file storage for media files (images, videos, audio, PDFs)

## Application Structure
The application is divided into two main parts: the client and the server.

### Client Structure
- **src/app:** Main application setup, including routing and context providers.
- **src/components:** Reusable UI components organized by functionality (common, layout, forms, etc.).
- **src/features:** Feature-specific components and pages (home, about, services, sermons, events, etc.).
- **src/hooks:** Custom hooks for managing state and side effects.
- **src/services:** API service files for interacting with the backend.
- **src/utils:** Utility functions for formatting, validation, and constants.

### Server Structure
- **src/app.ts:** Initializes the Express application and sets up middleware.
- **src/server.ts:** Starts the Express server.
- **src/config:** Configuration files for environment variables, CORS, and logging.
- **src/middleware:** Middleware functions for authentication, error handling, and validation.
- **src/routes:** Route definitions for various resources (auth, sermons, events, etc.).
- **src/controllers:** Handles requests and responses for different resources.
- **src/services:** Business logic related to various functionalities.
- **src/repositories:** Database interaction logic for different resources.
- **src/validators:** Validation logic for incoming requests.

## Database Design
The application uses PostgreSQL with Prisma ORM for database management. The database schema is designed to be normalized, with entities such as User, Role, Sermon, Event, Ministry, and Donation. Each entity has appropriate relationships and constraints to ensure data integrity.

## API Architecture
The backend exposes a RESTful API with endpoints for managing resources. Each endpoint follows standard HTTP methods (GET, POST, PUT/PATCH, DELETE) and returns consistent responses, including success and error messages.

## Security Considerations
Security is a top priority in the application. Key measures include:
- Password hashing and secure storage of sensitive information.
- JWT authentication and role-based access control.
- Input validation and protection against common vulnerabilities (SQL injection, XSS, CSRF).
- Proper error handling and logging practices.

## Conclusion
The architecture of the EWCG Church Management and Ministry Web Application is designed to be modern, scalable, and secure. By leveraging a robust technology stack and following best practices in software development, the application aims to provide a seamless experience for church administrators and members alike.