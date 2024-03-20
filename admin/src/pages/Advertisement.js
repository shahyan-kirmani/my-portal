import React, { useEffect, useState } from "react";
import { Table } from "antd";
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
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Duration",
    dataIndex: "duration",
  },
  {
    title: "Add property",
    dataIndex: "addProperty",
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

const Advertisement = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setblogId] = useState("");
  const [listing,setListing] = useState([])
  const showModal = (e) => {
    setOpen(true);
    setblogId(e);
  };


  useEffect(()=>{
     axios.get(`${base_url}package/get`).then((res)=>{
         console.log(res.data,'Advertisement signup');
      setListing(res.data.data)


     }).catch((err)=>{
  

     })
  },[])

  const hideModal = () => {
    setOpen(false);
  };

  const data1 = [];
  for (let i = 0; i < listing.length; i++) {
    data1.push({
      key: i + 1,
      title: listing[i].title,
      description: listing[i].description,
      price: listing[i].price,
      duration: listing[i].duration,
      addProperty: listing[i].addProperty,
    
      updatedAt: listing[i].updatedAt,
      action: (
        <>
        
          <Link
            to={`/admin/add_advertisement/${listing[i].id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          {/* <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(listing[i].id)}
          >
            <AiFillDelete />
          </button> */}
        </>
      ),
    });
  }
  const deleteBlog = (e) => {
   
    axios.delete(`${base_url}package/delete/${e}`).then((res)=>{
        if(res.data.status==='ok'){

          toast.success("Package delete Successfully!");
          

          axios.get(`${base_url}package/get`).then((res)=>{
            console.log(res.data,'Advertisement signup');
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
                  Package List
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
        title="Are you sure you want to delete this package?"
      />

<div className="" style={{position:'absolute',bottom:60,right:100}}>
        <div className="text-center"  style={{width:'80px',height:'80px',lineHeight:'75px',backgroundColor:'#4DB749',borderRadius:'50%'}}>
          <Link to="/admin/add_packages" className="text-center text-white fs-1" >+</Link>
        </div>
      </div>


    </div>
  );
};

export default Advertisement;
