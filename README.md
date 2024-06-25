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

# Create a .env file in the backend directory and add the following:
# Replace `your_mongodb_atlas_uri` with your actual MongoDB Atlas URI and set the PORT
echo "MONGODB_URI=your_mongodb_atlas_uri
PORT=3001" > .env

# Install dependencies for the frontend
cd ../frontend
npm install

# Create a .env file in the frontend directory and add the following:
# Set REACT_APP_API_URL to connect to your backend API
echo "REACT_APP_API_URL=http://localhost:3001" > .env

```

## Running the Application

```sh
To run the application, follow these steps:

# Start the backend server
# cd backend
# node index.js

## Start the frontend server
# cd ../frontend
# npm start
# Open your browser and navigate to http://localhost:3000 to use the application.

```

