import React from 'react'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
import { BsWalletFill } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Career = () => {

  const Submit= ()=>{
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const city=document.getElementById('city').value;
    const address=document.getElementById('address').value;
    const phone=document.getElementById('phone').value;
    const resume=document.getElementById('resume').files;
    if(name.length===0 || email.length===0 || phone.length===0 || resume.length===0 || city.length===0 || address.length===0){
      toast.error('Must enter all fields!');
    }
    else{
      toast.success('Apply for career successfully!');
    }

  }
  return (
    <>
      <TopNav />
      <BottomNav />
      <section className=" career_us">
        <div className="container py-5">
          <div className="row">
            {/* <div className="col-md-7">
              <h1>Career</h1>
              <h3>Join us in making a difference!</h3>
              <p>
                <span></span>
                If you believe you possess the qualities needed to become part of <br/>
                 one of the most vibrant and exceptional workplaces in Pakistan,<br/> 
                 send us your resume at hr@makkaan.com.
                {" "}
              </p>
            </div> */}
            {/* <div className="col-md-5">
              <div className="text-center">
                <img src={require("../../logo.png")} width="350px" alt="" />
              </div>
              <div className="d-flex justify-content-between pt-3">
                <div className="d-flex">
                  <img
                    src={require("../../assets/images/buy.png")}
                    width="30px"
                    height="30px"
                    alt=""
                  />
                  <h3 className="ps-2" style={{ color: "#707070" }}>
                    BUY
                  </h3>
                </div>
                <div className="d-flex ">
                  <img
                    src={require("../../assets/images/investment.png")}
                    height="30px"
                    width="30px"
                    alt=""
                  />
                  <h3 className="ps-2" style={{ color: "#707070" }}>
                    INVEST
                  </h3>
                </div>
                <div className="d-flex">
                  <img
                    src={require("../../assets/images/rent.png")}
                    width="30px"
                    height="30px"
                    alt=""
                  />
                  <h3 className="ps-2 " style={{ color: "#707070" }}>
                    RENT
                  </h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className='container py-4'>
          <div className='row g-5'>
            {/* <div className='col-md-12 pb-4'>
              <div className="row">

                <div className="col-md-3 p-0">
                  <input
                    className="form-control py-3"
                    type="search"
                    placeholder="Search Property..."
                  />
                </div>

                <div className="col-md-3 p-0">
                  <input
                    className="form-control py-3"
                    type="search"
                    placeholder="Job Type"
                  />
                </div>
                <div className="col-md-3 p-0">
                  <input
                    className="form-control py-3"
                    type="search"
                    placeholder="Location"
                  />
                </div>
                <div className="col-md-3 p-0">
                  <button class="btn btn-primary w-100" style={{ height: '50px' }}>Search</button>
                </div>
              </div>
            </div> */}
            <div className='col-md-12 border rounded-3 p-4 mx-auto'>
              <div className='row py-4'>
                <div className='col-md-8'>
                  <div className='d-flex ' style={{ gap: '20px' }}>
                    <i className=''><BsWalletFill color='#4DB749' size={30} /></i>
                    <h4>Senior Software Engineer</h4>
                  </div>
                  <div className='pt-4 d-flex' style={{ gap: '10px ' }}>
                    <button className='btn btn-light'>Fulltime</button>
                    <button className='btn btn-light'>Engineering</button>
                    <button className='btn btn-light'>Remote</button>
                  </div>
                  <div>

                  </div>
                </div>
                <div className='col-md-4 text-end'>
                  <div className=''>

                    <h4>  <i className=''><RiMoneyDollarCircleLine color='#4DB749' size={20} /></i> $60k-100k /Rs</h4>
                  </div>
                  <div className='pt-4'>
                    <button class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#exampleModal3">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 border rounded-3 p-4 mx-auto'>
              <div className='row py-4'>
                <div className='col-md-8'>
                  <div className='d-flex ' style={{ gap: '20px' }}>
                    <i className=''><BsWalletFill color='#4DB749' size={30} /></i>
                    <h4>Senior Software Engineer</h4>
                  </div>
                  <div className='pt-4 d-flex' style={{ gap: '10px ' }}>
                    <button className='btn btn-light'>Fulltime</button>
                    <button className='btn btn-light'>Engineering</button>
                    <button className='btn btn-light'>Remote</button>
                  </div>
                  <div>

                  </div>
                </div>
                <div className='col-md-4 text-end'>
                  <div className=''>

                    <h4>  <i className=''><RiMoneyDollarCircleLine color='#4DB749' size={20} /></i> $60k-100k /Rs</h4>
                  </div>
                  <div className='pt-4'>
                    <button class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#exampleModal3">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">

          <div class="modal-content rounded-4">

            <div class="modal-body ">
              <div className="text-center"><h2 className="text-dark">Apply For Career</h2></div>
              <div>
                <form className="p-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control py-3"
                          id="name"
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../../assets/images/contract.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control py-3"
                          id='email'
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../../assets/images/house-lock.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control py-3"
                          id='phone'
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../../assets/images/house-lock.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          placeholder="Address"
                          className="form-control py-3"
                          id='address'
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../../assets/images/house-lock.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          placeholder="City"
                          className="form-control py-3"
                          id='city'
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../../assets/images/house-lock.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group position-relative">
                        <input
                          type="file"
                          placeholder="Resume"
                          className="form-control py-3"
                          id='resume'
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../../assets/images/house-lock.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                   
                    <div className="col-md-12 mt-4">
                      <button type="button" onClick={Submit} className=" btn w-100 text-white btn-lg " id='signclose' style={{ backgroundColor: '#4DB749' }}  >Apply Now</button>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Career