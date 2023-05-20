import "./adminagent.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"



function AdminAgent() {

    const [agents, setAgents] = useState([]);

    useEffect(() => {
        function getAgents() {
            axios.get("http://localhost:8070/Agent/").then((res) => {
                setAgents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAgents();
    }, [agents])


    const deleteAgent = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Agent/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Agent deleted")
                // getAgents()
            }
        })
}    }

 //search

 

    //endsearch

    return (
<div>
    
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

<div className="bodyt">

    <main class="table">

        <section class="table__header">
       
            <h1>All Agents</h1>

            <div class="input-group">
                <input type="search" placeholder="Search Data..." />
                <img className="searchbtn" src="image/search.png" alt=""/>
            </div>

            
        </section>

        <section class="table__body">
        
            <table>
                
                <thead>
                    <tr>
                        <th className="ths">  </th>
                        <th className="ths">Name</th>
                        <th className="ths">Address </th>
                        <th className="ths">E-mail </th>
                        <th className="ths">Phone </th>
                        <th className="ths">District </th>
                        <th className="ths">  </th>
                        <th className="ths">Action </th>
                        <th className="ths">  </th>

                    </tr>
                </thead>
                
                <tbody >
                    
                {
                    agents.map((Agent , index) => {
                        return (
                    <tr className="trstyle" key={index}>
                        <td> <img src={Agent.image} alt=""/></td>
                        <td className="tds">{  Agent.fullname  }  </td>
                        <td className="tds">{Agent.address}</td>
                        <td className="tds">{Agent.email}</td>
                        <td className="tds">{Agent.phone}</td>
                        <td className="tds">{Agent.district}</td>
                        <td> <Link to={"update/"+Agent._id}><img className="icone" src="/image/edit.png" alt="Icon Image"/></Link> </td>
                        <td> <img onClick={()=>{deleteAgent(Agent._id)}} className="icond" src="/image/delete.png" alt="Icon Image"/> </td>
                        <td> <Link to={"aprof/"+Agent._id}><img className="iconp" src="/image/user.png" alt="Icon Image"/> </Link></td>
                    </tr>
                    )
                    })
                }
                   
                </tbody>
            </table>
        </section>
    </main>
       
    </div>
    <br/><br/>
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

export default AdminAgent;

