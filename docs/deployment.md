# Deployment Documentation for EWCG Church Management Application

## Overview

This document outlines the steps required to deploy the EWCG Church Management application. The application is structured as a full-stack web application with a React frontend and a Node.js backend, utilizing PostgreSQL for the database.

## Prerequisites

Before deploying the application, ensure you have the following installed:

- Docker and Docker Compose
- Node.js (for local development)
- PostgreSQL (for local development)
- Git (for version control)

## Deployment Steps

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/ewcg-church-management.git
cd ewcg-church-management
```

### 2. Set Up Environment Variables

Copy the example environment variables file and update it with your configuration:

```bash
cp .env.example .env
```

Edit the `.env` file to include your database connection string, JWT secret, and any other necessary environment variables.

### 3. Build the Docker Images

Navigate to the root of the project and build the Docker images using Docker Compose:

```bash
docker-compose build
```

### 4. Start the Application

Start the application using Docker Compose:

```bash
docker-compose up
```

This command will start both the frontend and backend services, along with the PostgreSQL database.

### 5. Access the Application

Once the application is running, you can access it in your web browser at:

```
http://localhost:3000
```

### 6. Database Migration

If you are using Prisma for database management, run the following command to apply migrations:

```bash
docker-compose exec server npm run migrate
```

### 7. Seed the Database (Optional)

To populate the database with initial data, you can run the seed script:

```bash
docker-compose exec server npm run seed
```

### 8. Stopping the Application

To stop the application, use the following command:

```bash
docker-compose down
```

## Additional Notes

- Ensure that your PostgreSQL service is properly configured in the `docker-compose.yml` file.
- For production deployments, consider using a cloud provider or a dedicated server.
- Monitor application logs for any issues during deployment using:

```bash
docker-compose logs
```

## Conclusion

Following these steps will help you successfully deploy the EWCG Church Management application. For further customization and configuration, refer to the respective documentation for Docker, Node.js, and PostgreSQL.