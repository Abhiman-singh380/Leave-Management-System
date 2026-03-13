const Leave = require("../models/Leave");

exports.applyLeave = async(req,res)=>{

const leave = new Leave({
userId:req.user.id,
fromDate:req.body.fromDate,
toDate:req.body.toDate,
reason:req.body.reason
});

await leave.save();

res.json(leave);

};

exports.getAllLeaves = async(req,res)=>{

const leaves = await Leave.find();

res.json(leaves);

};

exports.approveLeave = async(req,res)=>{

await Leave.findByIdAndUpdate(req.params.id,{status:"APPROVED"});

res.json("Leave approved");

};

exports.rejectLeave = async(req,res)=>{

await Leave.findByIdAndUpdate(req.params.id,{status:"REJECTED"});

res.json("Leave rejected");

};