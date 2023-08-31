
import UserMenu from '../../common/UserMenu'
import Layout from '../pages';
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("https://ecom-back-1.onrender.com/api/profile", {
        name,
        email,
        password,
        phone,
        address,
      },
      {
        headers:{
            'authorization': "Bearer " + auth?.token
        }
      }
      );
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>

      <div>
        <UserMenu/>
      </div>
      <div className="containerA">
                <div className="profile-wrapper">
                    <div>
                        <h1 className='title'>User Profile</h1>
                    </div>
                    <form className='form-wrapper' onSubmit={handleSubmit}>
                        <div className="name">
                            <label className='label'> Name</label>
                            <input
                                type="text"
                                className='input'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                
                            />
                        </div>
                        <div className="name">
                            <label className='label'>Email </label>
                            <input
                                type="email"
                                className='input'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                
                                disabled
                            />
                        </div>
                        <div className="email">
                            <label className='label'> Password</label>
                            <input
                                type="password"
                                className='input'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                
                            />
                        </div>
                        <div className="password">
                            <label className='label'> Phone Number</label>
                            <input
                                type="number"
                                className='input'
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                
                            />
                        </div>
                        <div>

                            <button type='submit' className='submit'>
                                Update
                            </button>

                        </div>
                    </form>
                </div>
            </div>
    </Layout>
  );
};

export default Profile;