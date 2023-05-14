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
                
                <tbody>
                    
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

    )
}

export default AdminAgent;

