import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined,CloseOutlined,UserOutlined,MessageOutlined  } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import {BiPackage,BiLogOut} from 'react-icons/bi'
import {AiFillContacts} from 'react-icons/ai'
import {FaQuora,FaBlogger} from 'react-icons/fa';
import {BsCalendar3EventFill} from 'react-icons/bs';
import { RiCouponLine,RiTeamFill } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import {AiOutlineClose,AiFillMessage} from "react-icons/ai";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

import { Button, Dropdown } from 'antd';
import {BiGridAlt} from 'react-icons/bi'
import {HiOutlineUserGroup} from 'react-icons/hi';
import {FiUserPlus} from 'react-icons/fi';
import {MdPayment} from 'react-icons/md';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {

  const items = [
    {
      key: '1',
      label: (
        <div className="d-flex align-items-center justify-content-between">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
      Account
      </a>
      <i><UserOutlined/></i>
      </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="d-flex align-items-center justify-content-between">
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
         Listing
        </a>
        <i><UserOutlined/></i>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className="d-flex align-items-center justify-content-between">
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
         Listing
        </a>
        <i><UserOutlined/></i>
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div className="d-flex align-items-center justify-content-between">
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
         Listing
        </a>
        <i><UserOutlined/></i>
        </div>
      ),
    },
  ];


  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo text-center   shadow d-flex justify-content-center align-items-center">
           <img src={require('../assects/logo.png')} width="120px"  alt="" />
           <div className="close_btn d-none ms-4">
           {React.createElement(

            collapsed ? CloseOutlined : CloseOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          
           </div>
        </div>
    

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            
            {
              key: "My properties",
              icon: <BiGridAlt className="fs-4" />,
              label: "Property",
              children: [
                {
                  key: "add_property",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Property",
                },
                {
                  key: "property_list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Property List",
                },
                {
                  key: "favoriteList",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Favorite List",
                },
                // {
                //   key: "add_project",
                //   icon: <AiOutlineShoppingCart className="fs-4" />,
                //   label: "Add Project",
                // },
               
              ],
            },

            {
              key: "My projects",
              icon: <BiGridAlt className="fs-4" />,
              label: "Project",
              children: [
                {
                  key: "add_project",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Project",
                },
                {
                  key: "project_list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Property List",
                },
                // {
                //   key: "favoriteList",
                //   icon: <SiBrandfolder className="fs-4" />,
                //   label: "Favorite List",
                // },
                
               
              ],
            },
          
            {
              key: "marketing",
              icon: <HiOutlineUserGroup className="fs-4" />,
              label: "Manage Users",
              children: [
                {
                  key: "buyer",
                  icon: <ImBlog className="fs-4" />,
                  label: "Buyer",
                },
                {
                  key: "seller",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Seller",
                },
                {
                  key: "agency",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Agency",
                },
              ],
            },


            // {
            //   key: "blogs",
            //   icon: <FiUserPlus className="fs-4" />,
            //   label: "Agents",
            //   children: [
                
            //     {
            //       key: "add_agency",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Add Agent",
            //     },
            //     {
            //       key: "agency_list",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Agents List",
            //     },
                
            //   ],
            // },

            
            // {
            //   key: "blogs",
            //   icon: <FaBloggerB className="fs-4" />,
            //   label: "Types",
            //   children: [
            //     {
            //       key: "blog",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Family House",
            //     },
            //     {
            //       key: "blog-list",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Cottage",
            //     },
            //     {
            //       key: "blog-category",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Apartment",
            //     },
            //     {
            //       key: "blog-category-list",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Condominium",
            //     },
            //   ],
            // },
            // {
            //   key: "enquiries",
            //   icon: <FaClipboardList className="fs-4" />,
            //   label: "Reports",
            // },
            {
              key: "advertisement",
              icon: <BiPackage className="fs-4" />,
              label: "Packages",
            },
            {
              key: "contact_us",
              icon: <AiFillContacts className="fs-4" />,
              label: "Contact Us",
            },
            {
              key: "faq",
              icon: <FaQuora className="fs-4" />,
              label: "Faq",
            },
            {
              key: "our_team",
              icon: <RiTeamFill className="fs-4" />,
              label: "Our Team",
            },
            {
              key: "events",
              icon: <BsCalendar3EventFill className="fs-4" />,
              label: "Events",
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-4" />,
              label: "Blogs",
            },
            {
              key: "/",
              icon: <BiLogOut color="red" className="fs-4" />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex shadow justify-content-between align-items-center ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
       
            {/* <div className="">
             <input placeholder="Search here..." type="search" className=" text-left bg-light border-0 form-control rounded btn"  />
            </div> */}

            <div className="d-flex gap-3 align-items-center dropdown">
               {/* <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
       <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span class="label label-shadow label-pill notification-badge d-flex align-items-center justify-content-center"><span className="text-white"> 3</span></span>
            </div>
    </Dropdown>
            
               <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
     <i><AiFillMessage size={20} /></i>
    </Dropdown> */}
               {/* <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    > */}
     <img src={require('../assects/user.png')} className="rounded-5"  width="40px" height="40px" alt="" />
    {/* </Dropdown> */}
             
            </div>
        
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
