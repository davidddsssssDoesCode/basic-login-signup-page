import express, {type Request, type Response} from "express";

const router = express.Router();

router.get("/get", (req: Request, res: Response) => {
    res.status(200).json({message : "Ping success!"});
});

export default router;