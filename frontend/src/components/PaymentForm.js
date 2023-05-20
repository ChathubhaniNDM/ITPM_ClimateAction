//import './AddDonation.css';
import './PaymentForm.css';
import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
//import React, { useState, useEffect } from "react";

export default function AddPayment(){

    const Navigate = useNavigate()
    const [donation_amount, setAmount] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [expiry_date, setExpiry] = useState("");
    const [cvc, setCVC] = useState("");
    
    function sendData(e){
    e.preventDefault();
    
    const newPayment ={
     
      donation_amount,
      cardNo,
      expiry_date,
      cvc
      }
    
    
    axios.post("http://localhost:8070/payment/addPayment",newPayment).then((res)=>{
      alert("Payment Successfully")
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
  
 <form onSubmit={sendData} className='was-validated'>
  
 <div className="container p-0">
        <div className="card px-4">
            <p className="h8 py-3">Payment Details</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Amount</p>
                        <input value={donation_amount} className="form-control mb-3" type="float" placeholder="Amount" required
                        onChange={(e)=>{
                         setAmount(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control mb-3" maxLength={14} minLength={14} type="text" placeholder="1234 5678 435678" required
                        onChange={(e)=>{
                         setCardNo(e.target.value);
                        }}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input className="form-control mb-3" type="text" placeholder="MM/YYYY" required
                        onChange={(e)=>{
                         setExpiry(e.target.value);
                        }}/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 " maxLength={3} minLength={3} type="password" placeholder="***" required
                        onChange={(e)=>{
                         setCVC(e.target.value);
                        }}/>
                    </div>
                </div>
                <br></br>
                <div className="mb-3">
                <button className="add_payment" type="submit">
                <a href="/donation-table" validate="true"></a>
                PAY</button>
                </div>
            </div>
        </div>
    </div>
    </form>

 
) 
}
