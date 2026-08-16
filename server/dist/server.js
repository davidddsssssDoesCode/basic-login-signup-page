import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";
dotenv.config();
const API_PORT = parseInt(process.env.API_PORT, 10);
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", users);
app.listen(API_PORT, () => console.log("Server on."));
//# sourceMappingURL=server.js.map