import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../Pages/pages';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://ecom-back-1.onrender.com/api/register`,
                {
                    name, email, password, phone,answer
                })
            if (res && res.data.success) {
                toast.success('User Register Successfully!')
                navigate("/login")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }


    return (
        <Layout>
            <Link to="/"> <button className='btnBack'>Back</button></Link>
            <div className="containerA">
                <div className="signUp-wrapper">
                    <div>
                        <h1 className='title'>SIGN UP</h1>
                    </div>
                    <form className='form-wrapper' onSubmit={handleSubmit}>
                        <div className="name">
                            <label className='label'> Name</label>
                            <input
                                type="text"
                                className='input'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="name">
                            <label className='label'>Email </label>
                            <input
                                type="email"
                                className='input'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="email">
                            <label className='label'> Password</label>
                            <input
                                type="password"
                                className='input'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="password">
                            <label className='label'> Phone Number</label>
                            <input
                                type="number"
                                className='input'
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                required
                            />
                        </div>
                        <div className="password">
                            <label className='label'>What is your Favorite Game?</label>
                            <input
                                type="text"
                                className='input'
                                value={answer}
                                onChange={(e) => { setAnswer(e.target.value) }}
                                required
                            />
                        </div>
                        <div className='text'>
                            <p>Have an account ?</p>
                            <Link to="/login"> <p>Login</p></Link>
                        </div>
                        <div>

                            <button type='submit' className='submit'>
                                Register
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Signup;