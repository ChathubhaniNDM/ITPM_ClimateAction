import axios from "axios";
import './projectreg.css';
import React,{ useState, useEffect} from "react";
import {  useNavigate, useParams } from 'react-router-dom';

function EditProfileDetails(props){

    const {id} = useParams();
	const Navigate = useNavigate()
    const [Pname, setProjectName] = useState("");
    const [PType, setProjectType] = useState("");
    const [CName, setCommunityName] = useState("");
    const [Description, setDescription] = useState("");
    const [SDate, setStartDate] = useState("");
    const [EDate, setEndDate] = useState("");
    const [EAmount, setEstimateAmount] = useState("");
    const [Document, setDocument] = useState("");
    const [projects, setProjects] = useState([]);

    const [formValues, setFormValues] = useState({

        Pname:"",
        PType:"",
        CName:"",
        Description:"",
        SDate:"",
        EDate:"",
        EAmount:"",
        Document:"",
        
    });

    

    useEffect (() => {
        axios.get(
            `http://localhost:8070/project/get/${id}`
        )
        .then((res) => {
            const {Pname,PType,CName,Description, SDate, EDate, EAmount} = res.data;
            console.log(Pname)
            console.log(PType)
            console.log(CName)
            console.log(Description)
            console.log(SDate)
            console.log(EAmount)
            console.log(EDate)
            
            setProjectName(Pname)
            setProjectType(PType)
            setCommunityName(CName)
            setDescription(Description)
            setStartDate(SDate)
            setEndDate(EDate)
            setEstimateAmount(EAmount)
        }).catch((err) =>
            console.log(err)
        );
    },[]);
    function sendData(e){
        e.preventDefault();

        const newProject = {
            Pname,
            PType,
            CName,
            Description,
            SDate,
            EDate,
            EAmount
        }
        axios.put(`http://localhost:8070/project/update/${id}`, newProject).then((res) =>{
            alert("Project Update")
            console.log(res.data)
            Navigate(`/update/${res.data._id}`)
        }).catch((err)=>{
            alert(err)
        })
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
                
                    <form className="row g-3 needs-validation" onSubmit={sendData} >
                    <div class="form-containerp">
                    <h2 class="title5"> PROJECT Edit FORM</h2>
                    <br/>
                    <br/>

                    <div className="form-group col-sm-12 flex-column d-flex">
                    <div className="form-label0"><label for="validationCustom01" className="form-label">Project Name</label></div>
                    <select className="form-control5 border border-success" id="validationCustom01" Value={Pname} onChange={(e)=>{setProjectName(e.target.value);} } required>
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
                    <select className="form-control5 border border-success" id="validationCustom01" defaultValue={PType}  required>
                        <option value="Ampara">--Select--</option>
                        <option value="Ampara">Ampara</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Batticaloa">Batticaloa</option>
                    </select> 
                    <div className="valid-feedback">Looks good!</div>
                    </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom03" className="form-label">Community Name</label>
                    <input type="text" className="form-control0 border border-success" id="validationCustom03" Value={CName} 
                    />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>
                </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Description</label>
                    <input type="text" className="form-control0 border border-success" id="validationCustom01" defaultValue={Description} required/>
                    <div className="valid-feedback">Looks good!
                    </div>
                </div>
                </div>

                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Start Date</label>
                    <input type="date" className="form-control6 border border-success" id="validationCustom01" defaultValue={SDate} required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">End Date</label>
                    <input type="date" className="form-control6 border border-success" id="validationCustom01" defaultValue={EDate} required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Estimated Amount</label>
                    <input type="text" className="form-control0 border border-success" id="validationCustom01" defaultValue={EAmount}  required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Add Document</label><br/>
                    <input type="file" className="form-control0 border border-success" id="exampleFormControlFile1" defaultValue={Document}  />
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
export default EditProfileDetails;