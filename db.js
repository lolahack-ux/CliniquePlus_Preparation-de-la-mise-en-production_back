const db = require("mysql2");

const dotenv = require("dotenv");
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

// const {motDePasse, bdd, port} = require('./mdp.js')
const connexion = db.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

connexion.connect((err) => {
  if (err) {
    console.log("valeurs");
    console.log(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT);
    console.error("Erreur CONNEXION MySQL :", err.message);
    return;
  }
  console.log("Connexion MySQL OK");
});

module.exports = { connexion };
