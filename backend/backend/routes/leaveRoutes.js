const router = require("express").Router();
const Leave = require("../models/Leave");

router.post("/apply", async(req,res)=>{

const leave = new Leave(req.body);

await leave.save();

res.json(leave);

});

router.get("/all", async(req,res)=>{

const leaves = await Leave.find();

res.json(leaves);

});

router.put("/approve/:id", async(req,res)=>{

await Leave.findByIdAndUpdate(
req.params.id,
{status:"APPROVED"}
);

res.json("Leave approved");

});

router.put("/reject/:id", async(req,res)=>{

await Leave.findByIdAndUpdate(
req.params.id,
{status:"REJECTED"}
);

res.json("Leave rejected");

});

module.exports = router;