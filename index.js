require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Produto = require("./models/produto");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const produtosRoutes = require("./routes/produtos");
app.use(produtosRoutes);




app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000/")
})