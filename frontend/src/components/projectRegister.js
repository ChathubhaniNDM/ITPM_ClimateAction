// import React,{ useState, useEffect} from "react";
// import axios from "axios";
// import "./projectRegister.css"


// function ProjectRegister(){

//     const [Pname, setProjectName] = useState("");
//   const [PType, setProjectType] = useState("");
//   const [CName, setCommunityName] = useState("");
//   const [Description, setDescription] = useState("");
//   const [SDate, setStartDate] = useState("");
//   const [EDate, setEndDate] = useState("");
//   const [EAmount, setEstimateAmount] = useState("");
//   const [Document, setDocument] = useState("");
//   const [projects, setProjects] = useState([]);
//   const userId = sessionStorage.getItem('userId');

//   useEffect(() => {
//     function getProjects() {
//       axios
//         .get("http://localhost:8070/project/")
//         .then((res) => {
//           setProjects(res.data);
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     }
//     getProjects();
//   }, []);

//   function sendData(e) {
//     e.preventDefault();

//     const newProject = {
//       userId,  
//       PType,
//       Pname,
//       CName,
//       Description,
//       SDate,
//       EDate,
//       EAmount,
//       Document,
//     };
//     axios
//       .post("http://localhost:8070/project/create", newProject, {
//         headers: { Authorization: sessionStorage.getItem("token") },
//       })
//       .then((res) => {
//         alert("Project Added");
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }
    
//     return(
       
//         <section className="section-1">
        
           
//         <div className="container">
//         <div className="new">
//             <div className="row">
//                 <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                
//                     <form className="row g-3 needs-validation" onSubmit={sendData}>
//                     <div class="form-container">
//                     <h3 class="title">Project Registration Form</h3>

//                     <div className="row justify-content-between text-left">   
//                     <div className="form-group col-sm-12 flex-column d-flex">
//                         <label for="form-control-label px-3" className="form-label">Project Name</label>
//                         <input type="text" className="form-control border border-success" id="validationCustom01" placeholder="Saman" onChange={(e)=>{setProjectName(e.target.value);} } required/>
//                         <div className="valid-feedback">Looks good!</div>
//                     </div>
//                     </div> 

//                     <div className="row justify-content-between text-left"> 
//                 <div className="form-group col-sm-12 flex-column d-flex">
//                     <label for="validationCustom03" className="form-label">Project Type</label>
//                     <select  className="form-control border border-success" id="validationCustom03" onChange={(e)=>{setProjectType(e.target.value);} } required>
//                     <option value="null"></option>
//                       <option value="Planting">Planting</option>
//                       <option value="Garbage Collecting">Garbage Collecting</option>
                      
//                     </select>
//                     <div className="invalid-feedback">Please provide a valid city.</div>
//                 </div>
//                 </div>
                 
//                 <div className="row justify-content-between text-left"> 
//                 <div className="form-group col-sm-12 flex-column d-flex">
//                     <label for="validationCustom01" className="form-label">Community Name</label>
                    
//                     <option value=""></option>
//                     {projects && projects.map(p => ( 
//                       <option value={p.CName}>{p.CName}</option> 
//                       ))} 
                     
//                     <div className="valid-feedback">Looks good!
//                     </div>
//                 </div>
//                 </div>

//                 <div className="row justify-content-between text-left"> 
//                 <div className="form-group col-sm-6 flex-column d-flex">
//                     <label for="validationCustom01" className="form-label">End Date</label>
//                     <input type="date" className="form-control border border-success" id="validationCustom01"  onChange={(e)=>{setEndDate(e.target.value);} } required/>
//                     <div className="valid-feedback">Looks good!</div>
//                 </div>

//                 <div className="form-group col-sm-6 flex-column d-flex">
//                     <label for="validationCustom01" className="form-label">Start Date</label>
//                     <input type="date" maxLength={10} minLength={10}  className="form-control border border-success" id="validationCustom01"  onChange={(e)=>{setStartDate(e.target.value);} } required/>
//                     <div className="valid-feedback">Looks good!</div>
//                 </div>
//                 </div>

//                 <div className="row justify-content-between text-left">
                
//                 <div className="form-group col-sm-6 flex-column d-flex">
//                     <label for="validationCustom01" className="form-label">Estimate Amount</label>
//                     <input type="text" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setEstimateAmount(e.target.value);} } required/>
//                     <div className="valid-feedback">Looks good!</div>
//                 </div>
//                 </div>

//                 <div className="row justify-content-between text-left">
//                 <div className="form-group col-sm-6 flex-column d-flex">
//                     <label for="validationCustom01" className="form-label">Description</label>
//                     <input type="test"  className="des" id="validationCustom01" onChange={(e)=>{setDescription(e.target.value);} } required/>
//                     <div className="valid-feedback">Looks good!
//                     </div>
//                 </div>
//                 </div>
                
//                 <div className="row justify-content-between text-left">
//                 <div className="form-group col-sm-12 flex-column d-flex">
//                     <label for="validationCustom01" className="form-label">Document</label>
//                     <input type="file" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setDocument(e.target.value);} } required/>
//                     <div className="valid-feedback">Looks good!</div>
//                 </div>
//                 </div>
             
//                         <button type="submit" className="btn btn-default"><a href="/all" validate="true"/>Register</button>
                       
                       
                       
//                         </div>
//                     </form>
                     
//                 </div>
//             </div>
//         </div>
//         </div>
   
         
//     </section>
//     )
// }
// export default ProjectRegister;
