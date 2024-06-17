# ToDo App with CRUD Operations and Authentication

This is a ToDo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with CRUD operations and authentication, without using environment variables.

## Features

- Create, Read, Update, and Delete tasks.
- User authentication using JSON Web Tokens (JWT).
- Persistent data storage using MongoDB Atlas.
- Backend server with Node.js and Express.js.
- Frontend UI with React.js.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB Atlas account

## Configuration
- MongoDB Atlas Setup
- Go to MongoDB Atlas and sign in or create an account.
- Create a new cluster and a database.
- Obtain your MongoDB connection string.
- Replace username, password, and your-cluster-url with your details.
## Getting Started

### Clone the Repository

```bash
git clone https://github.com/swathipp/HATIO.git
cd todo-mern-auth
```
## Initialize Node.js Project
Inside your project directory, initialize a new Node.js project. This will create a package.json file to manage project dependencies:
```bash
npm init -y

```
##  Install Express.js
Install Express.js as a dependency for your project:
```bash
npm install express
```
   
## Running the Application
### Start the Backend Server
```bash
cd backend
npm run nodeman
```
## Start the Frontend Development Server

```bash
cd ../frontend
npm start
```




