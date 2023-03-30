# Projet 14 Titre Développeur d'Application JavaScript React : HRnet V2 - backend

Backend of the [HRnet v2](https://github.com/VGrolleau/p14-hrnet-v2-front/) project. This project uses Sequelize, Express and nodejs with a Docker container for the MariaDB database.

[French version](README_fr.md)

## Summary

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database creation](#database-creation)
- [Launching the backend](#launching-the-backend)
- [Endpoints](#endpoints)

---

### Prerequisites

* [NodeJS](https://nodejs.org/en/) (**recommended version**)
* [npm](https://www.npmjs.com/)
* [Docker](https://docs.docker.com/get-docker/)
* [Sequelize](https://sequelize.org/)
* [ExpressJS](https://expressjs.com/)
* [MariaDB](https://mariadb.org/)

---

### Installation

- Clone the repository: `git clone https://github.com/VGrolleau/p14-hrnet-v2-back.git`
- Install the dependencies: `npm install`
- Run the Docker container for the MariaDB database: `docker run --name mariadb -e MYSQL_ROOT_PASSWORD=your_password -d mariadb:tag`

(*"your_password "* will be the root password, it is created at this time)


### Database creation

To create the database:
- Connect to the MariaDB container: `docker exec -it mariadb mysql -u root -p`

(*"root "* is the name of the root user by default)

- When prompted, enter the password you created earlier
- Create a new MariaDB user: `CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';`

(*"newuser "* is the name of the user you want to create and *"password "* is the password you want to use for this user)

- Grant the appropriate access permissions to the new user: `GRANT ALL PRIVILEGES ON HRnet.* TO 'newuser'@'localhost';`

(*"HRnet "* is the name of the database)

- Create the database *HRnet*: `CREATE DATABASE HRnet;`
- Quit the MariaDB console: `exit`


### Launching the backend

- Go to the file `./models/database.js` and modify the information according to what you just created before
- (*Optional if you want to start the project with an empty employee list*) Regarding employees:
    - Go to the file `./models/Employee.js`
    - Uncomment the code block lines 58 to 68
- Concerning the user who logs in:
    - Go to the file `./models/User.js`
    - Uncomment the code block lines 34 to 41
- Start the server: `npm start`

**When the script is finished, re-comment the previously uncommented code blocks otherwise the employees and users will be recreated when you will restart server**

---

### Endpoints

The different endpoints used in the [HRnet v2](https://github.com/VGrolleau/p14-hrnet-v2-front/) project are in the file `./routes/api.js`.
Here is a complete list:
- `http://localhost:3001/api/login`
    - **POST** : Allows the connection of the user
- `http://localhost:3001/api/user`
    - **GET**: Retrieves the connected user
    - **PUT**: Modifies the information of the connected user
- `http://localhost:3001/api/user/:userId`
    - **GET**: Retrieves the not logged in user based on the specified ID
- `http://localhost:3001/api/employee`
    - **POST**: Allows the creation of an employee
    - **GET**: Retrieves the list of employees
    - **PUT**: Modify the information of the selected employee
    - **DELETE** : Allows you to delete the selected employee
