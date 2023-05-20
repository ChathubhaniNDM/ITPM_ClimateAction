import './AddDonation.css';
import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddDonation(){

  const Navigate = useNavigate()
  const [community, setCommunity] = useState("");
  const [project_type, setProject] = useState("");
  const [location, setLocation] = useState("");
  const [donation_amount, setAmount] = useState("");
  const [d_date, setDate] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newDonaton ={
      community,
      project_type,
      location,
      donation_amount,
      d_date
    }

    
    axios.post("http://localhost:8070/donation/addDonation",newDonaton).then((res)=>{
      alert("Donation added")
      console.log(res.data)
      Navigate(`/donation-table`)
      //setCommunity("");
      //setProject("");
      //setLocation("");
      //setAmount("");
      //setDate("");

    }).catch((err)=>{
      alert(err)
    })
  }
  
 return(

<div className="container01">
  <center><h1>Please Give Your Donations</h1></center>
  <br></br>
  
  
 <form onSubmit={sendData}>
  
 <div className="mb-3">
    <label for="community">Community</label>
    <input type="text" className="form-control01" id="community" placeholder="Enter Community" required
    onChange={(e)=>{
      setCommunity(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label for="project_type">Project</label>
    <input type="text" className="form-control01" id="project_type" placeholder="Enter Project" required
    onChange={(e)=>{
      setProject(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label for="location">Location</label>
    <input type="text" className="form-control" id="location" placeholder="Enter location" required
    onChange={(e)=>{
      setLocation(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label for="donation_amount">Amount</label>
    <input type="float" className="form-control" id="donation_amount" placeholder="10000.00LKR" required
    onChange={(e)=>{
      setAmount(e.target.value);
    }}/>
  </div>
  <div className="mb-3">
    <label for="d_date">Date</label>
    <input type="Date" className="form-control" id="d_date" placeholder="12/05/23" required
    onChange={(e)=>{
      setDate(e.target.value);
    }}/>
  </div>
  
  <br></br>
  <div className="mb-3">
  <button className="add_donat" type="submit">
  <a href="/donation-table" validate="true"></a>
  Save</button>
  </div>
</form>
</div>
 
) 
}