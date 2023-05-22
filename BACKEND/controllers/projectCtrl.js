const Project = require('../models/Project')
const Users = require('../models/user')

const projectCtrl = {

    createProject: async (req, res) => {
        try {
            const { userId,Pname,PType,CName,Description,SDate,EDate,EAmount,Document} = req.body
            const newProject =await Project.create({
                userId,Pname,PType,CName,Description,SDate,EDate,EAmount,Document
            }) 
            console.log(Project)
            res.json({msg: "Project added! "})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // getProjectsByUserId: async (req, res) => {
    //     try {
    //         const { userId } = req.body;

    //         const projects = await Project.find({ userId });
    //         res.json( {projects} );
    //         if (!projects) {
    //             return res.status(404).json({ msg: "No projects found" });
    //         }


    //     } catch (err) {
    //         return res.status(500).json({ msg: err.message });
    //     }
    // },

    getProjects : async(req,res)=>{

         let userId = req.params.userId;
       await Project.find({userId:userId}).then((projects)=>{
        res.json(projects)
         }).catch((err)=>{
        console.log(err);
        })
        
        },

        // getOneProjects : async(req,res)=>{

        //     let userId = req.params.userId;
        //     let projectId = req.params.id;
        //   await Project.find({id:projectId}).then((projects)=>{
        //    res.json(projects)
        //     }).catch((err)=>{
        //    console.log(err);
        //    })
           
        //    },

    // updateProjectByUserId: async (req, res) => {
    //     try {
    //         const { userId, projectId, Pname, PType, CName, Description, SDate, EDate, EAmount, Document } = req.body;

            
    //         const project = await Project.findOne({ userId, _id: projectId });

    //         if (!project) {
    //             return res.status(404).json({ msg: "Project not found" });
    //         }

            
    //         project.Pname = Pname;
    //         project.PType = PType;
    //         project.CName = CName;
    //         project.Description = Description;
    //         project.SDate = SDate;
    //         project.EDate = EDate;
    //         project.EAmount = EAmount;
    //         project.Document = Document;

    //         // Save the updated project
    //         await project.save();

    //         res.json({ msg: "Project updated!" });
    //     } catch (err) {
    //         return res.status(500).json({ msg: err.message });
    //     }
    // },

    updateProjects: async (req, res) =>  {
        
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
    
        const update = await Project.findOneAndUpdate({ id:projectId}, updateProject).then(()=>{
            res.status(200).send({status : "Project updated"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error with updating data"});
        })
    },

    // deleteProject: async (req, res) => {
    //     try {
    //         const { userId, projectId } = req.body;

    //         const deletedProject = await Project.findOneAndDelete({
    //             userId,
    //             _id: projectId
    //         });

    //         if (!deletedProject) {
    //             return res.status(404).json({ msg: "Project not found" });
    //         }

    //         res.json({ msg: "Project deleted!" });
    //     } catch (err) {
    //         return res.status(500).json({ msg: err.message });
    //     }
    // }

    // deleteProject: async (req, res) => {
    //     let userId = req.params.userId;
    //     let projectId = req.params.id;
    //     await Project.findOneAndDelete({userId:userId, id:projectId}).then(()=>{
    //         res.status(200).send({sta : "Project Deleted"});
    //     }).catch((err)=>{
    //         console.log(err.message);
    //         res.status(500).status({status: "Error with delete project", error: err.message});
    //     })
    // }

    

}

module.exports = projectCtrl;
