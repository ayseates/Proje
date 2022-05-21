const express = require("express");
const dataBase = require("./dataBase");

const app = express();
dataBase();

app.listen(5000, () => console.log("Server ayaklandırma başarılı"));
