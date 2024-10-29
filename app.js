import express, { response } from "express";
import router from "./src/Routes/index.js";



const server = express();
server.use(express.json());
server.use('/api/v1', router)


server.get('/', (req, res) => {
    return res.send("Server is fired successfully :---:)");
});




export  {server};