# Contact Management System

This is a simple **Contact Management System** built using Node.js, Express, and MongoDB. It allows users to manage and organize their contacts, including adding, updating, deleting, and viewing contact information. The application is designed to be easy to use and provides basic functionality to interact with the contact data.

## Features

- **Add a new contact**: Allows users to add a new contact with details like name, phone number, email, and address.
- **View contacts**: Displays a list of all stored contacts.
- **Update contact**: Allows users to update existing contact information.
- **Delete contact**: Users can delete contacts they no longer need.
- **RESTful API**: The application provides an API for interacting with the contacts, including routes for creating, reading, updating, and deleting contacts.

## Technologies Used

- **Node.js**: Server-side JavaScript environment used for building the backend.
- **Express**: Web framework for Node.js that simplifies routing and request handling.
- **MongoDB**: NoSQL database used for storing contact information.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **React**: Frontend library for building user interfaces.
- **Postman**: For testing API routes (optional, if you prefer to interact with the backend through API requests).

## Installation

### Prerequisites

Before running the project, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed locally or using a cloud provider like MongoDB Atlas)

### Steps to Install Backend

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abhi9472/contact-management.git
   cd contact-management/backend
   ```

2. **Install dependencies**:

   In the `backend` directory, run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory of the `backend` and add the following environment variables:

     ```env
     MONGO_URI=<you_mongo_connection_string>/contact-management
     PORT=8000
     ```

   Replace the `MONGO_URI` with your MongoDB connection string if you're using a remote database (e.g., MongoDB Atlas).

4. **Start the backend server**:

   Run the following command to start the backend server:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:8001`.

### Steps to Install Frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd ../Erino-Frontend
   ```

2. **Install frontend dependencies**:

   Run the following command in the `frontend` directory to install React and other required packages:

   ```bash
   npm install
   ```

3. **Start the frontend**:

   Run the following command to start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:5173`.

## API Routes

### 1. **Add a Contact**

- **Endpoint**: `POST /contacts/add`
- **Request Body**:

  ```json
  {
    "firstName": "Abhishek",
    "lastName": "Kumar",
    "email": "abhi@gmail.com",
    "phoneNumber": "9472561447",
    "company": "Erino",
    "jobTitle": "Software Engineer"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Contact added successfully!"
  }
  ```

### 2. **Get All Contacts**

- **Endpoint**: `GET /contacts/getall`
- **Response**:

  ```json
  [
    {
      "_id": "67365c004fc1d6d883ea7b70",
      "firstName": "Abhishek",
      "lastName": "Kumar",
      "email": "abhi@gmail.com",
      "phoneNumber": "9876543211",
      "company": "Erino",
      "jobTitle": "Software Engineer"
    },
    {
      "_id": "67373ef89e34a4695f1da786",
      "firstName": "Rishit",
      "lastName": "Gupta",
      "email": "rishitgupta203@gmail.com",
      "phoneNumber": "8288228456",
      "company": "Epam",
      "jobTitle": "Backend Developer"
    }
  ]
  ```

### 3. **Update a Contact**

- **Endpoint**: `PUT /contacts/update`
- **Request Body**:

  ```json
  {
    "contact": {
      "_id": "67365c004fc1d6d883ea7b70",
      "firstName": "Abhishek",
      "lastName": "Kumar",
      "email": "abhi@gmail.com",
      "phoneNumber": "9876543211",
      "company": "Erino",
      "jobTitle": "Software Engineer"
    }
  }
  ```

- **Response**:

  ```json
  {
    "message": "Contact updated successfully!"
  }
  ```

### 4. **Delete a Contact**

- **Endpoint**: `DELETE /contacts/delete`
- **Response**:

  ```json
  {
    "message": "Contact deleted successfully!"
  }
  ```

## Challenges and Solutions

1. **Integrating MongoDB with Node.js**:

   - **Challenge**: Configuring a reliable connection to MongoDB.
   - **Solution**: Used Mongoose for simplified database connections and configured environment variables for secure connection strings.

2. **RESTful API Route Structure**:

   - **Challenge**: Maintaining organized and clean route definitions.
   - **Solution**: Utilized Express router to modularize code for better readability and management.

3. **Validation and Error Handling**:

   - **Challenge**: Ensuring robust input validation.
   - **Solution**: Integrated `express-validator` for validating inputs and created reusable middleware for consistent error handling.

4. **Asynchronous Code Handling**:

   - **Challenge**: Managing asynchronous functions with database operations.
   - **Solution**: Implemented `async/await` syntax to simplify code structure and reduce complexity.

5. **Testing API Routes**:
   - **Challenge**: Verifying that each API route functions as expected.
   - **Solution**: Created a comprehensive Postman collection for testing CRUD operations.
