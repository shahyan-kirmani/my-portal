import axios from "axios";
import React, { useEffect, useState } from "react";
import api_url from "../../ApiUrl";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom'

const PropertyManagements = () => {

  const [myPost, setMyPost] = useState([])


  const [queryid, setQueryid] = useState('')
  const [querycity, setQuerycity] = useState('')
  const [queryloc, setQueryloc] = useState('')
  const [querytype, setQuerytype] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(api_url + `property/get`).then(res => {
      console.log(res.data, '==========>img')
      setMyPost(res.data.data)
    })
  }, [])


  return (
    <>
      <section className="property_management m-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">
                  ID
                </label>
                <div className="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="ID"
                  onChange={e => setQueryid(e.target.value)}
                />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="mb-3 row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">
                  City
                </label>
               <div className="col-sm-10">
               <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="City"
                  onChange={e => setQuerycity(e.target.value)}
                />
               </div>
              </div>
            </div>
            <div className="col-md-4 row">
            <div className='col-md-12 '>
          <Link to="/addProject" className='btn  btn-lg btn-outline' style={{backgroundColor:'#4DB749'}}>Add Project</Link>
          <Link to="/packages" className='btn btn-lg text-white' style={{backgroundColor:'#4DB749',marginLeft:"5px"}}>Choose Plan</Link>
          </div>
          
            </div>
            {/* <div className="col-md-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Location"
                  onChange={e => setQueryloc(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Property Type
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="property Type"
                  onChange={e => setQuerytype(e.target.value)}
                />
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <ul class="nav nav-pills  mb-3" id="pills-tab" role="tablist" style={{ gap: '20px' }}>
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
                    Listing
                  </button>
                </li> */}
                {/* <li class="nav-item" role="presentation">
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
                </li> */}
                {/* <li class="nav-item" role="presentation">
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
                </li> */}
                {/* <li class="nav-item" role="presentation">
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
                </li> */}
                {/* <li class="nav-item" role="presentation">
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
                </li> */}
              {/* </ul> */}
              <div >
              <h3 className='text-dark'>My Listings</h3>
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <section className="bg-white ">
                    <div className="container">
                      

                      <div className='text-center py-2'>

                        <table class="table">
                          <thead class="table-light">
                            <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {myPost && myPost.filter(i => {

                              if (i?.userId ? (i?.userId).toString() : null === localStorage.getItem('mainUserId')) {
                                console.log(i?.city)
                                const nameMatch =
                                  querycity.length === 0 || i.city && i?.city.toLowerCase().includes(querycity.toLocaleLowerCase());

                                // If searchcate is empty, return true for all items (no filtering)
                                const idMatch = queryid.length === 0 || i.id.toString() === (queryid);


                                return nameMatch && idMatch
                              }
                            })
                              .map((i, index) => {
                                if ((i?.userId).toString() === localStorage.getItem('mainUserId')) {
                                  return (<>
                                    <tr>
                                      <td>{i?.id}</td>
                                      <td>{i?.title}</td>
                                      <td>{i?.city}</td>
                                      <td>{i?.price}</td>
                                      <td>{i?.location}</td>
                                      <td>{i?.type}</td>
                                      <td><span class="badge badge-pill badge-success text-dark">Active</span></td>
                                      <td><i className="fa fa-eye" onClick={() => navigate(`/view_property/${i?.id}`)}></i></td>


                                    </tr>


                                  </>)
                                }
                              })}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </section>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <section className=" py-3 m-4 bg-white ">
                    <div className="container pb-3">
                      <h3 className='text-dark'>My Listings</h3>

                      <div className='text-center py-2'>

                      <table class="table">
                          <thead class="table-light">
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {myPost && myPost.filter(i => {

                              if (i?.userId ? (i?.userId).toString() : null === localStorage.getItem('mainUserId')) {
                                console.log(i?.city)
                                const nameMatch =
                                  querycity.length === 0 || i.city && i?.city.toLowerCase().includes(querycity.toLocaleLowerCase());

                                // If searchcate is empty, return true for all items (no filtering)
                                const idMatch = queryid.length === 0 || i.id.toString() === (queryid);


                                return nameMatch && idMatch
                              }
                            })
                              .map((i, index) => {
                                if ((i?.userId).toString() === localStorage.getItem('mainUserId')) {
                                  return (<>
                                    <tr>
                                      <td>{i?.id}</td>
                                      <td>{i?.title}</td>
                                      <td>{i?.city}</td>
                                      <td>{i?.price}</td>
                                      <td>{i?.location}</td>
                                      <td>{i?.type}</td>
                                      <td>Active</td>
                                      <td><i className="fa fa-eye" onClick={() => navigate(`/view_property/${i?.id}`)}></i></td>


                                    </tr>


                                  </>)
                                }
                              })}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </section>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <section className=" py-3 m-4 bg-white ">
                    <div className="container pb-3">
                      <h3 className='text-dark'>My Listings</h3>

                      <div className='text-center py-2'>

                      <table class="table">
                          <thead class="table-light">
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {myPost && myPost.filter(i => {

                              if (i?.userId ? (i?.userId).toString() : null === localStorage.getItem('mainUserId')) {
                                console.log(i?.city)
                                const nameMatch =
                                  querycity.length === 0 || i.city && i?.city.toLowerCase().includes(querycity.toLocaleLowerCase());

                                // If searchcate is empty, return true for all items (no filtering)
                                const idMatch = queryid.length === 0 || i.id.toString() === (queryid);


                                return nameMatch && idMatch
                              }
                            })
                              .map((i, index) => {
                                if ((i?.userId).toString() === localStorage.getItem('mainUserId')) {
                                  return (<>
                                    <tr>
                                      <td>{i?.id}</td>
                                      <td>{i?.title}</td>
                                      <td>{i?.city}</td>
                                      <td>{i?.price}</td>
                                      <td>{i?.location}</td>
                                      <td>{i?.type}</td>
                                      <td>Active</td>
                                      <td><i className="fa fa-eye" onClick={() => navigate(`/view_property/${i?.id}`)}></i></td>


                                    </tr>


                                  </>)
                                }
                              })}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </section>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-expired"
                  role="tabpanel"
                  aria-labelledby="pills-expired-tab"
                >
                  <section className=" py-3 m-4 bg-white ">
                    <div className="container pb-3">
                      <h3 className='text-dark'>My Listings</h3>

                      <div className='text-center py-2'>

                      <table class="table">
                          <thead class="table-light">
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {myPost && myPost.filter(i => {

                              if (i?.userId ? (i?.userId).toString() : null === localStorage.getItem('mainUserId')) {
                                console.log(i?.city)
                                const nameMatch =
                                  querycity.length === 0 || i.city && i?.city.toLowerCase().includes(querycity.toLocaleLowerCase());

                                // If searchcate is empty, return true for all items (no filtering)
                                const idMatch = queryid.length === 0 || i.id.toString() === (queryid);


                                return nameMatch && idMatch
                              }
                            })
                              .map((i, index) => {
                                if ((i?.userId).toString() === localStorage.getItem('mainUserId')) {
                                  return (<>
                                    <tr>
                                      <td>{i?.id}</td>
                                      <td>{i?.title}</td>
                                      <td>{i?.city}</td>
                                      <td>{i?.price}</td>
                                      <td>{i?.location}</td>
                                      <td>{i?.type}</td>
                                      <td>Active</td>
                                      <td><i className="fa fa-eye" onClick={() => navigate(`/view_property/${i?.id}`)}></i></td>


                                    </tr>


                                  </>)
                                }
                              })}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </section>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-deleted"
                  role="tabpanel"
                  aria-labelledby="pills-deleted-tab"
                >
                  <section className=" py-3 m-4 bg-white ">
                    <div className="container pb-3">
                      <h3 className='text-dark'>My Listings</h3>

                      <div className='text-center py-2'>

                      <table class="table">
                          <thead class="table-light">
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {myPost && myPost.filter(i => {

                              if (i?.userId ? (i?.userId).toString() : null === localStorage.getItem('mainUserId')) {
                                console.log(i?.city)
                                const nameMatch =
                                  querycity.length === 0 || i.city && i?.city.toLowerCase().includes(querycity.toLocaleLowerCase());

                                // If searchcate is empty, return true for all items (no filtering)
                                const idMatch = queryid.length === 0 || i.id.toString() === (queryid);


                                return nameMatch && idMatch
                              }
                            })
                              .map((i, index) => {
                                if ((i?.userId).toString() === localStorage.getItem('mainUserId')) {
                                  return (<>
                                    <tr>
                                      <td>{i?.id}</td>
                                      <td>{i?.title}</td>
                                      <td>{i?.city}</td>
                                      <td>{i?.price}</td>
                                      <td>{i?.location}</td>
                                      <td>{i?.type}</td>
                                      <td>Active</td>
                                      <td><i className="fa fa-eye" onClick={() => navigate(`/view_property/${i?.id}`)}></i></td>


                                    </tr>


                                  </>)
                                }
                              })}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </section>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-inactive"
                  role="tabpanel"
                  aria-labelledby="pills-inactive-tab"
                >
                  <section className=" py-3 m-4 bg-white ">
                    <div className="container pb-3">
                      <h3 className='text-dark'>My Listings</h3>

                      <div className='text-center py-2'>

                      <table class="table">
                          <thead class="table-light">
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                          </thead>
                          <tbody>
                            {myPost && myPost.filter(i => {

                              if (i?.userId ? (i?.userId).toString() : null === localStorage.getItem('mainUserId')) {
                                console.log(i?.city)
                                const nameMatch =
                                  querycity.length === 0 || i.city && i?.city.toLowerCase().includes(querycity.toLocaleLowerCase());

                                // If searchcate is empty, return true for all items (no filtering)
                                const idMatch = queryid.length === 0 || i.id.toString() === (queryid);


                                return nameMatch && idMatch
                              }
                            })
                              .map((i, index) => {
                                if ((i?.userId).toString() === localStorage.getItem('mainUserId')) {
                                  return (<>
                                    <tr>
                                      <td>{i?.id}</td>
                                      <td>{i?.title}</td>
                                      <td>{i?.city}</td>
                                      <td>{i?.price}</td>
                                      <td>{i?.location}</td>
                                      <td>{i?.type}</td>
                                      <td>Active</td>
                                      <td><i className="fa fa-eye" onClick={() => navigate(`/view_property/${i?.id}`)}></i></td>


                                    </tr>


                                  </>)
                                }
                              })}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default PropertyManagements;
