import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import "./tasktable.css";

function TaskTable() {

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


    const deleteTask = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/task/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Task deleted")
                // getTasks()
            }
        })
}    }

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
            <br/>
        <button className='btnrepo'>Generate a Report</button>
        <br/>
        <table className="tablet">
            <thead>
                <tr className='trt'>
                    <th className='tht' scope='col'>#</th>
                    <th className='tht' scope="col">Name</th>
                    <th className='tht' scope="col">Program Name</th>
                    <th className='tht' scope="col">District</th>
                    <th className='tht' scope="col">Date</th>
                    <th className='tht' scope="col">Cost</th>
                    <th className='tht' scope="col">Update</th>
                    <th className='tht' scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((Task , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Task.aname}</td>
                                <td>{Task.tprogramname}</td>
                                <td>{Task.tdistrict}</td>
                                <td>{Task.tcost}</td>
                                <td>{Task.tdate}</td>
                                <td> <Link to={"update/"+Task._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteTask(Task._id)}} className='btn btn-danger'>Delete</button> </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <br/><br/><br/>

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

export default TaskTable;

