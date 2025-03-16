# Hostel & Mess Management System

## Overview
The **Hostel & Mess Management System** is a web-based application designed to streamline hostel and mess operations. It enables administrators to manage room allocations, meal plans, and payments while allowing students to view their meal plans, payments, and submit feedback. The system also includes a notification feature for important updates.

## Features

### 1. **Login Portal**
- **Admin (Hostel Staff)**: Can manage the system, update meal plans, allocate payments, and respond to feedback.
- **User (Student)**: Can view meal plans, check payments, and submit feedback.

### 2. **User Pages**
- View the mess meal plan.

### 3. **Admin Pages**
- Edit the mess meal plan.
- Allocate payments digitally to students or groups.

### 4. **Payment Page**
- Users can view all payments, including mess fee, hostel fee, electricity bill, and development charges.

### 5. **Feedback & Report Page**
- Users can report problems in the hostel.
- Admins can view and respond to feedback.

### 6. **Notification System**
- Alerts for payment dues and completion.

### 7. **GUI-Level Room Allocation Page**
- Displays available and unavailable rooms in different colors.
- Admins can control access times for this page.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, EJS (Embedded JavaScript)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based authentication
- **Styling**: Bootstrap, Custom CSS

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/hostel-mess-management.git
   cd hostel-mess-management
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables, such as:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
4. Start the server:
   ```sh
   npm start
   ```

## Usage
- **Admin Login**: Use provided credentials to log in as an admin.
- **User Login**: Students can log in to check meal plans and payments.
- **Manage Payments**: Admins can allocate and track payments.
- **Room Allocation**: View and manage hostel room availability.

## Future Enhancements
- Mobile app integration.
- Advanced analytics dashboard.
- Automated notifications for important updates.

## License
This project is licensed under the MIT License.

## Contact
For queries and contributions, please contact **gnaneshgopinathan@gmail.com**.

