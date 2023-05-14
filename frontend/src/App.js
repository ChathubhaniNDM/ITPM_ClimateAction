import './App.css';
import AddAgent from './Components/AddAgent'; 
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllAgent from './Components/AllAgent';
import Add from './Components/add';

import AgentTable from './Components/AgentTable';
import EditProfileAgent from './Components/EditProfileAgent';
import AgentProfile from './Components/Agent_Profile';
import AgentProfEdit from './Components/AgentProfEdit';
import ViewMoreAgent from './Components/ViewMoreAgent';
import Home from './Components/Home';
import AdminAgent from './Components/AdminAgent';
import AgentWorks from './Components/AgentWorks';







function App() {
  return (
    
    <Router>
    <div>
        <Routes>
          
          <Route path='/add' element={<AddAgent/>} />
          <Route path='/allagents' element={<AllAgent/>} />
          <Route path='/a' element={<Add/>} />
          <Route path='atable/aprof/:id' element={<AgentProfile/>} />
          <Route path='/atable' element={<AgentTable/>} />
          <Route path='/atable/update/:id' element={<EditProfileAgent/>} />
          <Route path='/aprof/update/:id' element={<AgentProfEdit/>} />
          <Route path='/viewmoreagent/:id' element={<ViewMoreAgent/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/aat' element={<AdminAgent/>}/>
          <Route path='/aat/update/:id' element={<EditProfileAgent/>} />
          <Route path='aat/aprof/:id' element={<AgentProfile/>} />
          <Route path='awork' element={<AgentWorks/>} />


 

          
  
        </Routes>

    </div>
</Router>
  );
}

export default App;
