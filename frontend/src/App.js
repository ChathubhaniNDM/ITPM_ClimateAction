
import Login from './components/login';
import Signin from './components/signin';

import Home from './components/home';

import {BrowserRouter as Router,Routes, Route , Navigate} from "react-router-dom"
import AllProjects from './components/allProjects';
import ProjectRegister from './components/projectRegister';
import ProjectReg from './components/ProjectReg';
import ProjectProfile from './components/ProjectProfile';
import EditProfileDetails from './components/editProjectDetails';
import ProjectsTable from './components/projectTable';
import ProjectReport from './components/genrateProjectReport';



function App() {

   

  return (
    <Router>
     <div>
      
      

     <Routes>
        <Route path='/log'  element={<Login/>} />
       <Route path='/home'  element={<Home/>}/>
        <Route path='/add'  element={<Signin/>} />
       <Route path='/all'  element={<AllProjects/>} />
        <Route path='/reg'  element={<ProjectReg/>} />
        <Route path='/projectpro'  element={<ProjectProfile/>} />
        <Route path='/project/update/:id'  element={<EditProfileDetails/>} />
          <Route path="*" element={<Navigate to="/log" replace />} />
          <Route path='/table'  element={<ProjectsTable/>} />
          <Route path='/pdf'  element={<ProjectReport/>} />
        
      </Routes>
      
      
     
     
     </div>
    </Router>
    
  );
}

export default App;
