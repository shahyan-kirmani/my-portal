import axios from "axios";
import React, { useEffect, useState } from "react";
import api_url from "../../ApiUrl";
import { useNavigate } from "react-router-dom";

const Blogs = () => {

  const [myPost, setMyPost] = useState([])

  const navigate=useNavigate()


    useEffect(() => {
        axios.get(api_url + `blog/get`).then(res => {
          console.log(res.data,'mery blog===================================')
            setMyPost(res.data.data)
            console.log(res.data.data.name)
        })
    }, [])


  return (
    <>
      <section className="blogs">
        <div className="container py-5">
          <div className="d-flex pb-4 align-items-center justify-content-between">
            <div className="">
              <h3>Blogs</h3>
            </div>
            <div className="">
              <a href="" className="text-dark" style={{ fontSize: "16px" }}>
                {" "}
                View All
              </a>
            </div>
          </div>

          <div className="row g-4">
          {myPost.length>0?myPost.map(i=>{return(
                <>
            <div className="col-md-3">
              <div
                className=" rounded-4  bg-white border-4"
                style={{ overflow: "hidden",borderRadius:12 }}
              >
                <img
                  src={i?.image}
                  height="200px"
                  width="100%"
                  alt=""
                />

                <div className="p-3">
                  <h6 >
                    {i?.name}
                  </h6>
                  {/* <p className="m-0"  style={{fontSize:'14px'}}>
                    {i?.description}
                  </p> */}
                  <button onClick={()=>navigate(`/viewBlog/${i?.id}`)}
                    className="btn text-bold"
                    style={{ fontWeight: "600" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            </>
              )}):null}
            
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
