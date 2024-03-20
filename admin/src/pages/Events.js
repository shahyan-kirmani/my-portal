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
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Image",
    dataIndex: "image",
    sorter: (a, b) => a.image- b.image,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price- b.price,
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: (a, b) => a.description- b.description,
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    sorter: (a, b) => a.createdAt - b.createdAt,
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const Events = () => {
  const [open, setOpen] = useState(false);
    const [blogId, setblogId] = useState("");
    const [listing,setListing] = useState([])
    const showModal = (e) => {
      setOpen(true);
      setblogId(e);
    };
  
  
    useEffect(()=>{
       axios.get(`${base_url}career/get`).then((res)=>{
           console.log(res.data,'agency signup');
        setListing(res.data.data)
  
       }).catch((err)=>{
    
  
       })
    },[])
  
    const hideModal = () => {
      setOpen(false);
    };

  const data1 = [];
  for (let i = 0; i < listing?.length; i++) {
    data1.push({
      key: i + 1,
      name: listing[i].name,
      image: (
        <>
         <img src={listing[i].image} style={{width:'60px',height:'60px',borderRadius:'50%'}}  alt="" />
        </>
      ),
      price: listing[i].price,
      description: listing[i].description,
      createdAt:listing[i].createdAt,
      action: (
        <>
          {/* <Link
            to={`/admin/contact/${listing[i]._id}`}
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
  const deleteContact = (e) => {


    axios.delete(`${base_url}career/delete/${e}`).then((res)=>{
        
      console.log(res.data,'Advertisement signup');
      
      toast.success("Event delete Successfully!");
          

  }).catch((err)=>{


  })


    setOpen(false);

    setTimeout(() => {
      axios.get(`${base_url}career/get`).then((res)=>{
        console.log(res.data,'agency signup');
     setListing(res.data.data)

    }).catch((err)=>{
 

    })
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Events</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteContact(blogId)
        }}
        title="Are you sure you want to delete this Contact?"
      />

<div className="" style={{position:'absolute',bottom:60,right:100}}>
        <div className="text-center"  style={{width:'80px',height:'80px',lineHeight:'75px',backgroundColor:'#4DB749',borderRadius:'50%'}}>
          <Link to="/admin/add_events" className="text-center text-white fs-1" >+</Link>
        </div>
      </div>


    </div>
  );
};

export default Events;
