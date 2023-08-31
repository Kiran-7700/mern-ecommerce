import React from 'react'
import Layout from '../pages'
import AdminMenu from '../../common/AdminMenu';
import "./Admindashboard.css";

function Users() {
  return (
    <Layout>
        <div className='adminDashboardContainer'>
            <AdminMenu/>
            <div className='contentBox'>
            <h3>All users</h3>
            </div>
        </div>
    </Layout>
  )
}

export default Users;