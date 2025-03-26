# TrustPay

## [Live Link](https://trustpay-payment-app.netlify.app/)

## Description

TrustPay is a secure online payment platform that enables users to perform seamless transactions, including recharges and bill payments. The application ensures secure authentication and protects user data with JWT-based authentication. TrustPay is designed as a React single-page application (SPA) with optimized performance, reducing page load time and enhancing user experience.

## Features

- Secure online transactions
- JWT-based authentication to prevent unauthorized access
- Optimized React SPA for a fast and smooth user experience
- Responsive UI with Tailwind CSS
- Dockerized frontend and backend for easy deployment
- Supports Docker Compose for multi-container orchestration

## Installation

### **Manual Setup**

1. Clone the repository:

   ```sh
   git clone https://github.com/mukulbhatia799/TrustPay-Project.git  
   cd TrustPay-Project
   ```

2. Install dependencies for the frontend:

   ```sh
   cd frontend  
   npm install  
   ```

3. Install dependencies for the backend:

   ```sh
   cd ../backend  
   npm install  
   ```

4. Set up environment variables:

   - Create a `.env` file in the backend folder and configure necessary environment variables such as database URL, JWT secret, and port.

5. Start the backend server:

   ```sh
   npm start  
   ```

6. Start the frontend server:

   ```sh
   cd ../frontend  
   npm run dev  
   ```

### **Docker Setup**

#### **Using Docker Only**

1. Build the frontend Docker image:

   ```sh
   cd frontend
   docker build -t trustpay-frontend .
   ```

2. Run the frontend container:

   ```sh
   docker run -p 5173:5173 trustpay-frontend
   ```

3. Build the backend Docker image:

   ```sh
   cd ../backend
   docker build -t trustpay-backend .
   ```

4. Run the backend container:

   ```sh
   docker run -p 3000:3000 trustpay-backend
   ```

#### **Using Docker Compose**

1. Ensure Docker and Docker Compose are installed on your system.
2. Navigate to the project root where the `docker-compose.yml` file is located.
3. Run the following command to start both frontend and backend containers:
   ```sh
   docker-compose up --build
   ```
4. To stop the containers, run:
   ```sh
   docker-compose down
   ```

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- JWT Authentication
- Tailwind CSS
- Docker & Docker Compose

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
