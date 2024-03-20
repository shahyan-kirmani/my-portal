import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Name",
    dataIndex: "fullName",
    sorter: (a, b) => a.fullName- b.fullName,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email - b.email,
  },

  {
    title: "Phone Number",
    dataIndex: "phone",
    sorter: (a, b) => a.phone- b.phone,
  },
  {
    title: "City",
    dataIndex: "city",
    sorter: (a, b) => a.city - b.city,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    sorter: (a, b) => a.subject - b.subject,
  },
  {
    title: "Your message",
    dataIndex: "yourMessage",

    sorter: (a, b) => a.yourMessage - b.yourMessage,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Contactus = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setblogId] = useState("");
  const [listing,setListing] = useState([])
  const showModal = (e) => {
    
    setOpen(true);
    setblogId(e);
  };


  useEffect(()=>{
     axios.get(`${base_url}contact/get`).then((res)=>{
         console.log(res.data,'agency signup=-');
      setListing(res.data.data)

     }).catch((err)=>{
  

     })
  },[])

  const hideModal = () => {
    setOpen(false);
  };

  console.log(listing);
  const data1 = [];
  for (let i = 0; i < listing?.length; i++) {
    data1.push({
      key: i + 1,
      fullName: listing[i].fullName,
      email: listing[i].email,
      phone:listing[i].phone,
      city:listing[i].city,
      subject:listing[i].subject,
      yourMessage:listing[i].yourMessage   ,
      action: (
        <>
          {/* <Link
            to={`/admin/contact/${contactState[i]._id}`}
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
   
    axios.delete(`${base_url}contact/delete/${e}`).then((res)=>{
        if(res.data.status==='ok'){

          toast.success("contact delete Successfully!");
          

          axios.get(`${base_url}contact/get`).then((res)=>{
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
      <h3 className="mb-4 title">Contact Us</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteContact(blogId);
        }}
        title="Are you sure you want to delete this Contact?"
      />
    </div>
  );
};

export default Contactus;
