import express from "express";
import router from "./src/Routes/index.js";
import cors from'cors';
import errorMiddleware from "./src/Middleware/error-middleware.js";


const server = express();
server.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}));
server.use(
    express.urlencoded({ extended: true })
);
server.use(express.json());
// app.use(express.json());
server.use('/api/v1', router)


server.use(errorMiddleware)

server.get('/', (req, res) => {
    return res.send("Server is fired successfully :---:)");
});




export  {server};