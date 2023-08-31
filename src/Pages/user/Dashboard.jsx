import React from 'react'
import Layout from '../pages'
import UserMenu from '../../common/UserMenu'
import { useAuth } from '../../context/auth'

function Dashboard() {
  const [auth]=useAuth()
  return (
    <Layout title={"Dashboard-Ecommerce_app"}>
     <div className='adminDashboardContainer'>
      <UserMenu/>
      <div className='contentBox'>
        <div className="card">
         <h3>User Name :  {auth?.user?.name}</h3>
         <h3>User Email :   {auth?.user?.email}</h3>
         <h3>User Contact :  {auth?.user?.phone}</h3>
        </div>
      </div>
     </div>
    </Layout>
  )
}

export default Dashboard