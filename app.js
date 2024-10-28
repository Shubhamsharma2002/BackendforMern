import express, { response } from "express";
import router from "./src/Routes/index.js";



const server = express();
server.use('/api', router)


server.get('/', (req, res) => {
    return res.send("Server is fired successfully :)");
});




export  {server};