import React,{ useState, useEffect} from "react";
import axios from "axios";
import './allProjects.css'

function AllProjects(){

    const [projects, setProjects] = useState([]);
    
        useEffect(() => {
            function getProjects() {
                axios.get("http://localhost:8070/project/").then((res) =>{
                    setProjects(res.data);
                }).catch((err) => {
                    alert(err.message);
                })
            }
            getProjects();
        }, [projects])


    return(
        <section >
          
       <div class="row2">
       <div class="col-xs-12 col-sm-9">
         <div class="form-horizontal">
             <div class="panel panel-default">
               
             </div>
             <div className="addpro"><button  className='btnnewpr'><h4>Add Project<span className="pro">..</span><img className="imgn" src="/image/add.png"/></h4></button></div>
           <div class="panel panel-default">
           {projects && projects.map(p => (  
             <div class="panel1-body1">
               <div class="texttitle">
                 <h4 className="topicpr" >{p.Pname}t</h4>
                 
               </div>
               <br/>
               <hr/>         
                 <div class="textin">
                  <h5>{p.CName}</h5>
                 </div>
                 <br/>
                 <div class="textin">
                  <h5>{p.Description}</h5>
                 </div>
                 <br/>
                 <div class="textin">
                  <h5>{p.SDate}</h5>
                 </div>
                 <br/>
                 <div class="textin">
                  <h5>{p.EDate}</h5>
                 </div>
                 <br/>
                 <div class="textin">
                  <h5>{p.EAmount}</h5>
                 </div>
                 <br/>
             </div>
             ))}
           </div>
         </div>
       </div>
     </div>
        
                
                </section>
    )
}
export default AllProjects;