import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
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
    title: "Question",
    dataIndex: "question",
    sorter: (a, b) => a.question.length - b.question.length,
  },
  {
    title: "Answer",
    dataIndex: "answer",
    sorter: (a, b) => a.answer - b.answer,
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

const Faq = () => {

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
       axios.get(`${base_url}question/get`).then((res)=>{
           console.log(res.data,'agency signup');
        setListing(res.data.data)
  
       }).catch((err)=>{
    
  
       })
    },[])
  
  

    
  const data1 = [];
  for (let i = 0; i < listing?.length; i++) {
    data1.push({
      key: i + 1,
      question: listing[i].question,
      answer: listing[i].answer,
      createdAt:listing[i].createdAt,
      action: (
        <>
          {/* <Link
            to={`/admin/edit_faq/${listing[i].id}`}
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


  const deleteBlog = (e) => {
   
    axios.delete(`${base_url}question/delete/${e}`).then((res)=>{
        if(res.data.status==='ok'){

          toast.success("question delete Successfully!");
          

          axios.get(`${base_url}question/get`).then((res)=>{
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
      <h3 className="mb-4 title">Faq</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
     

      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlog(blogId);
        }}
        title="Are you sure you want to delete this question?"
      />


<div className="" style={{position:'absolute',bottom:60,right:100}}>
        <div className="text-center"  style={{width:'80px',height:'80px',lineHeight:'75px',backgroundColor:'#4DB749',borderRadius:'50%'}}>
          <Link to="/admin/add_faq" className="text-center text-white fs-1" >+</Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
