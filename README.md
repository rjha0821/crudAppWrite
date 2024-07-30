
# Fruit Management System

This project is a complete CRUD (Create, Read, Update, Delete) application for managing a list of fruits. It consists of a frontend application built with React and a backend API developed using Node.js, Express, and Appwrite for database management.

## Project Overview

The project allows users to:

1. **View all fruits**: Displays a list of all fruits with their names and prices.
2. **Add a new fruit**: Users can add new fruits to the list by providing a name and price.
3. **Update an existing fruit**: Users can modify the details of an existing fruit.
4. **Delete a fruit**: Users can remove a fruit from the list.
5. **Filter fruits by price**: Users can filter the list of fruits based on price conditions (greater than, less than, equal to).

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the backend API.
- **CSS**: For styling the components.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Appwrite**: Backend server for managing the database and authentication.

## Setup and Installation

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn
- Appwrite account and project setup

### Frontend Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the frontend server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The frontend application should now be running on [http://localhost:4000](http://localhost:4000).

### Backend Installation

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root of the backend directory and add the following environment variables:

   ```
   APPWRITE_ENDPOINT=<your_appwrite_endpoint>
   APPWRITE_PROJECT=<your_appwrite_project_id>
   APPWRITE_APIKEY=<your_appwrite_api_key>
   APPWRITE_DATABASE_ID=<your_database_id>
   APPWRITE_COLLECTION_ID=<your_collection_id>
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The backend API should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/frontend
  ├── /src
  ├── /public
  ├── package.json
  ├── ...
/backend
  ├── /src
  ├── /routes
  ├── app.js
  ├── server.js
  ├── ...
README.md
```

- **/frontend**: Contains the frontend application code.
- **/backend**: Contains the backend API code.

## Usage

- **Frontend**: Users interact with the React application to view, add, update, and delete fruits.
- **Backend**: The Express server handles API requests and communicates with the Appwrite database.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## Acknowledgments

- Thanks to the developers of React, Node.js, Express, and Appwrite for their amazing tools and libraries.

## Contact

For any questions or issues, please open an issue on GitHub or contact the project maintainer.
