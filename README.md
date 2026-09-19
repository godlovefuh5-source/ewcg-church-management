# EWCG Church Management System

Welcome to the Enlighten Word Christian Gathering Ministries (EWCG) Church Management System. This application is designed to help manage church activities, including services, sermons, events, ministries, donations, and more. 

## Features

- **User Authentication**: Secure login and role-based access control for administrators.
- **Sermon Management**: Upload and manage sermons in various formats (video, audio, PDF).
- **Event Management**: Create and manage church events with registration options.
- **Ministry Management**: Overview and details of various church ministries.
- **Donation System**: Secure online giving options with multiple categories.
- **Contact and Prayer Request Forms**: Allow users to reach out and submit prayer requests.
- **Live Streaming**: Integration for live streaming services.
- **Admin Dashboard**: Comprehensive dashboard for managing all aspects of the church.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ewcg-church-management.git
   cd ewcg-church-management
   ```

2. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

3. Install server dependencies:
   ```
   cd server
   npm install
   ```

4. Install client dependencies:
   ```
   cd client
   npm install
   ```

5. Run the database migrations:
   ```
   cd server
   npx prisma migrate dev
   ```

6. Start the server:
   ```
   npm run dev
   ```

7. Start the client:
   ```
   cd client
   npm run dev
   ```

### Docker Deployment

To run the application using Docker, you can use the provided `docker-compose.yml` file. 

1. Build and run the containers:
   ```
   docker-compose up --build
   ```

## Usage

- Access the application at `http://localhost:3000` for the client-side.
- Access the admin dashboard at `http://localhost:3000/admin/login`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the EWCG community for their support and feedback during the development of this application.