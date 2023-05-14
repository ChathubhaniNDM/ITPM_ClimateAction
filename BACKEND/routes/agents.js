const router = require("express").Router();
let Agent = require("../models/Agent");

router.route("/add").post((req,res)=>{

    const fullname = req.body.fullname;
    const address = req.body.address;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const gender = req.body.gender;
    const dob = req.body.dob;
    const district = req.body.district;
    const description = req.body.description;
    const image = req.body.image;

    const newAgent = new Agent({

        fullname,
        address,
        email,
        phone,
        gender,
        dob,
        district,
        description,
        image,
    })

    newAgent.save().then(()=>{
        res.json("Agent Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Agent.find().then((agents)=>{
        res.json(agents)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userID = req.params.id;
    const {fullname,address,email,phone,gender,dob,district,description,image}= req.body;

    const updateAgent = {

        fullname,
        address,
        email,
        phone,
        gender,
        dob,
        district,
        description,
        image,
    }
    const update = await Agent.findByIdAndUpdate(userID, updateAgent)
    .then(()=>{
        res.status(200).send({status:"Agent updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
         
    })
        
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userID = req.params.id;

    await Agent.findByIdAndDelete(userID)
    .then(() => {
        res.status(200).send({status: "Agent deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userID = req.params.id;

    const user = await Agent.findById(userID)
    .then((agent) => {
        res.status(200).send({status: "Agent fetched", agent});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche user", error: err.message});
    })
})

module.exports = router;

