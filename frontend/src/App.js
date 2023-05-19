
import Login from './components/login';
import Signin from './components/signin';
import Profile from './components/profile';
import Home from './components/home';
import UserList from './components/userList';
import View from './components/view';
import {BrowserRouter as Router,Routes, Route , Navigate} from "react-router-dom"

function App() {

  return (
    <Router>
  <div>
  <Routes>
        <Route path='/log'  element={<Login/>} />
        <Route path='/home'  element={<Home/>}/>
        <Route path='/add'  element={<Signin/>} />
        <Route path='/profile'  element={<Profile/>} />
        <Route path='/list'  element={<UserList/>} />
        <Route path='/list/view/:id'  element={<View/>} />
        <Route path="*" element={<Navigate to="/log" replace />} />
      </Routes>
      
      </div>
    </Router>
    
  );
}

export default App;
