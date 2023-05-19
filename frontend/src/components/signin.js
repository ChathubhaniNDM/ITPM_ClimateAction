import React,{useState} from "react";
import './signin.css';
import axios from "axios";
import {showErrMsg, showSuccessMsg} from './Notification'
import {isEmpty, isEmail, isLength, isMatch} from './validation'

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

 function Signin() {

  const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(email) || isEmpty(password) || isEmpty(cf_password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('http://localhost:8070/user/register', {
                name, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }

  }


    return (

    <div className="signin">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
   <form onSubmit={handleSubmit}>
      <div className="main">

        
       <div className='sub-main'>
         <div>
           
             <div className='container-image'>
               
  
            
             
  
          </div>
           <div className="box">
             <h1>Sign Up</h1>
             <div>
               
             <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
             </div>

  
             <div className='second-input'>
             <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} /> 
             </div>


             <div className='next-input'>
             <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
             </div>

             
               <button className="btn4" >SignUp</button>
             
             
             
             <p className='link'>
                <a href='/log'>Login</a>
             </p>
           </div>
         </div>
  
       </div>
      </div>
    </form>
    </div>
    );
  }
 
  
export default Signin
