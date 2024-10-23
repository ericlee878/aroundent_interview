# SWE-Interview-Test

## Description
This repository contains a full-stack web application for managing products. The frontend is a React application, while the backend is powered by Express.js. The application allows users to view products, and delete them via the UI. The backend provides API routes for fetching and deleting products.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Backend API Routes](#backend-api-routes)
- [Frontend](#frontend)
- [Backend](#backend)
- [Contributing](#contributing)
- [License](#license)

## Features
- Display a list of products fetched from the backend API.
- Delete products from the list using a delete button in the UI.
- Responsive UI built with Material-UI.
- User-friendly notifications using Snackbar for feedback on operations.

## Technologies Used
- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express.js, CORS
- **API**: REST API
- **Package Managers**: npm

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm (comes with Node.js)

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/swe-interview-test.git
    ```

2. Navigate to the project directory:
    ```bash
    cd swe-interview-test/StarterCode
    ```

3. Navigate to the `frontend` directory and install the dependencies:
    ```bash
    cd frontend
    npm install
    ```

4. Navigate to the `backend` directory and install the dependencies:
    ```bash
    cd ../backend
    npm install
    ```

## Usage

### Running the backend server
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Start the backend server:
    ```bash
    node index.js
    ```
3. The server will run at `http://localhost:3001`.

### Running the frontend app
1. Open a new terminal and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2. Start the frontend app:
    ```bash
    npm start
    ```
3. The React app will open in your default browser at `http://localhost:3000`.

## Backend API Routes

### GET `/api/products`
- **Description**: Fetch the list of products.
- **Response**: A JSON array of product objects.

### DELETE `/api/products/:id`
- **Description**: Deletes a product with the specified `id`.
- **Response**: A JSON message confirming the deletion or an error message.

## Frontend
The frontend is built using React and Material-UI to display the list of products in cards. You can delete products from the list by clicking the delete button on each card.

## Backend
The backend uses Express.js to handle API requests. It provides two endpoints:
- `GET /api/products`: Returns the list of products.
- `DELETE /api/products/:id`: Deletes a product by its ID.

## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss what you would like to change.

## License
This project is licensed under the MIT License.
