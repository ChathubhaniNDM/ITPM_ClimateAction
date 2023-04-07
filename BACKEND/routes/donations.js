const router = require("express").Router();
let Donation = require("../models/Donation");

router.route("/addDonation").post((req,res)=>{
    const commiunity = req.body.commiunity;
    const project_type = req.body.project_type;
    const location = req.body.location;
    const donation_amount = Number(req.body.donation_amount);
    const date = req.body.date;

    const newDonation = new Donation({
        commiunity,
        project_type,
        location,
        donation_amount,
        date
    })

    newDonation.save().then(()=>{
        res.json("Donation Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/allDonations").get((req,res)=>{

    Donation.find().then((donations)=>{
        res.json(donations)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/updateDonation/:did").put(async(req, res)=>{
    let userId = req.params.did;
    const{commiunity, project_type, location, donation_amount, date} = req.body;

    const updateDonation = {
        commiunity,
        project_type,
        location,
        donation_amount,
        date
    }

    const update = await Donation.findByIdAndUpdate(userId, updateDonation)
    .then(()=>{
        res.status(200).send({status: "Donation details updated!"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating donation!", error: err.message});
    })
})

router.route("/deleteDonation/:did").delete(async(req, res) =>{
    let userId = req.params.did;

    await Donation.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Donation deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete donation!", error: err.message});
    })
})

router.route("/getone/:did").get(async(req,res)=>{
    let userId = req.params.did;
    await Donation.findById(userId)
    .then((donation)=>{
        res.status(200).send({status: "Donation fetched", donation});
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get one donation!", error:err.message});
    })
})
module.exports = router;