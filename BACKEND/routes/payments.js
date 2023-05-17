const router = require("express").Router();
let Payment = require("../models/Payment");

router.route("/addPayment").post((req,res)=>{
    const donation_amount = Number(req.body.donation_amount);
    const cardNo = Number(req.body.cardNo);
    const expiry_date = req.body.expiry_date;
    const cvc = Number(req.body.cvc);
        
    const newPayment = new Payment({
        donation_amount,
        cardNo,
        expiry_date,
        cvc
        
    })

    newPayment.save().then(()=>{
        res.json("Payment Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/allPayments").get((req,res)=>{

    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
})
/*
router.route("/updateDonation/:did").put(async(req, res)=>{
    let userId = req.params.did;
    const{community, project_type, location, donation_amount, d_date} = req.body;

    const updateDonation = {
        community,
        project_type,
        location,
        donation_amount,
        d_date
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

router.route("/getonepayment/:did").get(async(req,res)=>{
    let userId = req.params.did;
    await Donation.findById(userId)
    .then((donation)=>{
        res.status(200).send({status: "Donation fetched", donation});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get one donation!", error:err.message});
    })
})*/
module.exports = router;