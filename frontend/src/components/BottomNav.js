import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api_url from '../ApiUrl'

const BottomNav = () => {

  const [myUser,setMyUser]=useState()

  const navigate=useNavigate()


  const myId=localStorage.getItem('mainUserId')


  useEffect((()=>{
    axios.get(`${api_url}user/get/${myId}`).then((res)=>{
      console.log(res.data.data,'======================>>>>>>>>>>>>>>')
      setMyUser(res.data.data)
  })

  }),[])


  return (
    <div>
        <nav className="navbar navbar-expand-lg" id='navbar'>
  <div className="container">
    
    <img src={require('../logo.png')} alt='logo' width='120px' onClick={()=>navigate('/')} style={{cursor:'pointer',width:"147.7px",height:"60px",top:"41px"}}/>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
      <ul className="navbar-nav gap-2 gap-md-2">
        <li className="nav-item">
          <Link className="nav-link px-3 me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",fontFamily:"Lato"}}  to="/">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",fontFamily:"Lato"}} to="/about_us">
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",fontFamily:"Lato"}} to="/agency_list">
            AGENCIES
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",fontFamily:"Lato"}} to="/projects_list">
           PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",fontFamily:"Lato"}} to="/developer_list">
           DEVELOPERS 
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",fontFamily:"Lato"}} to="/contact">
            CONTACT
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link me-2" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}} to="/packages">
            PACKAGES
          </Link>
        </li> */}
        <li className="nav-item">
          {myUser && myUser?.signAs==='seller'?<div onClick={()=>navigate("/addProject")} className='btn text-white phead' style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px",backgroundColor:'#4DB749'}}><i class="fas fa-circle-plus rounded-circle"></i> ADD PROPERTY</div>:myUser?.signAs==='agency'?<div onClick={()=>navigate("/addLocation")} className='btn text-white phead' style={{backgroundColor:'#4DB749'}}>+ ADD PROPERTY</div>:myUser?.signAs==='buyer'?null:<div onClick={()=>navigate("/signup")} className='btn text-white phead' style={{backgroundColor:'#4DB749'}}>+ ADD PROPERTY</div>}
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default BottomNav