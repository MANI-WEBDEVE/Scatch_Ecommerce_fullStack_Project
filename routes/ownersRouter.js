import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("King This product");
});

export default router;
