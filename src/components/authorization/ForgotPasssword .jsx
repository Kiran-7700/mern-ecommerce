
import Layout from '../../Pages/pages'
import React, { useState } from 'react'
import "./login.css"
import { Link,  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


function ForgotPassword () {
    const[email,setEmail]=useState("")
    const[newPassword,setNewPassword]=useState("")
    const[answer,setAnswer]=useState("")
    


    const navigate=useNavigate()
  
 

    const handleSubmit=async(e)=>{
        e.preventDefault();
       try {
        const res=await axios.post(`https://ecom-back-1.onrender.com/api/forgot-password`,
        {
            email , newPassword,answer
        })
        if(res && res.data.success){
             toast.success("login successfully")
              navigate("/login")
        }
        else{
            toast.error(res.data.message)
        }
       } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
       }
    }
  return (
    <Layout title={"Forgot-Password - Ecommerce-App"}>
         <Link to="/"> <button className='btnBack'>Back</button></Link>
        <div className="containerA">
                <div className="login-wrapper">
                    <div>
                        <h1 className='title'>Reset Password</h1>
                    </div>
                    <form className='form-wrapper' onSubmit={handleSubmit}>
                        <div className="email">
                            <label className='label'> Email</label>
                            <input 
                            type="email" 
                            className='input' 
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            required
                            />
                        </div>
                        <div className="email">
                            <label className='label'> Enter Your Game</label>
                            <input 
                            type="text" 
                            className='input' 
                            value={answer}
                            onChange={(e)=>{setAnswer(e.target.value)}}
                            required
                            />
                        </div>
                        <div className="password">
                            <label className='label'>New Password</label>
                            <input 
                            type="password" 
                            className='input' 
                            value={newPassword}
                            onChange={(e)=>{setNewPassword(e.target.value)}}
                            required
                            />
                        </div>
                        <div className='text'>
                            <p>Don't have an account ?</p>
                            <Link to="/signup"> <p>Sign up</p></Link>
                        </div>
                        
                        <div>
                             <button 
                             type='submit' 
                             className='submit'>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
    </Layout>
  )
}

export default ForgotPassword; 