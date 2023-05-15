import './EditProfileAgent.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditProfileAgent = (props) => {

	const {id} = useParams();
	const Navigate = useNavigate()
	const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [district, setDistrict] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [formValues, setFormValues] = useState({

    fullname:"",
    address:"", 
    email:"",
    phone:"",
    gender:"",
    dob:"",
    district:"",
    description:"",
    image:""
});

	
//onSubmit handler
const onSubmit = (agentObject) => {
	axios
	.put(
		`http://localhost:8070/Agent/update/${id}`,
		agentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Agent successfully updated");
		props.history.push("/add");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize agent form  
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/Agent/get/${id}`
		
	)
	.then((res) => {
		const {fullname, address, email, phone, gender, dob, district, description, image} = res.data.agent;
		console.log(fullname)
		console.log(address)
		console.log(email)
    	console.log(phone)
    	console.log(gender)
    	console.log(dob)
    	console.log(district)
		console.log(description)
    	console.log(image)
		//setFormValues({...formValues,fullname, address, email, phone, gender, dob, district, description, image });
	    setFullname(fullname)
      	setAddress(address)
	    setEmail(email)
	    setPhone(phone)
      	setGender(gender)
      	setDob(dob)
      	setDistrict(district)
	    setDescription(description)
	    setImage(image)
	})
	.catch((err) => console.log(err));
}, []);
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
   
	axios.put(`http://localhost:8070/Agent/update/${id}`, newAgent).then((res) =>{
	  alert("Agent Updated" )
	 console.log(res.data)
	 Navigate(`/update/${res.data._id}`)

	}).catch((err)=>{
	  alert(err)
	})

   }

    return(

    <div class="containerad">

		 <div class="header8">
            <div class="header8-right1">
                <a class="active" href="/">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>

		<br/>
		<div class="main-body">
		<p className="proftopic"><span className="my">E</span>dit <span className="my">P</span>rofile</p>
		<br/><br/>
			<div class="row">
				<div class="col-lg-4">
					<div class="carda">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<br/>
								<br/>
								<img src={image} alt="Admin" class="profimage"/>
								<div class="mt-3">
									<h3>{fullname}</h3>
									<br/>
                                    <br/>
									<button class="btnallproj">All Projects</button>
									<button class="btnaddtask">Add Task</button>
								</div>
							</div>
							<br/>
							<br/>
							<br/>
							<ul class="list-group list-group-flush">

								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a class="lefttext" href=''>Added Projects Details</a>
								</li>

								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a class="lefttext" href=''>To Do List</a>	
								</li>

								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a class="lefttext" href=''>Community Details</a>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
				
				<div class="col-lg-8">
					<form class="cardb" onSubmit={sendData}>
						<div class="cardd" >
							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Full Name</h5>
								</div>
								<div class="rightcol">
                                	<input value={fullname} type="text" className="form-control"  onChange={(e)=>{setFullname(e.target.value);} } required/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
								<h5 class="mb-0">Address</h5>
							</div>
								<div class="rightcol">
                                	<input value={address} type="text" className="form-control"  onChange={(e)=>{setAddress(e.target.value);} } required/>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Email</h5>
								</div>

								<div class="rightcol">
									<input type="text" class="form-control" value={email} onChange={(e)=>{setEmail(e.target.value);} } required/>
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Phone</h5>
								</div>
								<div class="rightcol">
									<input type="text" class="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value);} } />
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Gender</h5>
								</div>
								<div class="rightcol">
									<input type="text" class="form-control" value={gender} onChange={(e)=>{setGender(e.target.value);} } />
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Date of Birth</h5>
								</div>
								<div class="rightcol">
									<input type="text" class="form-control" value={dob} onChange={(e)=>{setDob(e.target.value);} } required/>
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">District</h5>
								</div>
								<div class="rightcol">
									<input type="text" class="form-control" value={district} onChange={(e)=>{setDistrict(e.target.value);} } required/>
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Descrition</h5>
								</div>
								<div class="rightcol">
									<input type="text" class="form-control" value={description} onChange={(e)=>{setDescription(e.target.value);} } required/>
								</div>
							</div>

							<div class="row mb-3">
								<div class="col-sm-3">
									<h5 class="mb-0">Profile Picture</h5>
								</div>
								<div class="rightcol">
									<input type="text" class="form-control" value={image} onChange={(e)=>{setImage(e.target.value);} } required/>
								</div>
							</div>

							<br/><br/>

							<div class="row">								
								<div class="rightcol">	
									<button className="btnsave" type="submit" ><h4>Save Changes</h4></button>
								</div>
							</div> 
						</div>
					</form>					
				</div>			
			</div>
		</div>
		<br/>
		<br/>
		<br/>
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
export default EditProfileAgent;
