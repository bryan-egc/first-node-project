import express, { Router } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); //Esto se transforma en una ruta absoluta

app.set("views", join(__dirname, "views")); //join: evalua el SO y convierte el path conforme lo que el SO necesite
app.set("view engine", "ejs"); //set: le dice al servidor que caracteristicas quiere que utilice, view engine: motor de plantillas, este es el que nos permite agregar lógica dentro del HTML

app.use(indexRoutes);

app.use(express.static(join(__dirname, "public")));

app.listen(3000);
console.log("Server is listening on port", 3000);
