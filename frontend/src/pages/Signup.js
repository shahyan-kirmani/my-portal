import React from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/footer/Footer'

const Signup = () => {

    
    return (
        <div>
            <div className='w-100' style={{ zIndex: '999999' }}>
                <TopNav />
                <BottomNav />
            </div>
           
           <div className='container-fluid'>
            <div className='row w-100 my-3'>
                <div className='col-md-7'>

                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        data-bs-ride="false"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://5.imimg.com/data5/WW/WH/MY-12611952/green-building-certification-1000x1000.jpg" className="d-block w-100" alt="img" style={{ height: '80vh' }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://d1ja9tyo8nbkbc.cloudfront.net/50428124_S0405/S0405/S0405-R0100/1031194376/2002536119571.jpg?version=1670007029&width=640" className="d-block w-100" alt="img2" style={{ height: '80vh' }} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev mx-5"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <i className='fa fa-arrow-left'></i>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next mx-5"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <i className='fa fa-arrow-right'></i>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className='col-md-5 p-0'>

                    <div className='position-relative formimg'>
                        <div className='row position-absolute top-0 w-100'>
                            <div className='col-md-11 mx-auto'>
                            <div className=''>
                            <div className='mx-3'>
                                <h5 className='fw-bold'>Sign Up</h5>
                            </div>

                            <div className='rounded-3 shadow-lg p-4 bg-white'>

                                <form>
                                    <div className="mb-2">
                                        <label htmlFor="exampleInputName" className="form-label fw-bold">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                            id="exampleInputName"
                                            aria-describedby="emailHelp"
                                            placeholder='Write Full Name'
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder='abc@xyz.com'
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder='Create a strong password'
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder='Confirm your password'
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                            Phone Number
                                        </label>
                                        <input
                                            type="Number"
                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder='+923-0000000'
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                            City
                                        </label>
                                        <input
                                            type="Number"
                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder='Enter your city'
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                                            Signing up as
                                        </label>
                                        <div className="form-check d-flex justify-content-between align-items-center">

                                            <div>
                                                <input type="checkbox" className="form-check-input" id="buyer" />
                                                <label className="form-check-label" htmlFor="buyer">
                                                    Buyer
                                                </label>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="form-check-input" id="seller" />
                                                <label className="form-check-label" htmlFor="seller">
                                                    Seller
                                                </label>
                                            </div>
                                            <div>
                                                <input type="checkbox" className="form-check-input" id="agency" />
                                                <label className="form-check-label" htmlFor="agency">
                                                    Agency
                                                </label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='text-end'>

                                        <button className='btn text-white' style={{ backgroundColor: '#4DB749' }}>Sign Up</button>
                                    </div>
                                </form>


                            </div>

                        </div>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
            </div>
           <Footer/>
        </div>
    )
}

export default Signup