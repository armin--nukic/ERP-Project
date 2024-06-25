# ERP Project

This is a simple ERP (Enterprise Resource Planning) application developed using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create and manage items.

## Features

- Create, read, update, and delete items
- User authentication and authorization
- Responsive design
- MongoDB Atlas for the database

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)
- **Other:** Mongoose for MongoDB object modeling

## Installation and Setup

To get started with this project, follow these steps:

```sh
# Clone the repository
git clone https://github.com/armin--nukic/ERP-Project.git
cd ERP-Project

# Install dependencies for the backend
cd backend
npm install

# Install dependencies for the frontend
cd ../frontend
npm install

# Set up environment variables
# Create a .env file in the backend directory and add the following:
# MONGO_URI=your_mongodb_atlas_uri
# JWT_SECRET=your_jwt_secret
```

## Running the Application

```sh
To run the application, follow these steps:

# Start the backend server
# cd backend
# node index.js

# Start the frontend server
# cd ../frontend
# npm start

# Open your browser and navigate to http://localhost:3000 to use the application.
