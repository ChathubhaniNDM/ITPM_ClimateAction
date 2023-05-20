import './DonationTable.css';
import './donationreport.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function DonationReport() {

    //Generate a all packages pdf
    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 900]
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("Donation Report_2021-2-3.pdf");
      });
    };

    //end generating pdf..........................

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
    
    return (
      
      < div className="container-report">
                
      <div ref={docToPrint}>  
      <h1 className='title' style={{ textAlign: 'center' , color: 'black', fontSize: '13' }}>Saved donations here....</h1>
      <br></br> 
      <br></br>
      <br></br>             

      <table class="table-report">
          <thead  style={{color:'black' , backgroundColor:'blue', height: '60px', fontSize: '4mm'}}>
              <tr>
                  <th scope='col'>#</th>
                  <th scope="col">Community</th>
                  <th scope="col">Project</th>
                  <th scope="col">Location</th>
                  <th scope="col">Donation Amount</th>
                  <th scope="col">Date</th>
              </tr>
          </thead>
          <tbody style={{ backgroundColor: 'lightblue' }}>
              {
                  donations.map((Donation, index) => {
                      return (
                          <tr key={index}>
                              <th scope="row">{index+1}</th>
                              <td>{Donation.community}</td>
                              <td>{Donation.project_type}</td>
                              <td>{Donation.location}</td>
                              <td>{Donation.donation_amount}</td>
                              <td>{Donation.d_date}</td>
                              </tr>
                      )
                  })
              }

          </tbody>
      </table>
      </div>
      <button className="newCustomer_btn" onClick={printDocument}>
          Generate PDF
          </button>
     </div>
     
  )
  
}

export default DonationReport;