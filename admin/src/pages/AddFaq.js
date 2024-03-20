import React from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";

let schema = yup.object().shape({
  question: yup
    .string()
    .required("Question is Required"),
  answer: yup.string().required("Answer is Required"),
});


const AddFaq = () => {

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      question: "",
      answer: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {

      axios.post(`${base_url}question/create`,values).then((res)=>{

        console.log(res.data,'agency signup=-');
         if(res.data.status==='ok'){

          toast.success("Question Added Successfully!");
          navigate('/admin/faq')
         }
       
    }).catch((err)=>{
 

    })
    
    },
  });
  


  return (
    <>
      <div className="container-fluid">
        <div className="page-header pb-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-10">
              <div className="page-header-left">
                <h3>
                  Add Faq
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
                <h5>Add faq details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row g-3"   onSubmit={formik.handleSubmit}>

                <div className="form-group col-sm-12">
                    <label>Question</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Question"
                      name="question"
                      onChange={formik.handleChange("question")}
                      onBlur={formik.handleBlur("question")}
                      value={formik.values.question}
                    />
                    <div className="error">
            {formik.touched.question && formik.errors.question}
          </div>
                  </div>

               
                  <div className="form-group col-sm-12">
                    <label>Answer</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="answer"
                      onChange={formik.handleChange("answer")}
                      onBlur={formik.handleBlur("answer")}
                      value={formik.values.answer}
                      
                    />
                      {formik.touched.answer && formik.errors.answer}
                    
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

export default AddFaq;
