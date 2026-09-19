# Deployment Documentation for EWCG Church Management Application

## Overview

This document provides instructions for deploying the EWCG Church Management application. The application is designed to be deployed using Docker for ease of setup and scalability.

## Prerequisites

Before deploying the application, ensure you have the following installed:

- Docker
- Docker Compose

## Deployment Steps

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/ewcg-church-management.git
   cd ewcg-church-management
   ```

2. **Set Up Environment Variables**

   Copy the example environment variables file and update it with your configuration:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file to include your database connection strings, API keys, and other necessary configurations.

3. **Build the Docker Images**

   Use Docker Compose to build the images for both the client and server:

   ```bash
   docker-compose build
   ```

4. **Run the Application**

   Start the application using Docker Compose:

   ```bash
   docker-compose up
   ```

   This command will start all the services defined in the `docker-compose.yml` file.

5. **Access the Application**

   Once the application is running, you can access it in your web browser:

   - Client: `http://localhost:3000`
   - Server API: `http://localhost:5000/api`

6. **Database Initialization**

   If you need to initialize the database with seed data, you can run the following command:

   ```bash
   docker-compose exec server npm run seed
   ```

   This command will execute the seed script defined in your server's package.json.

## Stopping the Application

To stop the application, use the following command:

```bash
docker-compose down
```

This command will stop and remove all containers defined in the `docker-compose.yml` file.

## Troubleshooting

- Ensure that Docker is running on your machine.
- Check the logs for any errors using:

  ```bash
  docker-compose logs
  ```

- Verify that your environment variables are correctly set in the `.env` file.

## Conclusion

Following these steps will help you successfully deploy the EWCG Church Management application. For further customization and configuration, refer to the respective service documentation.