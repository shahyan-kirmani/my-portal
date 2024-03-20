import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import {HiUserGroup} from 'react-icons/hi';
import { base_url } from "../utils/baseUrl";
import axios from "axios";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}


const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };

    const [users,setUsers]  = useState([])
    const [property,setProperty]  = useState([])
 
     
    const filteredArray = users.filter(item => item.signAs === 'agency');
    const sellerArray = users.filter(item => item.signAs === 'seller');
    const buyerArray = users.filter(item => item.signAs === 'buyer');
    
  useEffect(()=>{
    

    axios.get(`${base_url}user/get`).then((res)=>{
      console.log(res.data,'Buyer signup');
   setUsers(res.data.data)

  }).catch((err)=>{


  })

    axios.get(`${base_url}property/get`).then((res)=>{
      console.log(res.data,'Buyer signup');
   setProperty(res.data.data)

  }).catch((err)=>{


  })



  },[])
  return (
    <div>
      <div className="container-fluid">
  <div className="page-header py-2">
    <div className="row" style={{alignItems:'center'}}>
      <div className="col-sm-10">
        <div className="page-header-left">
          <h3>
            Dashboard
            <small>Welcome to admin panel</small>
          </h3>
        </div>
      </div>
      <div className="col-sm-2">
        {/* Breadcrumb start */}
        <ol className="breadcrumb pull-right">
          <li className="breadcrumb-item">
            <a href="index.html">
              <i className="fa fa-home" />
            </a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        {/* Breadcrumb end */}
      </div>
    </div>
  </div>
</div>


    <div className="container-fluid py-3" >

    {/* <div className="row">
  <div className="col-md-6">
    <div className="card all-properties">
      <div className="card-body">
        <div className="media">
          <img
            src={require('../assects/home.png')}
            className="img-fluid"
            alt=""
          />
          <div className="media-body">
            <h4 className="mb-0">45</h4>
            <h6 className="light-font">Properties</h6>
          </div>
          <a href="listing.html" className="arrow-animated">
            See all properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
        <ul className="light-box">
          <li>
            <img
              src="../assets/images/svg/icon/sold.png"
              className="img-fluid"
              alt=""
            />
            <div>
              <h5>1500</h5>
              <span className="light-font">Sale</span>
            </div>
          </li>
          <li>
            <img
              src="../assets/images/svg/icon/rent.png"
              className="img-fluid"
              alt=""
            />
            <div>
              <h5>380</h5>
              <span className="light-font">Rented</span>
            </div>
          </li>
          <li>
            <img
              src="../assets/images/svg/icon/unlisted.png"
              className="img-fluid"
              alt=""
            />
            <div>
              <h5>240</h5>
              <span className="light-font">Unlisted</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className=" col-md-6">
    <div className="card invoice-card">
      <div className="card-header pb-0">
        <div>
          <h5>Last Month</h5>
        </div>
      </div>
      <div className="card-body calculations">
        <ul>
          <li>
            <h5 className="font-success">$47,215</h5>
            <h6 className="light-font mb-0">Paid invoices</h6>
          </li>
          <li>
            <h5 className="font-danger">$5,780</h5>
            <h6 className="light-font mb-0">Open invoices</h6>
          </li>
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <a href="agent-invoice.html" className="label label-light color-4">
            <i className="fas fa-hand-holding-usd me-1" />
            Payments Receive
          </a>
          <a href="agent-invoice.html" className="arrow-animated">
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}

      <div className="row">
      <div className="col-md-6 project-widgets">
  <div className="card">
    <div className="card-body">
      <div className="media">
        <div className="widget-icon bg-primary-light">
        

            <HiUserGroup   size={50}  />
        
        </div>
        <div className="media-body">
          {/* <span>
            Completed
            <span className="font-success">
              + 20%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>
          </span> */}
          <h4>Total users</h4>
          <span className="status-history fs-4">{users?.length}</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="col-md-6 project-widgets">
  <div className="card">
    <div className="card-body">
      <div className="media">
        <div className="widget-icon bg-primary-light">
        

            <HiUserGroup   size={50}  />
        
        </div>
        <div className="media-body">
          {/* <span>
            Completed
            <span className="font-success">
              + 20%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>
          </span> */}
          <h4>Total buyer</h4>
          <span className="status-history fs-4">{buyerArray?.length}</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="col-md-6 project-widgets">
  <div className="card">
    <div className="card-body">
      <div className="media">
        <div className="widget-icon bg-primary-light">
        

            <HiUserGroup   size={50}  />
        
        </div>
        <div className="media-body">
          {/* <span>
            Completed
            <span className="font-success">
              + 20%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>
          </span> */}
          <h4>Total seller</h4>
          <span className="status-history fs-4">{sellerArray?.length}</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="col-md-6 project-widgets">
  <div className="card">
    <div className="card-body">
      <div className="media">
        <div className="widget-icon bg-primary-light">
        

            <HiUserGroup   size={50}  />
        
        </div>
        <div className="media-body">
          {/* <span>
            Completed
            <span className="font-success">
              + 20%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>
          </span> */}
          <h4>Total agency</h4>
          <span className="status-history fs-4">{filteredArray?.length}</span>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="col-md-6 project-widgets">
  <div className="card">
    <div className="card-body">
      <div className="media align-items-center">
        <div className="widget-icon bg-primary-light">
        

            <HiUserGroup    />
        
        </div>
        <div className="media-body">
          {/* <span>
            Completed
            <span className="font-success">
              + 20%
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-trending-up"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>
          </span> */}
          <h4>Total Properties</h4>
          <span className="status-history fs-4">{property?.length}</span>
        </div>
      </div>
    </div>
  </div>
</div>


{/* <div className="col-md-6">
  <div className="card">
    <div className="card-header">
      <h5>Assignees</h5>
    </div>
    <div className="card-body assign-table pt-0">
      <div className="table-responsive">
        <table className="table table-bordernone">
          <tbody>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/avatar/1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <a href="user-profile.html" />
                    <a href="user-profile.html">
                      <h6>Bob Frapples</h6>
                    </a>
                    <span>Pumbing</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="font-danger">10</h6>
                <span>Open</span>
              </td>
              <td>
                <h6 className="font-warning">3</h6>
                <span>Escaleted</span>
              </td>
              <td>
                <h6 className="font-success">126</h6>
                <span>Completed</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/avatar/3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <a href="user-profile.html" />
                    <a href="user-profile.html">
                      <h6>Greta Life</h6>
                    </a>
                    <span>Pest control</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="font-danger">8</h6>
                <span>Open</span>
              </td>
              <td>
                <h6 className="font-warning">20</h6>
                <span>Escaleted</span>
              </td>
              <td>
                <h6 className="font-success">154</h6>
                <span>Completed</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/avatar/5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Zack Lee</h6>
                    </a>
                    <span>others</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="font-danger">5</h6>
                <span>Open</span>
              </td>
              <td>
                <h6 className="font-warning">18</h6>
                <span>Escaleted</span>
              </td>
              <td>
                <h6 className="font-success">79</h6>
                <span>Completed</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/avatar/6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Paige Turner</h6>
                    </a>
                    <span>Pest control</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="font-danger">15</h6>
                <span>Open</span>
              </td>
              <td>
                <h6 className="font-warning">7</h6>
                <span>Escaleted</span>
              </td>
              <td>
                <h6 className="font-success">145</h6>
                <span>Completed</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/avatar/4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <a href="user-profile.html">
                      <h6>Mary Goround</h6>
                    </a>
                    <span>Pumbing</span>
                  </div>
                </div>
              </td>
              <td>
                <h6 className="font-danger">10</h6>
                <span>Open</span>
              </td>
              <td>
                <h6 className="font-warning">3</h6>
                <span>Escaleted</span>
              </td>
              <td>
                <h6 className="font-success">126</h6>
                <span>Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<div className="col-md-6">
  <div className="card">
    <div className="card-header pb-0">
      <h5>Management Reports</h5>
    </div>
    <div className="card-body management-table">
      <div className="table-responsive">
        <table className="table table-bordernone">
          <tbody>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/svg/icon/pdf.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <h6>Report 8/10/22 - 15/10/22</h6>
                    <span>Created 16/10/22</span>
                  </div>
                </div>
              </td>
              <td>
                <a href="text_file.txt" download="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download light-font"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} y1={15} x2={12} y2={3} />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/svg/icon/microsoft.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <h6>Report 20/10/22 - 25/10/22</h6>
                    <span>Created 24/10/22</span>
                  </div>
                </div>
              </td>
              <td>
                <a href="text_file.txt" download="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download light-font"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} y1={15} x2={12} y2={3} />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/svg/icon/excel.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <h6>Report 30/10/22 - 5/11/22</h6>
                    <span>Created 1/11/22</span>
                  </div>
                </div>
              </td>
              <td>
                <a href="text_file.txt" download="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download light-font"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} y1={15} x2={12} y2={3} />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/svg/icon/pdf.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <h6>Report 10/11/22 - 15/11/22</h6>
                    <span>Created 17/11/22</span>
                  </div>
                </div>
              </td>
              <td>
                <a href="text_file.txt" download="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download light-font"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} y1={15} x2={12} y2={3} />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="media">
                  <img
                    src="../assets/images/svg/icon/excel.png"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="media-body">
                    <h6>Report 20/11/22 - 25/11/22</h6>
                    <span>Created 28/11/22</span>
                  </div>
                </div>
              </td>
              <td>
                <a href="text_file.txt" download="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download light-font"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} y1={15} x2={12} y2={3} />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> */}




      </div>
    </div>
    
     
    </div>
  );
};

export default Dashboard;
