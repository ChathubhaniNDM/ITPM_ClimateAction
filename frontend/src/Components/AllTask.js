import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './alltask.css';

function AllTask() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        function getTasks() {
            axios.get("http://localhost:8070/task/").then((res) => {
                setTasks(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getTasks();
    }, [tasks])


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

   
        <div class="containertask">
            
        <div class="rowtask">
          
          <div class="col-lg-9 mb-3">
          {tasks && tasks.map(task => (
            <div class="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-1 border-right-1 border-bottom-1 rounded-1">
              <div class="row align-items-center">
              
                <div class="col-md-8 mb-3 mb-sm-0">
                  <h3>
                    <a href="#" class="text-success">Program Name - {task.tprogramname}</a>
                  </h3><br/>
                  <p class="text-sm">Agent Name - {task.aname}</p>
                  <p class="text-sm">District - {task.tdistrict}</p>
                 
                </div>
                <div class="col-md-4 op-7">
                  <div class="row text-center op-7">
                    <div class="col px-5"> <i class="ion-connection-bars icon-1x"></i> <span class="d-block text-sm">{task.tdate}</span> </div>
                    <div class="col px-5"> <i class="ion-connection-bars icon-1x"></i> <span class="d-block text-sm">{task.tcost}</span> </div>
                  </div>
                </div>

              </div>
            </div>
           ))}
            
          </div>
         <button className='addt'>Add Task</button>

          </div>
        </div>

  
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

export default AllTask;