
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
- **Postman**: For testing API routes (optional, if you prefer to interact with the backend through API requests).

## Installation

### Prerequisites

Before running the project, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed locally or using a cloud provider like MongoDB Atlas)

### Steps to Install

1. **Clone the repository**:

   ```bash
   git clone https://github.com/abhi9472/contact-management.git
   cd contact-management
   ```

2. **Install dependencies**:

   In the project directory, run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory of the project and add the following environment variables:

     ```env
     MONGO_URI=mongodb://localhost:27017/contact-management
     PORT=5000
     ```

   Replace the `MONGO_URI` with your MongoDB connection string if you're using a remote database (e.g., MongoDB Atlas).

4. **Start the server**:

   After setting up the environment variables, run the following command to start the backend server:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:8001`.

## API Routes

### 1. **Add a Contact**

- **Endpoint**: `POST /contacts/add`
- **Request Body**: 

  ```json
  {
    "name": "John Doe",
    "phone": "1234567890",
    "email": "john.doe@example.com",
    "address": "123 Main St, Anytown, USA"
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
      "id": "1",
      "name": "John Doe",
      "phone": "1234567890",
      "email": "john.doe@example.com",
      "address": "123 Main St, Anytown, USA"
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "phone": "0987654321",
      "email": "jane.smith@example.com",
      "address": "456 Elm St, Othertown, USA"
    }
  ]
  ```

### 3. **Update a Contact**

- **Endpoint**: `PUT /contacts/update`
- **Request Body**: 

  ```json
  {
    "name": "John Doe Updated",
    "phone": "1112223333",
    "email": "john.updated@example.com",
    "address": "789 Pine St, Newtown, USA"
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