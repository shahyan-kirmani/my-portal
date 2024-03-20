import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
import {HiOutlineMenuAlt2} from 'react-icons/hi';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const TopNav = () => {
  const navigate = useNavigate();

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/post_listing",
            name:"Post Listing",
            icon:<FaUserAlt/>
        },
        {
            path:"/property_managements",
            name:"Property Management",
            icon:<FaRegChartBar/>
        },
        {
            path:"/user_setting",
            name:"User Settings",
            icon:<FaCommentAlt/>
        },
      
    ]

  return (
    <div>
      <nav
        className="navbar"
        style={{ backgroundColor: "#4DB749"}}
      >
        <div className="container-fluid px-2 px-md-5 d-flex justify-content-between align-items-center">
          <div>
        <i className="top_menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"> <HiOutlineMenuAlt2  color="#fff" size={30} /></i>
         
          </div>
          <div className="">
            <ul className=" gap-3 gap-sm-5 d-flex align-items-center top_menu">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Career
                </Link>
              </li>
              <li className="nav-item mt-1 search_transparent">
                <input
                  type="search"
                  className="bg-transparent border-0 border-bottom text-white topsea mytex"
                  placeholder="PROPERTY ID"
                  size={11}
                />
                <i > <BsSearch color="#fff" style={{fontWeight:'800'}} /></i>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
      
  <img src={require('../../assets/Image/logo.png')} alt='logo' width='120px'/>

    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" data-bs-dismiss="offcanvas">
  {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link mt-2" activeclassName="active"  >
                           <div className="icon">{item.icon}</div>
                           <div className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
  </div>
</div>
    </div>
  );
};

export default TopNav;
