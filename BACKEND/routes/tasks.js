const router = require("express").Router();
const Task = require("../models/Task");
let Task = require("../models/Task");

router.route("/add").post((req,res)=>{

    const aname = req.body.aname;
    const tprogramname = req.body.tprogramname;
    const tdistrict = req.body.tdistrict;
    const tcost = req.body.tcost;
    const tdate = req.body.dob;

    const newTask = new Task({

        aname,
        tprogramname,
        tdistrict,
        tcost,
        tdate,
   
    })

    newTask.save().then(()=>{
        res.json("Task Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Task.find().then((tasks)=>{
        res.json(tasks)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {aname,tprogramname,tdistrict,tcost,tdate}= req.body;

    const updateTask= {

        aname,
        tprogramname,
        tdistrict,
        tcost,
        tdate,
    }
    const update = await Task.findByIdAndUpdate(userID, updateTask)
    .then(()=>{
        res.status(200).send({status:"Task updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Task.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "Task deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Task.findById(userID)
    .then((task) => {
        res.status(200).send({status: "Task fetched", task});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche user", error: err.message});
    })
})

module.exports = router;

