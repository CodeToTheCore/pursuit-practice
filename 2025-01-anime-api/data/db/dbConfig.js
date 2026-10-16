const pgp = require("pg-promise")(); //initializing pg-promise
require("dotenv").config();

// GETTING ENV VARIBLES files USING DESTRUCTURING TO MAKE IT EASIER/ LESS CODE
const {PG_HOST, PG_USER, PG_PORT, PG_DATABASE} = process.env;
console.log(PG_HOST)

// GETTING ALL VARIBLES FROM ENV FILE ONE BY ONE

// const PG_HOST = process.env.PG_HOST
// const PG_USER = process.env.PG_USER
// const PG_PORT = process.env.PG_PORT
// const PG_DATABASE = process.env.PG_DATBASE 


// NEXT WE CREATE A CONNECTION OBJECT (varible called cn/ connection object): connects our server to our database so it can request and recieve the data the client is requesting
// These are just varibles the data needs in order to connect to the database for the infomation thats requested.
const cn = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE
}
// The connection object connects our server to the database so that it can request and receive the data the client is requesting

const db = pgp(cn);
// We pass this connection object to our pgp varible which creates our database

module.exports = db;
// Last we export our database