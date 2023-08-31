import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";


const PrivateRoute=()=>{
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
          const res = await axios.get("https://ecom-back-1.onrender.com/api/user-auth",
          {
            headers:{
                'authorization': "Bearer " + auth?.token
                
            }
          })
          if (res.data.ok) {
            setOk(true);
          } else {
            setOk(false);
          }
        };
        if (auth?.token) authCheck();
      }, [auth?.token]);


      return ok ? <Outlet/> : <Spinner/>
}

export default PrivateRoute;