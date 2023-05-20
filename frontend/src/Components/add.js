import React,{ useState } from "react";
import axios from "axios";
import './add.css';
import { Navigate } from "react-router-dom";


function Add(){

    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");  
    const [district, setDistrict] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    function sendData(e){
       e.preventDefault();
   
        const newAgent ={
           
            fullname,
            address,
            email,
            phone,
            gender,
            dob,
            district,
            description,
            image,

        }
        axios.post("http://localhost:8070/Agent/add", newAgent).then((res)=>{
            alert("Agent Added")
            Navigate("/")
       
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
                    <h2 class="title5">REGISTRATION FORM</h2>
                    <br/>
                    <br/>

                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-12 flex-column d-flex">
                            <label for="validationCustom01" className="form-label">Full Name</label>
                            <input type="text" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setFullname(e.target.value);} } required/>
                            <div className="valid-feedback">Looks good!</div>
                        </div>
                    </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom03" className="form-label">Address</label>
                    <input type="text" className="form-control border border-success" id="validationCustom03" onChange={(e)=>{setAddress(e.target.value);} } required/>
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>
                </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">E-mail</label>
                    <input type="email" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setEmail(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!
                    </div>
                </div>
                </div>

                <div className="row justify-content-between text-left"> 
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Phone</label>
                    <input type="telephone" maxLength={10} minLength={10} className="form-control1 border border-success" id="validationCustom01" onChange={(e)=>{setPhone(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!
                    </div>
                </div>

                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Gender</label>
                    
                    <label className="radioa">
                        <input type="radio" name="gender" value="male"onChange={(e)=>{setGender(e.target.value);} }/>
                        Male</label>
                        <label><input type="radio" name="gender" value="female"onChange={(e)=>{setGender(e.target.value);} }/>
                        Female</label>
                        <label><input type="radio" name="gender" value="female"onChange={(e)=>{setGender(e.target.value);} }/>
                        Other
                    </label> 
                   
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>

                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control1 border border-success" id="validationCustom01"  onChange={(e)=>{setDob(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                
                <div className="form-group col-sm-6 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">District</label>
                    <select className="form-control2 border border-success" id="validationCustom01" onChange={(e)=>{setDistrict(e.target.value);} } required>
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
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Description</label>
                    <input type="text" className="form-control border border-success" id="validationCustom01" onChange={(e)=>{setDescription(e.target.value);} } required/>
                    <div className="valid-feedback">Looks good!</div>
                </div>
                </div>
                <div className="row justify-content-between text-left">
                <div className="form-group col-sm-12 flex-column d-flex">
                    <label for="validationCustom01" className="form-label">Upload a Photo</label><br/>
                    <input type="text" className="form-control border border-success" id="exampleFormControlFile1" onChange={(e)=>{setImage(e.target.value);} } />
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
export default Add;