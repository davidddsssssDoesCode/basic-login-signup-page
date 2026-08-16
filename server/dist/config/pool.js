import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = parseInt(process.env.DB_PORT, 10);
const DB_NAME = process.env.DB_NAME;
const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
});
export default pool;
//# sourceMappingURL=pool.js.map