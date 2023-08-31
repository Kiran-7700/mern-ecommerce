import React from 'react'
import Layout from "../pages"
import AdminMenu from '../../common/AdminMenu';
import "./Admindashboard.css";
import { useAuth } from '../../context/auth';


function AdminDashboard() {
  const [auth]=useAuth()
  return (
    <Layout>
        <div className='adminDashboardContainer'>
          <AdminMenu/>
           <div className='contentBox'>
            <div className="card">
              <h3>Admin Name :  {auth?.user?.name}</h3>
              <h3>Admin Email : {auth?.user?.email}</h3>
              <h3>Admin Contact : {auth?.user?.phone}</h3>
            </div>
           </div>
        </div>
        
    </Layout>
  )
}

export default AdminDashboard;