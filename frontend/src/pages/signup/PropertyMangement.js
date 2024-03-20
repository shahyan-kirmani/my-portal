import React from "react";

const PropertyManagement = () => {
  return (
    <>
      <section className="property_management">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  ID
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="ID"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  City
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Location
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Property Type
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="property Type"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Active
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Pending
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Rejected
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-expired-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-expired"
                    type="button"
                    role="tab"
                    aria-controls="pills-expired"
                    aria-selected="false"
                  >
                    Expired
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-deleted-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-deleted"
                    type="button"
                    role="tab"
                    aria-controls="pills-deleted"
                    aria-selected="false"
                  >
                    Deleted
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-inactive-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-inactive"
                    type="button"
                    role="tab"
                    aria-controls="pills-inactive"
                    aria-selected="false"
                  >
                    Inactive
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                ></div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyManagement;
