ERP Project
This is a simple ERP (Enterprise Resource Planning) application developed using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create and manage items.

Features
Create, read, update, and delete items
User authentication and authorization
Responsive design
MongoDB Atlas for the database
Tech Stack
Frontend: React
Backend: Node.js, Express
Database: MongoDB (Atlas)
Other: Mongoose for MongoDB object modeling
Installation

1. Clone the repository

git clone https://github.com/armin--nukic/ERP-Project.git
cd ERP-Project

Install dependencies for the backend

sh
Copy code
cd backend
npm install
Install dependencies for the frontend

sh
Copy code
cd ../frontend
npm install
Set up environment variables
Create a .env file in the backend directory and add the following:

env
Copy code
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
Run the backend server

sh
Copy code
cd backend
node index.js
Run the frontend server

sh
Copy code
cd ../frontend
npm start
Open your browser
Navigate to http://localhost:3000 to start using the application.

Contributing
Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
Distributed under the MIT License. See LICENSE for more information.
