//import './my.css';
import './UpdateDonation.css';
import './AddDonation.css';
// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// EditDonation Component
    const EditDonation = (props) => {
	  const {id} = useParams();
	  const Navigate = useNavigate()
	  const[community, setCommunity] = useState("");
    const[project_type, setProject] = useState("");
    const[location, setLocation] = useState("");
    const[donation_amount, setAmount] = useState("");
    const[d_date, setDate] = useState("");
    
    const [formValues, setFormValues] = useState({
        community:"",
        project_type:"",
        location:"",  
        donation_amount:"",
        d_date:""
        
});
	
//onSubmit handler
const onSubmit = (donationObject) => {
	axios
	.put(
		`http://localhost:8070/donation/updateDonation/${id}`,
		donationObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Donation successfully updated");
		props.history.push("/addDonation");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize donation form
useEffect(() => {
	axios
	.get(
    `http://localhost:8070/donation/getone/${id}`
		
	)
	.then((res) => {
		const { community,project_type,location,donation_amount,d_date} = res.data.donation;
		/*console.log(h_name)
		console.log(h_email)
		console.log(h_telephone)
		console.log(h_email)
		console.log(h_location)
		console.log(h_images)*/
		//setFormValues({...formValues,h_name, h_email, h_telephone,   h_description, h_location, h_images });
       setCommunity(community)
	      setProject(project_type)
	      setLocation(location)
	      setAmount(donation_amount)
	      setDate(d_date)
        
	})
	.catch((err) => console.log(err));
}, []);
function sendData(e){
	e.preventDefault();

	const newDonation = {

        community,
        project_type,
        location,
        donation_amount, 
        d_date
        
	}
   
	axios.put(`http://localhost:8070/donation/updateDonation/${id}`, newDonation).then((res) =>{
	  alert("Donation Updated" )
	  console.log(res.data)
    Navigate(`/donation-table`)

	}).catch((err)=>{
	  alert(err)
	})

   }
// Return donation form
return (
  
  <div className="container-update">
       
  <h1 style={{fontSize:'9mm'}}>Update Your Donations</h1>
  <br></br>
  <br></br>
  <br></br>
   <form onSubmit={sendData} className="was-validated">
   <div class="mb-3">
     <label for="community" className="form-label">Community</label>
     <input value={community}type="text" className="form-control1 is-invalid" id="community" placeholder=" Enter package name" required

       onChange={(e)=>{
        setCommunity(e.target.value);
       }}
     /> 
   </div>

   <div className="mb-3">
     <label for="project_type" className="form-label">Project</label>
     <input value={project_type}type="text" className="form-control2" id="project_type" placeholder="Enter package duration" required
     
     onChange={(e)=>{
      setProject(e.target.value);
     }}/>
   </div>

   <div className="mb-3">
     <label for="location" className="form-label">Location</label>
     <input value={location}  type="telephone"  className="form-control3" id="location" placeholder="Enter number of people"  required
     
     onChange={(e)=>{
      setLocation(e.target.value);
     
       
     }}/>
   </div>

   <div className="mb-3">
     <label for="donation_amount" className="form-label">Amount</label>
     <input value={donation_amount}type="text" className="form-control4" id="donation_amount" placeholder="Enter package description" required
     
     onChange={(e)=>{
      setAmount(e.target.value);
     }}/>
   </div>
 
   <div className="mb-3">
     <label for="d_date" className="form-label">Date</label>
     <input value={d_date}type= "text" className="form-control5" id="d_date" placeholder="LKRXXXXX" required
     
     onChange={(e)=>{
      setDate(e.target.value);
     }}/>
   </div>
 
   <div className="mb-3">
      <a href="/donation-table" style={{textDecoration:'none', color:'white'}}>
        <button className="update-donation" type="submit">                  
        UPDATE</button></a>
   </div>

 </form>
 
 </div>
    );
    };
    
    // Export EditDonation Component
    export default EditDonation;
    