import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Add from './Components/add';
import EditProfileAgent from './Components/EditProfileAgent';
import AgentProfile from './Components/Agent_Profile';

import Home from './Components/Home';
import AdminAgent from './Components/AdminAgent';

import AddTask from './Components/AddTask';
import TaskTable from './Components/TaskTable';
import AllTask from './Components/AllTask';
import AllAgents from './Components/AllAgent';








function App() {
  return (
    
    <Router>
    <div>
        <Routes>
          
          <Route path='/addtask' element={<AddTask/>} />
          <Route path='/alltask' element={<AllTask/>} />
          <Route path='/allagent' element={<AllAgents/>} />
          <Route path='/a' element={<Add/>} />
          <Route path='atable/aprof/:id' element={<AgentProfile/>} />
          <Route path='/ttable' element={<TaskTable/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/aat' element={<AdminAgent/>}/>
          <Route path='/aat/update/:id' element={<EditProfileAgent/>} />
          <Route path='aat/aprof/:id' element={<AgentProfile/>} />

   
  
        </Routes>

    </div>
</Router>
  );
}

export default App;
