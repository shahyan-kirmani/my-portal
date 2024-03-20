import React from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'

const Addlocation = () => {
    return (
        <div className='position-relative'>
            <div className='position-fixed w-100' style={{ zIndex: '999999' }}>
                <TopNav />
                <BottomNav />
            </div>


            <div className='' style={{ paddingTop: '7%' }}>

                <div>
                    <img src='https://d1ja9tyo8nbkbc.cloudfront.net/50428124_S0405/S0405/S0405-R0100/1031194376/2002536119571.jpg?version=1670007029&width=640' alt='banner' style={{ width: '100%', height: '40vh' }} />
                </div>


                <div className='container px-3 my-4'>

                    <div className='rounded-5 mb-4 bg-white border-0 shadow row p-3'>
                        <div className='col-lg-2 col-md-2 col-sm-12'>
                            <h4>LOCATION & PURPOSE</h4>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Select Purpose
                                    </label>
                                </div>
                                <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className=' rounded-5 border px-4 py-1 me-3'>RENT</span>
                                <span className=' rounded-5 border px-4 py-1 me-3'>SELL</span>
                            </div>


                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Select Property Type
                                    </label>
                                </div>
                                <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div>
                            </div>




                            <div className='mb-4'>

                                <>
                                    <ul className="nav nav-pills mb-3 border-bottom border-dark" id="pills-tab" role="tablist">
                                        <li className="nav-item me-4" role="presentation">
                                            <button
                                                className="nav-link active text-dark fw-bold p-0 text-dark fw-bold"
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                            >
                                                Home
                                            </button>
                                        </li>
                                        <li className="nav-item me-4" role="presentation">
                                            <button
                                                className="nav-link text-dark fw-bold p-0 text-dark fw-bold"
                                                id="pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="false"
                                            >
                                                Plots
                                            </button>
                                        </li>
                                        <li className="nav-item me-4" role="presentation">
                                            <button
                                                className="nav-link text-dark fw-bold p-0 text-dark fw-bold"
                                                id="pills-contact-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-contact"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-contact"
                                                aria-selected="false"
                                            >
                                                Commercial
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active "
                                            id="pills-home"
                                            role="tabpanel"
                                            aria-labelledby="pills-home-tab"
                                            tabIndex={0}
                                        >
                                            <div className='d-flex flex-wrap'>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>House</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Flat</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Upper Portion</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Lower Portion</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Room</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Farm House</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Pent House</div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="pills-profile-tab"
                                            tabIndex={0}
                                        >
                                            <div className='d-flex flex-wrap'>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Resedential Plot</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Commercial Plot</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Agricultural Land</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Industrial Land</div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-contact"
                                            role="tabpanel"
                                            aria-labelledby="pills-contact-tab"
                                            tabIndex={0}
                                        >
                                            <div className='d-flex flex-wrap'>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Office</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Shop</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Warehouse</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Factory</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Building</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Other</div>
                                            </div>
                                        </div>

                                    </div>
                                </>



                            </div>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        City
                                    </label>
                                </div>
                                <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div>
                            </div>


                            <div className='mb-3'>
                                <select class="form-select py-3" aria-label="Default select example">
                                    <option selected>City</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Rawalpindi">Rawalpindi</option>
                                    <option value="Lahore">Lahore</option>
                                </select>
                            </div>



                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Location
                                    </label>
                                </div>
                                <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div>
                            </div>


                            <div class="mb-3">
                                <input type="text" class="form-control py-3" id="location" placeholder="Location" />
                            </div>



                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>



                    <div className='rounded-5 mb-4 bg-white border-0 shadow row p-3'>
                        <div className='col-lg-2 col-md-2 col-sm-12'>
                            <h4>PRICE & AREA</h4>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Area Size
                                    </label>
                                </div>
                                <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control" id="unit" placeholder="Enter Unit" />

                                <select class="form-select w-25 py-2" aria-label="Default select example">
                                    <option selected>Marla</option>
                                    <option value="Sq.Yd.">Sq. Yd.</option>
                                    <option value="Sq.M.">Sq. M.</option>
                                    <option value="Sq.Ft.">Sq. Ft.</option>
                                </select>
                            </div>





                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Monthly Rent
                                    </label>
                                </div>
                                <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control" id="price" placeholder="Enter Price" />

                                <select class="form-select w-25" aria-label="Default select example">
                                    <option selected value='PKR'>PKR</option>
                                    <option value="DLR">DLR</option>
                                    <option value="INR">INR</option>
                                </select>
                            </div>



                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>





                    <div className='rounded-5 mb-4 bg-white border-0 shadow row p-3'>
                        <div className='col-lg-2 col-md-2 col-sm-12'>
                            <h4>FEATURE & AMENITIES</h4>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Bedrooms
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex">
                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2'>Studio</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>1</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>2</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>3</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>4</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>5</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>6</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>7</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>8</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>9</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>10</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>10+</div>
                            </div>


                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Bathrooms
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex">
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>1</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>2</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>3</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>4</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>5</div>
                                <div className='border me-3 mb-2 d-flex align-items-center justify-content-center' style={{ width: '35px', height: '35px', borderRadius: '35px' }}>6</div>

                            </div>





                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        <h6>Feature & Amenities</h6>
                                    </label>
                                </div>
                            </div>


                            <div className='mb-3'>
                                <small>Add aditional features e.g parking spaces, waste disposal, internet etc.</small>
                            </div>



                            <div>
                                <button className='btn text-white py-1' style={{ backgroundColor: '#4DB749' }}>Add Amenities</button>
                            </div>





                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>




                    <div className='rounded-5 mb-4 bg-white border-0 shadow row p-3'>
                        <div className='col-lg-2 col-md-2 col-sm-12'>
                            <h4>ADD INFORMATION</h4>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Title
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control" id="unit" placeholder="Enter Beautiful Title" />
                            </div>





                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Description
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3">
                                <div class="form-floating">
                                    <textarea class="form-control w-100" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                    <label for="floatingTextarea2">Describe your property, its features, area in it. etc.</label>
                                </div>

                            </div>



                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>



                    <div className='rounded-5 mb-4 bg-white border-0 shadow row p-3'>
                        <div className='col-lg-2 col-md-2 col-sm-12'>
                            <h4>PROPERTY IMAGES & VIDEOS</h4>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>




                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Upload Images of your property
                                    </label>
                                </div>
                            </div>


                            <div className='row rounded-3 p-4' style={{backgroundColor:'#F5F5F5'}}>
                                <div className='col-md-6 d-flex justify-content-center align-items-center flex-wrap'>
                                <button className='btn btn-outline-success' >Upload Images</button>
                                </div>
                                <div className='col-md-6'>
                                    <small>Ads with pictures get 5x more views and leads</small>
                                    <br/>
                                    <br/>
                                    <small>Upload good quality pictures with proper lighting.</small>
                                    <br/>
                                    <br/>
                                    <small>Cover all areas of your property</small>
                                </div>

                            </div>




                            <div className=' w-100 mt-3 '>

                            <div className='row p-4 rounded-3' style={{backgroundColor:'#F5F5F5'}}>
                                <div className='col-md-12 px-5'>
                                    <h6>Add videos of your property</h6>
                                    <p>Add videos of your property from youtube. Upload on youtube and paste the link below.</p>
                                <button className='btn btn-outline-success' >Add Video</button>
                                </div>

                            </div>

                            </div>
                            



                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>




                    <div className='rounded-5 mb-4 bg-white border-0 shadow row p-3'>
                        <div className='col-lg-2 col-md-2 col-sm-12'>
                            <h4>CONTACT  INFORMATION</h4>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12'>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Email
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control" id="unit" placeholder="Enter your email" />
                            </div>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Mobile
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control" id="code" placeholder="+92" style={{width:'10%'}}/>
                                <input type="text" class="form-control" id="phone" />
                            </div>



                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Landline
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control" id="code" placeholder="051" style={{width:'10%'}}/>
                                <input type="text" class="form-control" id="phone" />
                            </div>



                            <div className='text-end'>
                            <button className='btn text-white px-5 rounded-3' style={{backgroundColor:'#4DB749'}}>SUBMIT</button>
                            </div>




                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>


                </div>

            </div>



        </div>
    )
}

export default Addlocation