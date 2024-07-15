import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('product')
})


export default router;