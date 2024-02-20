const express = require('express');
const app = express();
const path = require('path')

const port = 3030;

// CONFIGURACIONES

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"./views"))

// MEDIA

app.use(express.static("public"));

// RUTAS 

const otherRoutes = require("./routes/other.routes")

// RUTAS 

app.use("/", otherRoutes)

// PUERTO 

app.listen(port , () =>
console.log(`http://localhost:${port}`));

