import express, {} from "express";
const router = express.Router();
router.get("/get", (req, res) => {
    res.status(200).json({ message: "Ping success!" });
});
export default router;
//# sourceMappingURL=users.js.map