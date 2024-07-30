
# CRUD Operations Backend

This is the backend API for managing CRUD operations on a list of fruits. The backend is built using Node.js and Express, and uses Appwrite for database management. The API supports creating, reading, updating, and deleting fruit data.

## Features

- **Create**: Add a new fruit to the database.
- **Read**: Retrieve a list of all fruits or a specific fruit by ID.
- **Update**: Modify the details of an existing fruit.
- **Delete**: Remove a fruit from the database.

## Setup

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn
- Appwrite account and project setup

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   APPWRITE_ENDPOINT=<your_appwrite_endpoint>
   APPWRITE_PROJECT=<your_appwrite_project_id>
   APPWRITE_APIKEY=<your_appwrite_api_key>
   APPWRITE_DATABASE_ID=<your_database_id>
   APPWRITE_COLLECTION_ID=<your_collection_id>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The API should now be running on [http://localhost:3000](http://localhost:3000).

### API Endpoints

- **Create**: `POST /create`
  - Request Body: `{ "fruitName": "string", "prize": number }`
- **Read**:
  - All fruits: `GET /read`
  - Specific fruit: `GET /read/:id`
- **Update**: `PUT /update/:id`
  - Request Body: `{ "fruitName": "string", "prize": number }`
- **Delete**: `DELETE /delete/:id`

## Project Structure

```
/src
  ├── /routes
  ├── app.js
  ├── server.js
  ├── ...
/.env
README.md
```

- **/src**: Contains the source code and route handlers for the API.
- **/routes**: Defines the API routes.
- **app.js**: Initializes the Express application.
- **server.js**: Starts the server.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## Acknowledgments

- Thanks to the developers of Node.js, Express, and Appwrite.
