const router = require("express").Router();
let Orgs = require("../models/org");
router.route("/add").post((req,res)=>{

    const org_name  = req.body.org_name;
    const org_regnum  = req.body.org_regnum;
    const org_Type = req.body.org_Type;
    const org_email = req.body.  org_email;
    const org_telephone  = Number(req.body.org_telephone );
    const org_address = req.body.s_location;
    const org_mainbranch = req.body.org_mainbranch;
    const org_startdate = req.body.org_startdate;
    const org_description  = req.body.org_description ;
    const org_images = req.body.org_images;
    const neworg = new Orgs({

        org_name,
        org_regnum,
        org_email ,
        org_Type,
        org_email,
        org_telephone ,
        org_address,
        org_mainbranch,
        org_startdate,
        org_description ,
        org_images
    })
    neworg .save().then(()=>{
        res.json("OrganiZation Added")
    }).catch((err)=>{
       console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Orgs.find().then((orgs)=>{
        res.json(orgs)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/update/:org_regnum").put(async (req,res)=>{
   let Regnumber = req.params. org_regnum;
     const {org_name,org_regnum ,org_Type,org_email ,org_telephone , org_address,org_mainbranch,org_startdate,org_description,org_images }= req.body;

    const updateOrg = {

        org_name,
        org_regnum,
        org_email ,
        org_Type,
        org_email,
        org_telephone ,
        org_address,
        org_mainbranch,
        org_startdate,
        org_description ,
        org_images
    }
    const update = await Orgs.findByIdAndUpdate( Regnumber, updateOrg)
    .then(()=>{
        res.status(200).send({status:" Organization updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
         
    })
        
})
router.route("/delete/:org_regnum").delete(async (req, res)=>{
    let Regnumber = req.params.org_regnum;

    await Orgs.findByIdAndDelete(Regnumber)
    .then(() => {
        res.status(200).send({status: " OrganiZation deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete Organization ", error: err.message});
    })
})

router.route("/get/:org_regnum").get(async (req, res)=>{
    let Regnumber = req.params.org_regnum;

    const orgs = await Orgs.findById(Regnumber)
    .then((Org) => {
        res.status(200).send({status: "Organization fetched", orgs:orgs});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with fetche Organization ", error: err.message});
    })
})
module.exports = router;