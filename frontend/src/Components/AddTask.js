import React,{ useState } from "react";
import axios from "axios";
import './add.css';

function AddTask(){

    const [aname, setAname] = useState("");
    const [tprogramname, setTprogramname] = useState("");
    const [tdistrict, setTdistrict] = useState("");
    const [tcost, setTcost] = useState("");
    const [tdate, setTdate] = useState("");
    

    function sendData(e){
       e.preventDefault();
   
        const newTask ={
           
        aname,
        tprogramname,
        tdistrict,
        tcost,
        tdate,

        }
        axios.post("http://localhost:8070/task/add", newTask).then((res)=>{
            alert("Task Added")

       
        }).catch((err)=>{
            alert(err)
        })
    }
   
      
    return(
        
<div className="bgf"> 

 {/* Header Part */}
    <section id="header1">
        <div class="header2 containerl">
            <div class="nav-bar">
                <div class="brand9">
                    <img src="/image/planet.png" alt="img"/>
                </div>
                <div className="nl">
                    <div class="hamburger">
                        <div class="bar"></div>
                    </div>     
                        <a className="tab" href="/" data-after="Home">Home</a>
                        <a className="tab" href="#services" data-after="Service">Services</a>
                        <a className="tab" href="#projects" data-after="Projects">Projects</a>
                        <a className="tab" href="#about" data-after="About">About</a>
                        <a className="tab" href="#contact" data-after="Contact">Contact</a>
                        <a className="tab" href="/aat" data-after="Contact">Our Team</a>
                </div> 
            </div>
        </div>
    </section>

{/* End Header Part */}

        <section className="section-1">
        <br/><br/>
        <div className="containerg">
        
            <div className="row3">
                <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                
                    <form className="row g-3 needs-validation" onSubmit={sendData}>
                    <div class="form-containerg">
                    <h2 class="title5">PROGRAM REGISTRATION FORM</h2>
                    <br/>
                    <br/>

                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-12 flex-column d-flex">
                            <label for="validationCustom01" className="form-label">Agent Name</label>
                            <input type="text" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setAname(e.target.value);} } required/>
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                    </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom03" className="form-label">Program Name</label>
                    <input type="text" className="form-control border border-success" id="validationCustom03" onChange={(e)=>{setTprogramname(e.target.value);} } required/>
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>
                </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Cost(Rs.)</label>
                    <input type="number" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setTcost(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!
                    </div>
                </div>
                </div>

                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Register Date</label>
                    <input type="date" className="form-control1 border border-success" id="validationCustom01"  onChange={(e)=>{setTdate(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">District</label>
                    <select className="form-control2 border border-success" id="validationCustom01" onChange={(e)=>{setTdistrict(e.target.value);} } required>
                <option value="Ampara">--Select--</option>
                <option value="Ampara">Ampara</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Badulla">Badulla</option>
                <option value="Batticaloa">Batticaloa</option>
                <option value="Colombo">Colombo</option>
                <option value="Galle">Galle</option>
                <option value="Gampaha">Gampaha</option>
                <option value="Hambantota">Hambantota</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Kalutara">Kalutara</option>
                <option value="Kandy">Kandy</option>
                <option value="Kegalle">Kegalle</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Kurunegala">Kurunegala</option>
                <option value="Mannar">Mannar</option>
                <option value="Matale">Matale</option>
                <option value="Matara">Matara</option>
                <option value="Moneragala">Moneragala</option>
                <option value="Mullaitivu">Mullaitivu</option>
                <option value="Nuwara Eliya">Nuwara Eliya</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Puttalam">Puttalam</option>
                <option value="Ratnapura">Ratnapura</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Vavuniya">Vavuniya</option>
                </select> 
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>
             
                <button type="submit" className="btn btn-default"><a href="/all" validate="true"style={{textDecoration:'none', color:'white'}}/>Register</button>

                </div>
                </form>       
                </div>
            </div>
        </div>
        <br/><br/><br/><br/>
    </section>

    {/* Footer Part */}
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
    {/* End Footer Part */}  
</div>
    
  
    )
}

export default AddTask;