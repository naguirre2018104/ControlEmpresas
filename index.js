"use strict"

var mongoose = require("mongoose");
var app = require("./app");
var port = 3200;
var admin = require("./controllers/empresa.controller");

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify",false);
mongoose.connect("mongodb://localhost:27017/DBControlEmpresas",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Conectado a la base de datos");
    admin.admin();
    app.listen(port,()=>{
        console.log("Servidor EXPRESS en funcionamiento");
    })
})
.catch((err)=>{
    console.log("No se pudo conectar a la base de datos",err);
})