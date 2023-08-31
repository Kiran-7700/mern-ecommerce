import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Spinner.css"
import { useNavigate ,useLocation} from 'react-router-dom';



function Spinner({path="login"}) {
    const [count, setCount] = useState(3)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);

        count === 0 && navigate(`/${path}`, {
            state: location.pathname,
          })

        return () => clearInterval(interval)
    }, [count, navigate,location,path])
    return (
        <>
            <h1 className='text_center'>Redirecting to you in {count} second</h1>
            <CircularProgress className='spinner' />
        </>
    )
}

export default Spinner;