import './AllDonations.css';
import './searchbox.css';
import axios from "axios";
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

export default function AllDonations(){

    const[donations, setDonations] = useState([]);
    const [searchInput,setSearchInput ]= useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const Navigate = useNavigate()
    useEffect(() => {
        function getDonations() {
            axios.get("http://localhost:8070/donation//allDonations").then((res) => {
                
                setDonations(res.data);
                

            }).catch((err)=>{
                alert(err.message)
            })
        }
        getDonations();

    }, [])
    //search packages
    useEffect(()=>{
      setFilteredResults(
        donations.filter((d)=>{
          return d.project_type.toLowerCase().includes(searchInput.toLowerCase())
        })

      )
    },[searchInput,donations])
    return(         
        <div className='back'>  
        <div className= 'containerS'>
        <div className = "d-flex justify-content-center h-100">
          <div className="search-box">
            <input type="text"  class="search-txt" placeholder="Search Donations.." onChange={(e) => setSearchInput(e.target.value)}/>
            <a className="search-btn"><i className="fas fa-search"></i>
            </a>
          </div>
          </div>
          </div>
          <a href="http://localhost:3000/addDonation"><button class="abc" type="button">Add Donations</button> </a>    
          <div className="container-donationlist">
            <h1 className='alldonationtitle'>See Donations</h1>
            <br></br>      

           <br></br>                             
            
            {donations && filteredResults.map(h => (
          <div className="card-donation"> 
          <td><tr>
            <h3 className='donationtitle' style={{textAlign: 'center'}}>{h.project_type}</h3>
            </tr>
            <br></br>
            <tr>
              Community: {h.community}
            </tr><tr>
              Location:{h.location}
            </tr><tr>
              Donation Amount:{h.donation_amount}
            </tr><tr>
              Date:{h.d_date}
            </tr></td>
            
            <br></br>  
             
          </div>



           
          
              
                ))}
                <br></br>
        <br></br>

        </div>
        </div>
    )
}