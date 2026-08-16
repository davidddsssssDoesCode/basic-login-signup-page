import express, {type Request, type Response} from "express";
import pool from "../config/pool.js";

const router = express.Router();

type User = {
  id?: number;
  username: string;
  password: string;
};

router.get("/login", async (req: Request, res: Response) => {
  try {
    const sumbittedData: User = req.body;

    const results = await pool.query<User>(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [sumbittedData.username, sumbittedData.password],
    );

    if (results.rowCount === 0) {
      return res.status(404).json({
        message: "Username and/or password is invalid.",
        status: false,
      });
    }

    res.status(200).json({
      message: "Logging you in...",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
        message: "There was a problem logging you in.",
        status: false,
    });
  }
});

export default router;
