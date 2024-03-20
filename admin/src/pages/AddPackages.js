import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";

// let schema = yup.object().shape({
  //   title: yup
  //   .string()
  //   .required("title is Required"),
  // duration: yup.string().required("duration is Required"),
  // price: yup.string().required("price is Required"),
  // description: yup.string().required("description is Required"),
// });


const AddPackages = () => {

  const {id} = useParams();
    const navigate = useNavigate();
    const  [single,setSingle] = useState({})


    
    useEffect(()=>{
      
      axios.get(`${base_url}package/get/${id}`).then((res)=>{
  
        console.log(res.data,'agency signup=-');
        setSingle(res.data.data)
       
    }).catch((err)=>{
 

    })


    },[])

    // const formik = useFormik({
    //   initialValues: {
    //     id:id,
    //     title:"",
    //     duration:"",
    //     price: "",
    //     description: "",
    //     addProperty:"",
    //   },
      // validationSchema: schema,
     const  onSubmit =  (values) => {


      const params = {
        title:values.title.value,
        duration:values.duration.value,
        price:values.price.value,
        addProperty:values.addProperty.value,
        description:values.description.value,
      }
        axios.post(`${base_url}package/create`,params).then((res)=>{
  
          console.log(res.data,'agency signup=-');
           if(res.data.status==='ok'){
  
            toast.success("Package Update Successfully!");
            navigate('/admin/advertisement')
           }
         
      }).catch((err)=>{
   
  
      })
      
      }
    // });




  return (
    <>
      <div className="container-fluid">
        <div className="page-header pb-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-10">
              <div className="page-header-left">
                <h3>
                  Add Advertisement
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

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Add Advertisement details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row g-3"  onSubmit={(e) => {
              e.preventDefault();
              onSubmit(e.target);
            }} >
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Title<span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="enter your name"
                      required=""
                      
                      defaultValue={single?.title}
                   
                      // onChange={formik.handleChange("title")}
                      // onBlur={formik.handleBlur("title")}
                      // value={formik.values.title}

                    />
                        {/* <div className="error">
            {formik.touched.title && formik.errors.title}
          </div> */}
                  
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Add property<span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="addProperty"
                      className="form-control"
                      placeholder="enter your name"
                      required=""
                      
                      defaultValue={single?.addProperty}
                   
                      // onChange={formik.handleChange("addProperty")}
                      // onBlur={formik.handleBlur("addProperty")}
                      // value={formik.values.addProperty}

                    />
                        {/* <div className="error">
            {formik.touched.addProperty && formik.errors.addProperty}
          </div> */}
                  
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      duration<span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="duration"
                      className="form-control"
                      placeholder="enter your duration"
                      required=""
                      defaultValue={single?.duration}
                      // onChange={formik.handleChange("duration")}
                      // onBlur={formik.handleBlur("duration")}
                      // value={formik.values.duration}
                    />
                            {/* <div className="error">
            {formik.touched.duration && formik.errors.duration}
          </div> */}
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Price<span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      placeholder="enter your price"
                      required=""

                      defaultValue={single?.price}
                      // onChange={formik.handleChange("price")}
                      // onBlur={formik.handleBlur("price")}
                      // value={formik.values.price}
                    />
                                   {/* <div className="error">
            {formik.touched.price && formik.errors.price}
          </div> */}
                  </div>
             
                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows={4}
                      defaultValue={single?.description}
                      // onChange={formik.handleChange("description")}
                      // onBlur={formik.handleBlur("description")}
                      // value={formik.values.description}
                      
                    />
                                              {/* <div className="error">
            {formik.touched.description && formik.errors.description}
          </div> */}
                  </div>
                  <div className="form-btn mt-4">
                  <button
                    type="submit"
                    className="btn btn-pill px-5 btn-gradient color-4"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-pill px-5 ms-3 btn-dashed color-4"
                  >
                    Cancel
                  </button>
                </div>
                </form>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPackages;
