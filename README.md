# Activity Booking api

## Prerequisites

Before running this project, make sure you have the following installed on your local machine:

- **Node.js** (v12 or later)
- **npm** (Node Package Manager)
- **MongoDB** (either a local MongoDB instance or MongoDB Atlas for cloud-based MongoDB)
- **Git** (to clone the repository)

---

## Installation

### 1. Clone the Repository

Clone the project from GitHub and run the below command:

- git clone https://github.com/your-username/your-repo-name.git
- cd your-repo-name
- npm install

### 2. Set Up Environment Variables

- Before running the application, create a `.env` file in the root of the project directory. Add the following configuration:

- **MONGODB_URL**: Your MongoDB connection string (you can get this from MongoDB Atlas if you're using cloud-based MongoDB).
- **JWT_SECRET**: The secret string used for signing and verifying JWT tokens.
- **PORT**: The port on which the server will run. The default is `5000`.

### 3. Start the Server Locally

- Once the environment variables are set up, you can start the server with the following command:
- npm start

Access the API at: http://localhost:5000
