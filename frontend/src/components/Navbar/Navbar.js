import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../../components/BottomNav'
const Navbar = () => { 

  const navigate=useNavigate()
  return (
    <div>
      <BottomNav/>
        {/* <nav className='py-3 ' style={{backgroundColor:'#F6F5F5'}}>
  <div className="container-fluid">
      <div className='row g-4'>
      <div className='col-md-6'>
      
      <img src={require('../../assets/images/logo.png')} alt='logo' width='120px' onClick={()=>navigate('/')} style={{cursor:'pointer'}}/>
      </div>
      
      <div className="col-md-5">
       
        <div className='d-flex justify-content-between align-items-center'>
          <div className='w-100'>
          <Link to="/addProject" className='btn w-100  btn-outline' style={{backgroundColor:'#4DB749'}}>Add Project</Link>
          </div>
          <div className='w-100 ms-2'>
          <Link to="/packages" className='btn w-100 text-white' style={{backgroundColor:'#4DB749'}}>Choose Plan</Link>
          </div>
        </div>
      </div>
      </div>
  </div>
</nav> */}

    </div>
  )
}

export default Navbar