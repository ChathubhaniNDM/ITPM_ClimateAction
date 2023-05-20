import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'
import {Link} from "react-router-dom";

function AllAgents() {
  const [agents, setAgents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAgents = agents.filter((agent) =>
    agent.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );



    return(
        
<body>

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

{/* End Header Part */}
<div className='sear'>
  <section id="ourteam">
  
    <div class="ourteam container">
      <div class="ourteam-top">
        <h1 class="section-title"><span>O</span>ur<span>T</span>eam</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
          magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
          voluptatum explicabo!</p>
      </div>
      <br/><br/><br/>
      <input
              type="text"
              placeholder="Search agent..."
              value={searchQuery}
              onChange={handleSearch}
            />
      
        <h2 className="section-subtitle"><span>A</span>gents</h2>
        
      <div class="ourteam-bottom">
      {filteredAgents.map((agent) => (

        <div class="ourteam-item">
         <div class="icon"><img src={agent.image}/></div>
           <h2 className="theme-color">{agent.fullname}</h2>
                    <h5 className="dark-color">E-mail:   {agent.email}</h5>
                    <h5 className="dark-color">Contact No:   {agent.phone}</h5>
                    <h5 className="dark-color">District:   {agent.district}</h5>
                    <h5 className="dark-color">Description:{agent.description}</h5>  
                     <Link to={"view/"+agent._id}><button  className='btn btn-success'>View More</button></Link> 
                  
        </div>     
		))}
      </div>
    </div>
  </section>
 
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
</body>



    )
}
export default AllAgents;