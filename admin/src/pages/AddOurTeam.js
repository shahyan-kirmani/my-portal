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

const AddOurTeam = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      facebook: "",
      twitter: "",
      insta: "",
      image: "",

      description: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const {
        image,
        name,
        description,
        designation,
        facebook,
        twitter,
        insta,
      } = formik.values;

      console.log(image);

      let profilephoto = " ";

      try {
        let param = new FormData();

        param.append("avatars", image);

        profilephoto = await axios.post(
          `https://apis.grandunicornhotels.com/api/blog/image`,
          param
        );

        console.log(profilephoto);
      } catch (error) {
        console.log(error);
      }

      const params = {
        image:profilephoto?.data?.data[0].url,
        name: name,
        designation: designation,
        facebook: facebook,
        twitter: twitter,
        insta: insta,
        description: description,
      };
    let response =  await axios.post(`${base_url}team/create`, params)


      if (response.data.status === "ok") {
        toast.success("Team Added Successfully!");
        navigate("/admin/our_team");
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
                  Add our team
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
                <h5>Add events details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row g-3" onSubmit={formik.handleSubmit}>
                  <div className="form-group col-sm-6">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>

                  <div className="form-group col-sm-6">
                    <label>Designation</label>
                    <input
                      type="text"
                      name="designation"
                      className="form-control"
                      placeholder="Enter your designation"
                      onChange={formik.handleChange("designation")}
                      onBlur={formik.handleBlur("designation")}
                      value={formik.values.designation}
                    />{" "}
                    <div className="error">
                      {formik.touched.designation && formik.errors.designation}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Instagram Url</label>
                    <input
                      type="text"
                      name="insta"
                      className="form-control"
                      placeholder="Enter instagram url"
                      onChange={formik.handleChange("insta")}
                      onBlur={formik.handleBlur("insta")}
                      value={formik.values.insta}
                    />{" "}
                    <div className="error">
                      {formik.touched.insta && formik.errors.insta}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Twitter Url</label>
                    <input
                      type="text"
                      name="twitter"
                      className="form-control"
                      placeholder="Enter twitter url"
                      onChange={formik.handleChange("twitter")}
                      onBlur={formik.handleBlur("twitter")}
                      value={formik.values.twitter}
                    />{" "}
                    <div className="error">
                      {formik.touched.twitter && formik.errors.twitter}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Facebook Url</label>
                    <input
                      type="text"
                      name="facebook"
                      className="form-control"
                      placeholder="Enter facebook url"
                      onChange={formik.handleChange("facebook")}
                      onBlur={formik.handleBlur("facebook")}
                      value={formik.values.facebook}
                    />{" "}
                    <div className="error">
                      {formik.touched.facebook && formik.errors.facebook}
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

                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      name="description"
                      defaultValue={""}
                      onChange={formik.handleChange("description")}
                      onBlur={formik.handleBlur("description")}
                      value={formik.values.description}
                    />
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

export default AddOurTeam;
