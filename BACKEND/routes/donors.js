const router = require("express").Router();
let Donor = require("../models/Donor");
router.route("/addDonor").post((req,res)=>{
    const d_name = req.body.d_name;
    const d_address = req.body.d_address;
    const d_contact = Number(req.body.d_contact);
    const d_email = req.body.d_email;

    const newDonor = new Donor({
        d_name,
        d_address,
        d_contact,
        d_email
    })

    newDonor.save().then(()=>{
        res.json("Donor Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})    

router.route("/allDonors").get((req,res)=>{

    Donor.find().then((donors)=>{
        res.json(donors)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/updateDonor/:do_id").put(async(req, res)=>{
    let userId = req.params.do_id;
    const{d_name, d_address, d_contact, d_email} = req.body;

    const updateDonor = {
        d_name,
        d_address,
        d_contact,
        d_email
    }

    const update = await Donor.findByIdAndUpdate(userId, updateDonor)
    .then(()=>{
        res.status(200).send({status: "Donor details updated!"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating donor!", error: err.message});
    })
})

router.route("/deleteDonor/:do_id").delete(async(req, res) =>{
    let userId = req.params.do_id;

    await Donor.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Donor deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete donor!", error: err.message});
    })
})

router.route("/getone/:do_id").get(async(req,res)=>{
    let userId = req.params.do_id;
    await Donor.findById(userId)
    .then((donor)=>{
        res.status(200).send({status: "Donor fetched", donor});
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get one donor!", error:err.message});
    })
})
module.exports = router;