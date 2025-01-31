import React from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'
const Dashboard = () => {
  return (
    <>
<Header insideDashboard ={true}/>
<div style={{marginTop:'100px'}} className="container-fluid">
  <div className="row mt-3 ">
    <div className="col-lg-6">
      <h1>Welcome <span className='text-warning'>User</span>,</h1>
      <View/>
    </div>
    <div className='col-lg-6'>
      <Profile/>
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard