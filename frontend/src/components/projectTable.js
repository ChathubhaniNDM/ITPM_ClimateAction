import React, { useState, useEffect } from "react";
import axios from "axios";
import "./projectTable.css";

function ProjectsTable() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/project/")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);



  return (
    <section>
      <div className="container">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Community Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Estimated Amount</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p._id}>
                  <td>{p.Pname}</td>
                  <td>{p.CName}</td>
                  <td>{p.Description}</td>
                  <td>{p.SDate}</td>
                  <td>{p.EDate}</td>
                  <td>{p.EAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTable;
