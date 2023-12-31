# CRUD PROJECT FOR TODO LIST

## Overview

CRUD PROJECT FOR TODO LIST is a simple ToDo List application that allows users to create, update, read, and delete todos. The application also provides features for searching, sorting, and filtering to enhance the user experience.

## Tech Stack

- **Front End**: React JS, CSS
- **Back End**: Node JS (Express JS)
- **Database**: MySQL (Sequelize)

## Features

This application has several key features:

- **Create**: Users can create new entries in the todo list by adding a title, description, and todo type.
- **Update**: Users can update existing entries by editing the title, description, and todo type.
- **Read**: The application displays all todos in the list.
- **Delete**: Users can delete completed todos.

Additional Features:

- **Searching**: Users can search for todos based on the title or todo type.
- **Sorting**: Todos can be sorted in ascending or descending order based on the title.
- **Filtering**: Users can filter todos based on the title, description, or desired todo type.

## Notes

- The application follows the CRUD (Create, Read, Update, Delete) principles for todo management.
- For the search feature, users can search for todos by title or todo type without using external libraries or tools.
- The project operates in a timezone that is set to be 7 hours behind the Asia/Jakarta timezone (GMT+7).

## Installation

### Frontend (React JS)

To set up the frontend part of this application:

1. Clone this repository using `git clone https://github.com/Shaffaprawira/project-crud-interview.git`.
2. Open a terminal and navigate to the project's frontend directory.
3. Run `npm install` to install the required frontend dependencies.
4. After the installation is complete, run `npm start` to start the development server for the frontend.
5. The frontend application should be accessible at `http://localhost:3000` in your web browser.

### Backend (Node JS / Express JS)

To set up the backend part of this application:

1. Clone this repository using `git clone https://github.com/Shaffaprawira/project-crud-interview.git`.
2. Open a terminal and navigate to the project's backend directory.
3. Run `npm install` to install the required backend dependencies.
4. Create a `.env` file in the backend directory to configure your MySQL database. Include the following variables:

   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=crud_db
   DB_DIALECT=mysql

   ```

5. After the configuration is complete, run `npm start` to start the Node.js server for the backend.
6. The backend server should be accessible at `http://localhost:5000`.

## License

This application is licensed under the [MIT License](LICENSE).

## Contact

Contact me via email: shaffaprawira@gmail.com
