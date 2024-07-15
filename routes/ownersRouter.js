import express from "express";
import { OwnerModel } from "../models/owner.model.js";

const router = express.Router();

if (process.env.NODE === "development") {
  router.post("/create", async (req, res) => {
    let owners = await OwnerModel.find({});
    if (owners.length > 0) {
      return res
      .status(503) 
      .send({ message: "Owners already exists" })
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await OwnerModel.create({
      fullname: fullname,
      email: email,
      password: password,
    });

    res.status(201).send(createdOwner);
  });
}

router.get("/", (req, res) => {
  res.send("King This product");
});

console.log(process.env.NODE);

export default router;
