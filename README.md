# BMI Project Documentation

Overview :

The BMI Project is a web application that allows users to calculate and manage their Body Mass Index (BMI). 

The project consists of:

A Java Spring Boot backend for handling API requests, managing user data, and performing BMI calculations.

A React frontend for the user interface, allowing users to interact with the application.


## Features

### Frontend

User-friendly interface built with React and Tailwind CSS.

Features include:
Adding new users with their details (name, age, weight, height).

Viewing a list of users with their BMI and BMI status.

Filtering users by name or BMI status.

Updating user details.

Deleting users.

### Backend

Built with Java Spring Boot.

Features include:

RESTful APIs for CRUD operations.

BMI calculation logic based on user weight and height.

Database integration for persistent storage.

CORS configuration to allow communication with the frontend.

## Project Structure

### Technologies Used :

### Frontend :

React,
Tailwind CSS,
JavaScript,
Fetch (for API calls)

### Backend :

Java,
Spring Boot,
Maven,
Hibernate (JPA),
MySQL (or any other database),


## Setup Instructions

### Backend Setup

1. Navigate to the backend folder: cd BMI -DTODemo

2. Ensure you have Java and Maven installed.

3. Configure the database in application.properties:
   
   spring.datasource.url=jdbc:mysql://localhost:3306/bmi_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

Run the backend:
mvn spring-boot:run

The backend will start on http://localhost:8080.

### Frontend Setup


1. Navigate to the frontend folder: cd frontend

2. Install dependencies: npm install

3. Start the frontend: npm run dev

The frontend will start on http://localhost:5173.

## API Endpoints

Base URL: http://localhost:8080/api

### HTTP Method	Endpoint	Description

POST	/newuser	Add a new user

GET	users	Get all users

GET	/user/{id}	Get a user by ID

PUT	/update/{id}	Update a user by ID

DELETE	/remove/{id}	Delete a user by ID

## Frontend Features

1. Add User
Navigate to the "Add User" form.
Enter the user's details (first name, last name, age, weight, height).
Click "Submit" to add the user.

2. View Users
The main page displays a table of all users with their BMI and BMI status.

4. Filter Users
Use the search bar to filter users by first name or last name.
Use the dropdown to filter users by BMI status (e.g., "Underweight", "Normal weight").

5. Update User
Click the "Update" button next to a user to navigate to the update form.
Modify the user's details and submit the form to update the user.

6. Delete User
Click the "Delete" button next to a user to remove them from the database.


## Backend Logic

## BMI Calculation
The backend calculates BMI using the formula:


Based on the BMI value, the backend assigns a BMI status:

Underweight: BMI < 18

Normal weight: 18 ≤ BMI < 25

Overweight: 25 ≤ BMI < 30

Obese: BMI ≥ 30

## Database Integration
The backend uses Hibernate (JPA) to interact with the database.
User data is stored in a table named BMI.


## Future Improvements
Add user authentication and authorization.

Implement pagination for the user list.

Add unit and integration tests for both frontend and backend.

Deploy the application to a cloud platform (e.g., AWS, Heroku, or Vercel).

### Contributing
Fork the repository.
Create a new branch:
Commit your changes:
Push to the branch:
Open a pull request.
