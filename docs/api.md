# API Documentation for EWCG Church Management Application

## Overview

This document provides an overview of the API endpoints available in the EWCG Church Management application. The API follows RESTful principles and is designed to facilitate interactions between the client-side application and the server.

## Base URL

The base URL for all API endpoints is:

```
http://<your-server-url>/api
```

## Authentication

All endpoints require authentication via JWT tokens. Tokens must be included in the `Authorization` header as follows:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

- **POST** `/auth/login`
  - Description: Authenticate a user and return a JWT token.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **POST** `/auth/logout`
  - Description: Log out the user and invalidate the JWT token.

- **GET** `/auth/me`
  - Description: Retrieve the current authenticated user's information.

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

- **GET** `/donations/:id`
  - Description: Retrieve a specific donation by ID.

- **POST** `/donations`
  - Description: Create a new donation.

- **PUT** `/donations/:id`
  - Description: Update an existing donation by ID.

- **DELETE** `/donations/:id`
  - Description: Delete a donation by ID.

### Prayer Requests

- **GET** `/prayer-requests`
  - Description: Retrieve a list of prayer requests.

- **POST** `/prayer-requests`
  - Description: Submit a new prayer request.

### Contact Messages

- **GET** `/contact`
  - Description: Retrieve a list of contact messages.

- **POST** `/contact`
  - Description: Submit a new contact message.

### Live Stream

- **GET** `/live-stream`
  - Description: Retrieve live stream configuration.

- **PUT** `/live-stream`
  - Description: Update live stream configuration.

## Error Handling

All API responses will include a `success` field indicating the status of the request, along with a `message` field for additional context. In case of errors, an `errors` array may also be included.

Example Error Response:
```json
{
  "success": false,
  "message": "Unable to create sermon",
  "errors": []
}
```

## Conclusion

This API documentation provides a comprehensive overview of the available endpoints for the EWCG Church Management application. For further details on specific endpoints, please refer to the individual endpoint descriptions above.