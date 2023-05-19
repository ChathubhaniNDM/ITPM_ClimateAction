import './profileUpdate.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {isLength, isMatch} from './validation'
import {showSuccessMsg, showErrMsg} from './Notification'
import {fetchUser} from '../redux/action/authAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile(){

	const[userData , setUserData] = useState(null);
	let navigate = useNavigate()
	useEffect(()=> {
		const token = sessionStorage.getItem('token')
		async function getUser() {
			const userdata =await fetchUser(token);
			setUserData(userdata.data)
		}
		getUser();
	}, [])


	const updateUser = async () => {
		const res = await axios.put('http://localhost:8070/user/update' ,{user: userData}, {
			headers: {Authorization: sessionStorage.getItem('token')}
		})
		if(res?.status == 200){
			toast.success('User Updated Successfully', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
				setTimeout(() => {
					navigate('/profile')
				}, 3000);
		}else{
			toast.error('User Update Failed', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		}
		
	}

	const deleteUser = async () => {
		const res = await axios.delete(`http://localhost:8070/user/delete/${userData._id}` , {
			headers: {Authorization: sessionStorage.getItem('token')}
		})
		if(res?.data.msg == "Deleted Success!"){
			toast.error('User Deleted', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			setTimeout(() => {
				navigate('/login')
			}, 3000);
		}else{
			toast.error('User Delete Failed', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		}
	}

	
 return (
      <div className="container5">
		  <ToastContainer />
<div className="row gutters">
<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">

	
		
			



<img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="ava5" alt="avatar" border-radius="100" />

<h6>Change Profile Photo</h6>      

<input type="file" className="form-control" onChange={(e)=>{ setUserData({...userData , image: e.target.value})}}/>


				<h5 className="user-name">email</h5>
				<h6 className="user-name">{userData?.email}</h6>
			


</div>
<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
<div className="card h-100">
	
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h6 className="mb-2 text-primary">Profile Update</h6>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Enter full name"  value={userData?.fristname} onChange={(e)=>{ setUserData({...userData , fristname: e.target.value})}}  />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="eMail">Email</label>
					<input type="email" className="form-control" id="eMail" placeholder="Enter email ID" value={userData?.email} onChange={(e)=>{ setUserData({...userData , email: e.target.value})}} />
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="phone">Phone</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter phone number"  value={userData?.phone} onChange={(e)=>{ setUserData({...userData , phone: e.target.value})}}/>
				</div>
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="website">Birthday</label>
					<input type="date" className="form-control" id="website" placeholder="dd/mm/yy" value={userData?.birthday} onChange={(e)=>{ setUserData({...userData , birthday: e.target.value})}}/>
				</div>
			</div>
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			</div>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="Street">Address</label>
					<input type="name" className="form-control" id="Street" placeholder="Enter Address" value={userData?.address} onChange={(e)=>{ setUserData({...userData , address: e.target.value})}} />
				</div>
			</div>

			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="form-group">
					<label for="eMail">Membership</label>
				<a href='/membership'>	<input type="email" className="form-control" id="eMail" style={{background:"#778899"}} placeholder="Choose Membership" value={userData?.membership}  /></a>
				</div>
			
			
			
			
		</div>
		<div className="row gutters">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div className="text-right">
					<button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={() => deleteUser()}>Delete</button>
					<button type="button" id="submit" name="submit" className="btn btn-success" onClick={() => updateUser()}>Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</div>
    
    )
  }

  export default Profile