import React, { useState } from 'react';
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
import {HiOutlineMenuAlt2} from 'react-icons/hi';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/dashboard",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        // {
        //     path:"/post_listing",
        //     name:"Post Listing",
        //     icon:<FaUserAlt/>
        // },
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
        <div className="container2">
           <div style={{width: isOpen ? "280px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <HiOutlineMenuAlt2 onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link mt-2" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;