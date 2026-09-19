# API Documentation

## Overview

This document provides an overview of the API endpoints available in the EWCG Church Management and Ministry Web Application. The API follows RESTful principles and is designed to facilitate communication between the client and server.

## Base URL

The base URL for all API endpoints is:

```
http://<your-server-address>/api
```

## Authentication

All endpoints require authentication via JWT. The token should be included in the `Authorization` header as follows:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

- **POST** `/auth/login`
  - Description: Authenticate a user and return a JWT.
  - Request Body: 
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **POST** `/auth/logout`
  - Description: Log out the user and invalidate the JWT.

- **GET** `/auth/me`
  - Description: Retrieve the currently authenticated user's information.

### Sermons

- **GET** `/sermons`
  - Description: Retrieve a list of sermons.
  
- **GET** `/sermons/:id`
  - Description: Retrieve a specific sermon by ID.

- **POST** `/sermons`
  - Description: Create a new sermon.
  - Request Body:
    ```json
    {
      "title": "Sermon Title",
      "speaker": "Speaker Name",
      "description": "Sermon description",
      "date": "2026-09-03",
      "bibleVerse": "John 3:16",
      "category": "Category Name",
      "thumbnail": "url_to_thumbnail",
      "videoUrl": "url_to_video",
      "audioUrl": "url_to_audio",
      "pdfUrl": "url_to_pdf",
      "duration": "30:00"
    }
    ```

- **PUT** `/sermons/:id`
  - Description: Update an existing sermon by ID.

- **DELETE** `/sermons/:id`
  - Description: Delete a sermon by ID.

### Events

- **GET** `/events`
  - Description: Retrieve a list of events.

- **GET** `/events/:id`
  - Description: Retrieve a specific event by ID.

- **POST** `/events`
  - Description: Create a new event.

- **PUT** `/events/:id`
  - Description: Update an existing event by ID.

- **DELETE** `/events/:id`
  - Description: Delete an event by ID.

### Services

- **GET** `/services`
  - Description: Retrieve a list of church services.

- **GET** `/services/:id`
  - Description: Retrieve a specific service by ID.

- **POST** `/services`
  - Description: Create a new service.

- **PUT** `/services/:id`
  - Description: Update an existing service by ID.

- **DELETE** `/services/:id`
  - Description: Delete a service by ID.

### Ministries

- **GET** `/ministries`
  - Description: Retrieve a list of ministries.

- **GET** `/ministries/:id`
  - Description: Retrieve a specific ministry by ID.

- **POST** `/ministries`
  - Description: Create a new ministry.

- **PUT** `/ministries/:id`
  - Description: Update an existing ministry by ID.

- **DELETE** `/ministries/:id`
  - Description: Delete a ministry by ID.

### Donations

- **GET** `/donations`
  - Description: Retrieve a list of donations.

- **POST** `/donations`
  - Description: Create a new donation.

- **GET** `/donations/:id`
  - Description: Retrieve a specific donation by ID.

### Prayer Requests

- **GET** `/prayer-requests`
  - Description: Retrieve a list of prayer requests.

- **POST** `/prayer-requests`
  - Description: Submit a new prayer request.

### Contact

- **POST** `/contact`
  - Description: Submit a contact message.

### Live Stream

- **GET** `/live-stream`
  - Description: Retrieve live stream configuration.

### Gallery

- **GET** `/gallery`
  - Description: Retrieve a list of gallery images.

- **POST** `/gallery`
  - Description: Upload a new image to the gallery.

## Response Format

All responses will be in JSON format and will follow this structure:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

In case of an error, the response will look like this:

```json
{
  "success": false,
  "message": "Error message",
  "errors": []
}
```

## Error Handling

The API will return appropriate HTTP status codes for different outcomes:

- **200 OK**: Successful request.
- **201 Created**: Resource successfully created.
- **204 No Content**: Successful request with no content to return.
- **400 Bad Request**: Invalid request parameters.
- **401 Unauthorized**: Authentication failed.
- **403 Forbidden**: Access denied.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: An error occurred on the server.

## Conclusion

This API documentation provides a comprehensive overview of the available endpoints for the EWCG Church Management and Ministry Web Application. For further details, please refer to the specific endpoint documentation or contact the development team.