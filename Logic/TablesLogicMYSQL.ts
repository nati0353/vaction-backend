import dal_mysql from '../Utils/dal_mysql';
import { OkPacket } from 'mysql'


// CREATE USERS TABLE
const createUsersTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS vac_project.users (
        userKey INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NULL,
        email VARCHAR(45) NULL,
        pass VARCHAR(45) NULL,
        role VARCHAR(45) NULL,
        PRIMARY KEY (userKey),
        UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);`;
        const response = dal_mysql.execute(SQLcommand);
}

// CREATE VACATIONS TABLE
const createVacsTable = () => {
    const SQLcommand = `CREATE TABLE IF NOT EXISTS vac_project.vacations (
        vacKey INT NOT NULL AUTO_INCREMENT,
        destination VARCHAR(45) NOT NULL,
        description VARCHAR(255) NOT NULL,
        startDate VARCHAR(45) NOT NULL,
        endDate VARCHAR(45) NOT NULL,
        price VARCHAR(45) NOT NULL,
        vacImage VARCHAR(255) NOT NULL,
        PRIMARY KEY (vacKey));`;
        const response = dal_mysql.execute(SQLcommand);
}


// CREATE USER LIKES TABLE
const createUserLikesTable = () => {
    const SQLcommand = `
    CREATE TABLE IF NOT EXISTS vac_project.user_likes (
        likeKey INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (likeKey));`;
        const response = dal_mysql.execute(SQLcommand);
}


export default {
    createUsersTable,
    createVacsTable,
    createUserLikesTable
}