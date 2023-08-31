import React from 'react'
import Layout from '../pages'
import UserMenu from '../../common/UserMenu'

function Orders() {
  return (
    <Layout>
         <div className='adminDashboardContainer'>
            <UserMenu/>
            <div className='contentBox'>
            <h3>All Orders</h3>
            </div>
        </div>
    </Layout>
  )
}

export default Orders