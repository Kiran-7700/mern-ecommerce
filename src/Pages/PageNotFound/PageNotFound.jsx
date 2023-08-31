import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../pages';

function PageNotFound() {
    return (
        <Layout>
            <div className='pageNotFoundContainer'>
                <h1 className="pnf-title">404</h1>
                <h2 className="pnf-heading">Oops ! Page Not Found</h2>
                <Link to="/" >
                   <button> Go Back</button>
                </Link>
            </div>
        </Layout>
    )
}

export default PageNotFound;