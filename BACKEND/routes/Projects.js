const router = require("express").Router();
let Project = require("../models/Project");
const projectCtrl = require("../controllers/projectCtrl")
const auth = require('../middleware/auth')

router.route("/add").post((req,res)=>{
    
    const userId = req.body.userId;
    const Pname = req.body.Pname;
    const PType = req.body.PType;
    const CName = req.body.CName;
    const Description = req.body.Description;
    const SDate = req.body.SDate;
    const EDate = req.body.EDate;
    const EAmount = req.body.EAmount;
    const Document = req.body.Document; 

    const newProject = new Project({
        
        userId,
        Pname,
        PType,
        CName,
        Description,
        SDate,
        EDate,
        EAmount,
        Document

    })

    newProject.save().then(()=>{
        
        res.json("Project added")

    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

     Project.find().then((Project)=>{
        res.json(Project)
     }).catch((err)=>{
        console.log(err)
     })

})

router.route("/update/:id").put(async(req,res)=>{
    let projectId = req.params.id;
    const {Pname, PType, CName, Description, SDate, EDate, EAmount} = req.body;

    const updateProject = {
        Pname,
        PType,
        CName,
        Description,
        SDate,
        EDate,
        EAmount
    }

    const update = await Project.findByIdAndUpdate(projectId, updateProject).then(()=>{
        res.status(200).send({status : "Project updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})

router.route("/delete/:id").delete(async(req,res)=>{
    let projectId = req.params.id;

    await Project.findByIdAndDelete(projectId).then(()=>{
        res.status(200).send({sta : "Project Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).status({status: "Error with delete user", error: err.message});
    })
})

// router.route("/get/:id").get(async(req,res)=>{
//     let projectId = req.params.id;
//     await Project.findById(projectId).then(()=>{
//         res.status(200).send({status: "Project fetched", Project})
//         console.log(Project)
        
//     }).catch(()=>{
//         console.log(err.message);
//         res.status(500).status({status: "Error with fetched Project",error: err.message});
//     })
// })

router.route("/get/:id").get(async (req,res) => {
    let projectId = req.params.id;
    const user = await Project.findById(projectId)
    .then((project)=>{
        res.status(200).send({staus: "user fetched",project})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({staus: "Error with get user",error: err.mesege});
    })
})


router.post('/create',auth, projectCtrl.createProject)
router.get('/getProjects/:userId',auth, projectCtrl.getProjects)
//router.put('/projectsUpdate/:projectId', projectCtrl.updateProjects)
// router.delete('/projectsdelet/:userId/:projectId',auth, projectCtrl.deleteProject)
//router.get('/getone/:projectId', projectCtrl.getOneProjects)

module.exports = router;

