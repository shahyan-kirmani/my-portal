import React,{useState} from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { toast } from "react-toastify";
import PreviewImage from "../components/PreviewImage";


let schema = yup.object().shape({
  title: yup.string().required("title is Required"),
  city: yup.string().required("City is Required"),
  location: yup.string().required("Location is Required"),
  size: yup.string().required("Size is Required"),
  beds: yup.string().required("Beds is Required"),
  baths: yup.string().required("Baths is Required"),
  image: yup.mixed().required("image is Required"),
  price: yup.mixed().required("Price is Required"),
  phone: yup.mixed().required("Phone is Required"),
  purpose: yup.mixed().required("Purpose is Required"),
  description: yup.string().required("description is Required"),
});

const AddProperty = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  // const imageHandler = (e) => {
  //   setImages([...images, e.target.files[0]]);
  // };

  const imageHandler = (e) => {
    const selectedImage = e.target.files[0];
  
    if (selectedImage && selectedImage.type.startsWith('image/')) {
      console.log('Selected Image:', selectedImage);
      setImages([...images, selectedImage]);
    } else {
      // Handle the case where the selected file is not an image
      console.error('Please select a valid image file.');
    }
  };
  
  

  const handleRemoveItem = (id) => {
    setImages(images.filter((item) => item !== id));
  };



  const formik = useFormik({
    initialValues: {
      image:[],
      video: "",
      purpose: "",
      property: "",
      type: "",
      feature: "",
      city: "",
      location: "",
      size: "",
      email: "",
      price: "",
      beds: "",
      baths: "",
      title: "",
      description: "",
      phone: "",
      landline: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const {
        image,
        video,
        purpose,
        property,
        type,
        feature,
        city,
        location,
        size,
        email,
        price,
        beds,
        baths,
        title,
        description,
        phone,
        landline,
      } = formik.values;
      console.log(image);

      let profilephoto ="";

      try {
        let param = new FormData();

        param.append("file", image);
        images.map(ite=>{
          param.append("images",ite);
    })
        profilephoto = await axios.post(
          `http://localhost:3005/api/property/image`,
          param
        );

        console.log(profilephoto);
      } catch (error) {
        console.log(error);
      }

      console.log(profilephoto,'sdhfdfssssssssssssss');


      const params = {
        image: profilephoto?.data?.data,
        video: video,
        purpose:purpose,
        property:property,
        type: type,
        feature: feature,
        city: city,
        location: location,
        size: size,
        email: email,
        price: price,
        beds: beds,
        baths: baths,
        phone: phone,
        landline: landline,
        title: title,
        description: description,
        
      };

      console.log("data---",params)
//       var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


   let response  =  await axios.post(`${base_url}property/create`, params)

      if (response.data.status === "ok") {
        toast.success("Property Added Successfully!");
        navigate("/admin/property_list");
      }
      console.log('response :::' , response);
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
                  Add our property
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
                <h5>Add property details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row g-3" onSubmit={formik.handleSubmit}>
                  <div className="form-group col-sm-6">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Enter your title"
                      onChange={formik.handleChange("title")}
                      onBlur={formik.handleBlur("title")}
                      value={formik.values.title}
                    />
                    <div className="error">
                      {formik.touched.title && formik.errors.title}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Purpose</label>
                    <select class="form-select"
                    onChange={formik.handleChange("purpose")}
                    onBlur={formik.handleBlur("purpose")}
                    value={formik.values.purpose}

                    aria-label="Default select example">
  <option selected>Select your purpose</option>
  <option value="rent">Rent</option>
  <option value="sell">Sale</option>
  
</select>
                    {/* <input
                      type="text"
                      name="purpose"
                      className="form-control"
                      placeholder="Enter your purpose"
                      
                    /> */}
                    <div className="error">
                      {formik.touched.purpose && formik.errors.purpose}
                    </div>
                  </div>

                  <div className="form-group col-sm-6">
                    <label>Property</label> 
                    <input
                      type="text"
                      name="property"
                      className="form-control"
                      placeholder="Enter your property"
                      onChange={formik.handleChange("property")}
                      onBlur={formik.handleBlur("property")}
                      value={formik.values.property}
                    />{" "}
                    <div className="error">
                      {formik.touched.property && formik.errors.property}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Type</label>
                    <input
                      type="text"
                      name="type"
                      className="form-control"
                      placeholder="Enter  type"
                      onChange={formik.handleChange("type")}
                      onBlur={formik.handleBlur("type")}
                      value={formik.values.type}
                    />{" "}
                    <div className="error">
                      {formik.touched.type && formik.errors.type}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Feature</label>
                    <input
                      type="text"
                      name="feature"
                      className="form-control"
                      placeholder="Enter feature"
                      onChange={formik.handleChange("feature")}
                      onBlur={formik.handleBlur("feature")}
                      value={formik.values.feature}
                    />{" "}
                    <div className="error">
                      {formik.touched.feature && formik.errors.feature}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Enter your city"
                      onChange={formik.handleChange("city")}
                      onBlur={formik.handleBlur("city")}
                      value={formik.values.city}
                    />{" "}
                    <div className="error">
                      {formik.touched.city && formik.errors.city}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Enter location"
                      onChange={formik.handleChange("location")}
                      onBlur={formik.handleBlur("location")}
                      value={formik.values.location}
                    />{" "}
                    <div className="error">
                      {formik.touched.location && formik.errors.location}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Size</label>
                    <input
                      type="text"
                      name="size"
                      className="form-control"
                      placeholder="Enter Size"
                      onChange={formik.handleChange("size")}
                      onBlur={formik.handleBlur("size")}
                      value={formik.values.size}
                    />{" "}
                    <div className="error">
                      {formik.touched.size && formik.errors.size}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter email address"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />{" "}
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      placeholder="Enter price"
                      onChange={formik.handleChange("price")}
                      onBlur={formik.handleBlur("price")}
                      value={formik.values.price}
                    />{" "}
                    <div className="error">
                      {formik.touched.price && formik.errors.price}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Beds</label>
                    <input
                      type="text"
                      name="beds"
                      className="form-control"
                      placeholder="Enter beds"
                      onChange={formik.handleChange("beds")}
                      onBlur={formik.handleBlur("beds")}
                      value={formik.values.beds}
                    />{" "}
                    <div className="error">
                      {formik.touched.beds && formik.errors.beds}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Baths</label>
                    <input
                      type="text"
                      name="baths"
                      className="form-control"
                      placeholder="Enter baths"
                      onChange={formik.handleChange("baths")}
                      onBlur={formik.handleBlur("baths")}
                      value={formik.values.baths}
                    />{" "}
                    <div className="error">
                      {formik.touched.baths && formik.errors.baths}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone"
                      onChange={formik.handleChange("phone")}
                      onBlur={formik.handleBlur("phone")}
                      value={formik.values.phone}
                    />{" "}
                    <div className="error">
                      {formik.touched.phone && formik.errors.phone}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Landline</label>
                    <input
                      type="text"
                      name="landline"
                      className="form-control"
                      placeholder="Enter landline"
                      onChange={formik.handleChange("landline")}
                      onBlur={formik.handleBlur("landline")}
                      value={formik.values.landline}
                    />{" "}
                    <div className="error">
                      {formik.touched.landline && formik.errors.landline}
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Video</label>
                    <input
                      type="text"
                      name="video"
                      className="form-control"
                      placeholder="Enter video Url"
                      onChange={formik.handleChange("video")}
                      onBlur={formik.handleBlur("video")}
                      value={formik.values.video}
                    />{" "}
                    <div className="error">
                      {formik.touched.video && formik.errors.video}
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
                            onChange={imageHandler}
                            
                            // onChange={(e) =>{

                            //   const files = Array.from(e.target.files);
                              
                            //   formik.setFieldValue("image",files)
                            // }}
                          />
                        </div>
                        <h6>Drop files here or click to upload.</h6>
                      </div>
                    </div>

                    <div className="error">
                      {formik.touched?.image && formik?.errors.image}
                    </div>
                  </div>


                  {images &&
                                      images?.map((i) => {
                                        return (
                                          <>
                                            <div className="col-md-2  position-relative">
                                              <img
                                                src={URL.createObjectURL(i)}
                                                width="90px"
                                                height="90px"
                                                className="border rounded-3"
                                              />
                                              <span
                                                className="border position-absolute p-1 py-0 rounded-circle bg-dark text-white"
                                                style={{
                                                  left: "80px",
                                                  lineHeight: "15px",
                                                  fontSize: "x-small",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  handleRemoveItem(i)
                                                }
                                              >
                                                x
                                              </span>
                                            </div>
                                          </>
                                        );
                                      })}

{/* 
                  {formik?.values?.image  && (

                    <PreviewImage    file={formik?.values?.image}  />
                  )} */}

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

export default AddProperty;
