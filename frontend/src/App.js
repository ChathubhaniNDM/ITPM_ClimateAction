import './App.css';
import './components/my.css';
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddDonation from './components/AddDonation';
import AllDonations from './components/AllDonations';
import DonationTable from './components/DonationTable';
import UpdateDonation from './components/UpdateDonation';
import PaymentForm from './components/PaymentForm';
import DonationReport from './components/DonationReport';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        
        
        <Route path='/addDonations' element={<AddDonation/>}/>
        <Route path='/donation-table' element={<DonationTable/>}/>
        <Route path='/allDonations' element={<AllDonations/>}/>
        <Route path='/donation-table/editDonations/:id' element={<UpdateDonation/>}/>
        <Route path='/donation-table/addPayment/:id' element={<PaymentForm/>}/>
        <Route path = '/report' element = {<DonationReport/>}/>
        <Route path = '/home' exact element= {<Home/>}/>
      </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
