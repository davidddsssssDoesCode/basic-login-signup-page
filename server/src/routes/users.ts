import express, {type Request, type Response} from "express";
import pool from "../config/pool.js";

const router = express.Router();

type UserData = {
  username: string;
  password: string;
};

router.post("/login", async (req: Request, res: Response) => {
  try {
    const submittedData: UserData = req.body;

    const results = await pool.query<UserData>(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [submittedData.username, submittedData.password],
    );

    if (results.rowCount === 0) {
      return res.status(200).json({
        message: "Username and/or password is invalid.",
        status: false,
      });
    }

    res.status(200).json({
      message: `Welcome, ${submittedData.username}!`,
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "There was a problem logging you in.",
      status: false,
    });
  }
});

router.post("/signup", async (req: Request, res: Response) => {
  try {
    const submittedData: UserData = req.body;

    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2);", [
        submittedData.username,
        submittedData.password,
    ]);

    res.status(201).json({
        message: `Welcome, ${submittedData.username}`,
        status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "There was a problem creating your account.",
      status: false,
    });
  }
});

export default router;
