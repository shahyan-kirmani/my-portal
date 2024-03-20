import React from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";
import PreviewImage from "../components/PreviewImage";

let schema = yup.object().shape({
  name: yup.string().required("name is Required"),
  image: yup.mixed().required("image is Required"),
  description: yup.string().required("description is Required"),
});

const Addblog = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {

      const { image, name, description } = formik.values;

      console.log(image);


      
      let profilephoto = " "


      try {

        let param = new FormData();

        param.append("avatars",image);

        profilephoto = await axios.post(`http://localhost:3005/api/blog/image`, param);
        
        console.log(profilephoto,'=====profile photo===');
        console.log(profilephoto?.data?.response,'=====profile photo2===');

      } catch (error) { 
        
        console.log("image upload error",error);
      }
  


      const  params = {

      "image":profilephoto?.data?.data[0].url,
      "name":name,
      "description":description,
      }
   let  response  = await  axios.post(`${base_url}blog/create`, params)

if(response.data.status==='ok'){
    toast.success("Blog Added Successfully!");
    navigate('/admin/blogs')
  }


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
                  Add Blogs
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
                <h5>Add blog details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row g-3" onSubmit={formik.handleSubmit}>
                  <div className="form-group col-sm-12">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Title"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>

                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="description"
                      onChange={formik.handleChange("description")}
                      onBlur={formik.handleBlur("description")}
                      value={formik.values.description}
                    />
                    <div className="error">
                      {formik.touched.description && formik.errors.description}
                    </div>
                  </div>

                  <div className="dropzone-admin mb-0 mt-3">
                    <label>Media</label>
                    <div
                      className="dropzone dz-clickable text-center"
                      id="multiFileUpload"
                      action="/upload.php"
                    >
                      <div className="dz-message needsclick">
                        <i
                          className="fas fa-cloud-upload-alt"
                          style={{ fontSize: "30px" }}
                        />
                        <div>
                          <input
                            type="file"
                            className="pb-4 w-100"
                            name="image"
                            onChange={(e) =>
                              formik.setFieldValue("image", e.target.files[0])
                            }
                          />
                        </div>
                        <h6>Drop files here or click to upload.</h6>
                      </div>
                    </div>

                    <div className="error">
                      {formik.touched.image && formik.errors.image}
                    </div>
                  </div>

                  {formik.values.image && (
                    <PreviewImage file={formik.values.image} />
                  )}
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

export default Addblog;
