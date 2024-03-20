import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";

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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Password",
    dataIndex: "password",
  },
  {
    title: "City",
    dataIndex: "city",
  },
  {
    title: "Created At",
    dataIndex: "updatedAt",
  },
  
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Buyer = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setblogId] = useState("");
  const [listing,setListing] = useState([])
  


  const showModal = (e) => {
    setOpen(true);
    setblogId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };



  


  useEffect(()=>{
     axios.get(`${base_url}user/get`).then((res)=>{
         console.log(res.data,'Buyer signup');
      setListing(res.data.data)

     }).catch((err)=>{
  

     })
  },[])


  const data1 = [];
  for (let i = 0; i < listing.length; i++) {
    if(listing[i].signAs ==="buyer"){
      data1.push({
        key: i + 1,
        name: listing[i].fullName,
        email: listing[i].email,
        password: listing[i].phone,
        city: listing[i].city,
        updatedAt: listing[i].updatedAt,
        action: (
          <>
          
            {/* <Link
              to={`/admin/blog/${listing[i].id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link> */}
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(listing[i].id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
   
  }
  const deleteBlog = (e) => {

    axios.delete(`${base_url}user/delete/${e}`).then((res)=>{
      if(res.data.status==='ok'){

        toast.success("Buyer delete Successfully!");
        
        axios.get(`${base_url}user/get`).then((res)=>{
          console.log(res.data,'Buyer signup');
       setListing(res.data.data)
 
      }).catch((err)=>{
   
 
      })


      }
      console.log(res.data,'Advertisement signup');

    }).catch((err)=>{
 

    })
     
    setOpen(false);
    setTimeout(() => {
   
    }, 100);
  };
  return (
    <div>
       <div className="page-header pb-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-10">
              <div className="page-header-left">
                <h3>
                  Buyer List
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
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlog(blogId);
        }}
        title="Are you sure you want to delete this blog?"
      />




    </div>
  );
};

export default Buyer;
