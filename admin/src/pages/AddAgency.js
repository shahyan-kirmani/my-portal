import React from "react";

const AddAgency = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="page-header pb-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-sm-10">
              <div className="page-header-left">
                <h3>
                  Add Agency
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
                <h5>Add user details</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row g-3">
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Property Type <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Property Status <span className="font-danger">*</span>
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">For Sale</option>
                      <option value="2">For Rent</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Enter Gender <span className="font-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>Gender</span> <i className="fas fa-angle-down" />
                      </span>
                      <div className="dropdown-menu text-start">
                        <a className="dropdown-item" href="javascript:void(0)">
                          Male
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                          Female
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Phone number <span className="font-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="enter your mobile number"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Date of birth <span className="font-danger">*</span>
                    </label>
                    <div
                      role="wrapper"
                      className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                    >
                      <input
                        className="form-control"
                        type="date"
                        placeholder="18 april"
                        id="datepicker"
                        data-type="datepicker"
                        data-guid="b582240a-c253-0f5b-610e-86c332c6b115"
                        data-datepicker="true"
                        role="input"
                      />
                     
                    </div>
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Email Address <span className="font-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="enter your email"
                      required=""
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>
                      Password <span className="font-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>
                      Confirm Password <span className="font-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Address"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Zip code</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter pin code"
                    />
                  </div>
                </form>
                <div className="dropzone-admin mb-0 mt-3">
                  <label>Media</label>
                  <form
                    className="dropzone dz-clickable text-center"
                    id="multiFileUpload"
                    action="/upload.php"
                    
                  >
                    <div className="dz-message needsclick">
                      <i className="fas fa-cloud-upload-alt" />
                      <h6>Drop files here or click to upload.</h6>
                    </div>
                  </form>
                </div>
                <div className="form-btn mt-4">
                  <button
                    type="button"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAgency;
