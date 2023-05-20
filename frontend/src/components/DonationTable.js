import './DonationTable.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
function DonationTable() {   


    const [donations, setDonations] = useState([]);
    

    useEffect(() => {
        function getDonations() {
            axios.get("http://localhost:8070/donation/allDonations").then((res) => {
                setDonations(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDonations();
    }, [donations]) 
     

    const deleteDonations = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/donation/deleteDonation/"+id).then((res)=>{
            if(res.status===200){
                alert("Donation deleted")
                // getGuides()
            }
        })
}    }
    
    
    
    return (
        <div className="container-donationtbl">
        <h1 className='title' style={{textAlign:'center', fontSize: '10mm'}} >Manage All Donations</h1>  
        <br></br>
            
        <a href="http://localhost:3000/addDonation"><button class="abc" type="button">Add Donations</button> </a> 
        <br/><br/>        
        <br></br>          
 
        <table className="table-donation">
            <thead style={{backgroundColor: '#82df83', height: '40px', fontSize: '4.5mm'}}>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Community</th>
                    <th scope="col">Project</th>
                    <th scope="col">Location</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Pay</th>
                </tr>
            </thead>
            <tbody style={{backgroundColor: '#bbffb9'}}>
                {
                    donations.map((Donation , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Donation.community}</td>
                                <td>{Donation.project_type}</td>
                                <td>{Donation.location}</td>
                                <td>{Donation.donation_amount}</td>
                                <td>{Donation.d_date}</td>
                                <td> <Link to={"editDonations/"+Donation._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteDonations(Donation._id)}} className='btn btn-danger'>Delete</button> </td>
                                <td> <Link to={"addPayment/"+Donation._id}><button  className='btn btn-warning'>Pay</button></Link> </td>
                                
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        
        <br></br>
            
            <a href="http://localhost:3000/report"><button class="repo" type="button">Generate Report</button> </a> 
            
         <br></br>  
            
          
       </div>
      
       
    )

    
}

export default DonationTable;