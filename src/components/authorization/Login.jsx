import React, { useState } from 'react'
import "./login.css"
import { Link,  useNavigate ,useLocation } from 'react-router-dom';
import Layout from '../../Pages/pages';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../../context/auth';


function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [auth,setAuth]=useAuth()
    const navigate=useNavigate()
    const location=useLocation();
 

    const handleSubmit=async(e)=>{
        e.preventDefault();
       try {
        const res=await axios.post(`https://ecom-back-1.onrender.com/api/login`,
        {
            email , password
        })
        if(res && res.data.success){
             toast.success("login successfully")
             setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
             })
             localStorage.setItem('auth',JSON.stringify(res.data))
              navigate(location.state||"/")
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
        <Layout title={"login-Ecommerce-app"}>
            <Link to="/"> <button className='btnBack'>Back</button></Link>
            <div className="containerA">
                <div className="login-wrapper">
                    <div>
                        <h1 className='title'>LOGIN</h1>
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
                        <div className="password">
                            <label className='label'> Password</label>
                            <input 
                            type="password" 
                            className='input' 
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
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
                             className='submit'>Login</button>
                        </div>
                        <div>
                             <button 
                             type='button' 
                             className='submit' 
                             onClick={()=>navigate("/forgot-Password")}>
                                Forgot Password 
                             </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login;