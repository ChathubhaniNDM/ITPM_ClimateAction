import React, { useState, useEffect } from "react";
import './projectprof.css';
import axios from "axios";
import { Link } from "react-router-dom";

function ProjectProfile() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const userId = sessionStorage.getItem('userId');
  const [communityName, setCommunityName] = useState('');

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    axios.get(`http://localhost:8070/project/getProjects/${userId}`, {
      headers: { Authorization: sessionStorage.getItem('token') }
    })
      .then((res) => {
        setProjects(res.data);
        setCommunityName(res.data.CName);
      })
      .catch((err) => {
        alert("Please Login First");
      });
  };

  const deleteProject = (id) => {
    var answer = window.confirm("Are you sure?");
    if (answer) {
      axios.delete(`http://localhost:8070/project/delete/${id}`)
        .then((res) => {
          if (res.status === 200) {
            alert("Project deleted");
            getProjects();
          }
        });
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    return (
      project.Pname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.CName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.Description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="containerproj bootstrap snippets bootdeys">
      <div className="row2">
        <div className="col-xs-12 col-sm-9">
          <div className="form-horizontal">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <img src="https://static.vecteezy.com/system/resources/previews/008/931/593/large_2x/confident-cheerful-male-lawyer-reads-business-news-has-gentle-smile-dressed-in-formal-clothes-poses-in-urban-setting-businessman-checks-email-or-updates-profile-on-digital-tablet-computer-photo.JPG" className="img-round profile1-avatar1" alt="User avatar" />
                <div className="comname">{communityName}</div>
              </div>
            </div>
            <div className="search-container">
              <input className="SearchBar"
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="addpro">
              <button className="btnnewpr">
                <h4>Add New Project<span className="pro">..</span><img className="imgn" src="/image/add.png" /></h4>
              </button>
            </div>

            <div className="panel panel-default">
              {filteredProjects.map((p) => (
                <div className="panel1-body1" key={p._id}>
                  <div className="texttitle">
                    <h4 className="topicpr">{p.Pname}</h4>
                    <div className="editbtnp">
                      <Link to={"/project/update/" + p._id} className="btneditp">
                        <button className="btndelp">
                          <h4>Edit</h4>
                        </button>
                      </Link>
                    </div>
                    <div className="delbtnp">
                      <button className="btndelp" onClick={() => { deleteProject(p._id) }}>
                        <h4>Delete</h4>
                      </button>
                    </div>
                  </div>
                  <br />
                  <hr />
                  <div className="textin">
                    <h5>{p.CName}</h5>
                  </div>
                  <br />
                  <div className="textin">
                    <h5>{p.Description}</h5>
                  </div>
                  <br />
                  <div className="textin">
                    <h5>{p.SDate}</h5>
                  </div>
                  <br />
                  <div className="textin">
                    <h5>{p.EDate}</h5>
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <section id="footer">
        <div className="footer container">
          <div className="brand">
            <h1><span>G</span>reen <span>P</span>lanet</h1>
          </div>
          <h2>Find us on</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/?size=512&id=118497&format=png" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/?size=512&id=48839&format=png" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/?size=512&id=16713&format=png" /></a>
            </div>
            <div className="social-item">
              <a href="#"><img src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png" /></a>
            </div>
          </div>
          <p>Copyright © 2023 GreenPlanet. All rights reserved</p>
        </div>
      </section>
    </div>
  );
}

export default ProjectProfile;
