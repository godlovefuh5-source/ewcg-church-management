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
- **src/app:** Contains the main application component and routing setup.
- **src/components:** Contains reusable components categorized by functionality (common, layout, sermons, events, ministries, leadership, forms).
- **src/features:** Contains feature-specific components for different sections of the application (home, about, services, sermons, events, ministries, give, contact, live, prayer, gallery, admin).
- **src/hooks:** Contains custom hooks for managing state and side effects.
- **src/services:** Contains service files for API interactions.
- **src/context:** Contains context files for global state management.
- **src/styles:** Contains global CSS files for styling.

### Server Structure
- **src/app.ts:** Initializes the Express application and sets up middleware.
- **src/server.ts:** Starts the Express server.
- **src/config:** Contains configuration files for environment variables, application settings, CORS, and logging.
- **src/middleware:** Contains middleware functions for authentication, authorization, error handling, and validation.
- **src/routes:** Contains route definitions for various resources.
- **src/controllers:** Handles requests and responses for various resources.
- **src/services:** Contains business logic related to different functionalities.
- **src/repositories:** Manages database interactions.
- **src/validators:** Validates incoming requests.
- **src/utils:** Contains utility functions for various purposes.

## Database Design
The application uses PostgreSQL as the database, with a normalized schema designed using Prisma. Key entities include:
- User
- Role
- Sermon
- Event
- Ministry
- Donation
- PrayerRequest
- ContactMessage

## API Architecture
The application follows a RESTful API architecture, with endpoints structured to handle CRUD operations for various resources. Each endpoint is protected with appropriate authentication and authorization mechanisms.

## Security Considerations
Security is a top priority in the application. Key measures include:
- Password hashing
- JWT authentication
- Role-based access control
- Input validation
- Protection against SQL injection and XSS attacks

## Conclusion
The architecture of the EWCG Church Management and Ministry Web Application is designed to be modern, scalable, and secure, providing a robust platform for managing church activities effectively. The separation of concerns between the client and server ensures maintainability and ease of development.