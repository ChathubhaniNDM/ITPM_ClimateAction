import axios from "axios";
import './projectreg.css';
import React,{ useState, useEffect} from "react";


function ProjectReg(){

    const [Pname, setProjectName] = useState("");
  const [PType, setProjectType] = useState("");
  const [CName, setCommunityName] = useState("");
  const [Description, setDescription] = useState("");
  const [SDate, setStartDate] = useState("");
  const [EDate, setEndDate] = useState("");
  const [EAmount, setEstimateAmount] = useState("");
  const [Document, setDocument] = useState("");
  const [projects, setProjects] = useState([]);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    function getProjects() {
      axios
        .get("http://localhost:8070/project/")
        .then((res) => {
          setProjects(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getProjects();
  }, []);

  function sendData(e) {
    e.preventDefault();

    const newProject = {
      userId,  
      PType,
      Pname,
      CName,
      Description,
      SDate,
      EDate,
      EAmount,
      Document,
    };
    axios
      .post("http://localhost:8070/project/create", newProject, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        alert("Project Added");
      })
      .catch((err) => {
        alert(err);
      });
  }
   
      
    return(
        
        <div className="bgp"> 

        <div class="header8">
            <div class="header8-right1">
                <a class="active" href="/">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>

        <section className="section-3">
        <br/><br/>
        <div className="containerp">
        
            <div className="row4">
                <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                
                    <form className="row g-3 needs-validation" onSubmit={sendData}>
                    <div class="form-containerp">
                    <h2 class="title5"> PROJECT REGISTRATION FORM</h2>
                    <br/>
                    <br/>

                    <div className="form-group col-sm-12 flex-column d-flex">
                    <div className="form-label0"><label for="validationCustom01" className="form-label">Community Name</label></div>
                    <select className="form-control5 border border-success" id="validationCustom01" onChange={(e)=>{setCommunityName(e.target.value);} } required>
                        <option value="Ampara">--Select--</option>
                        <option value="Ampara">Ampara</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Batticaloa">Batticaloa</option>
                    </select> 
                    <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="form-group col-sm-12 flex-column d-flex">
                    <div className="form-label0"><label for="validationCustom01" className="form-label">Project Type</label></div>
                    <select className="form-control5 border border-success" id="validationCustom01" onChange={(e)=>{setProjectType(e.target.value);} } required>
                        <option value="">--Select--</option>
                        <option value="Tree Planting Projects">Tree Planting Projects</option>
                        <option value="Farming Projects">Farming Projects</option>
                        <option value="Recycling Projects">Recycling Projects</option>
                        <option value="Clean Energy Projects">Clean Energy Projects</option>
                        <option value="Water Conservation">Water Conservation</option>
                        <option value="Environmental Education/Awareness Projects">Environmental Education/Awareness Projects</option>
                        <option value="Conservation and Restoration Projects">Conservation and Restoration Projects</option>
                    </select> 
                    <div className="valid-feedback">Looks good!</div>
                    </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom03" className="form-label">Project Name</label>
                    <input type="text" className="form-control0 border border-success" id="validationCustom03" onChange={(e)=>{setProjectName(e.target.value);} } required/>
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>
                </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Description</label>
                    <input type="text" className="form-control0 border border-success" id="validationCustom01"  onChange={(e)=>{setDescription(e.target.value);} }  required/>
                    <div className="valid-feedback">Looks good!
                    </div>
                </div>
                </div>

                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Start Date</label>
                    <input type="date" className="form-control6 border border-success" id="validationCustom01"  onChange={(e)=>{setStartDate(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">End Date</label>
                    <input type="date" className="form-control6 border border-success" id="validationCustom01"  onChange={(e)=>{setEndDate(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Estimated Amount</label>
                    <input type="text" className="form-control0 border border-success" id="validationCustom01" onChange={(e)=>{setEstimateAmount(e.target.value);} }required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Add Document</label><br/>
                    <input type="file" className="form-control0 border border-success" id="exampleFormControlFile1" onChange={(e)=>{setDocument(e.target.value);} } />
                </div>
                </div>
             
                        <button type="submit" className="btn btn-default"><a href="/all" validate="true"style={{textDecoration:'none', color:'white'}}/>Save</button>
                        <br/>
                        <button type="submit" className="btn btn-default"><a href="" validate="true"style={{textDecoration:'none', color:'white'}}/>Close</button>
                       
                       
                       
                        </div>
                    </form>
                     
                </div>
            </div>
        </div>
        <br/><br/><br/><br/>
   
    </section>
    <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>G</span>reen <span>P</span>lanet</h1>
      </div>
      <h2>Find us on</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=118497&format=png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=48839&format=png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=16713&format=png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" /></a>
        </div>
      </div>
      <p>Copyright © 2023 GreenPlanet. All rights reserved</p>
    </div>
  </section>
    
    </div>
    
  
    )
}
export default ProjectReg;