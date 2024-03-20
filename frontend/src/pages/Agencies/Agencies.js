import React, { useEffect } from 'react'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
import api_url from '../../ApiUrl'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

const Agencies = () => {


    const navigate=useNavigate()

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);


    const submit = () => {



        const fullName = document.getElementById('fullName')
        const phone = document.getElementById('phone')
        const city = document.getElementById('city')
        const email = document.getElementById('emails')
        const yourMessage = document.getElementById('yourMessage')
        const subject = document.getElementById('subject')

        if (fullName.value.length === 0) {
            toast.error('Must enter name');

        }
        else if (phone.value.length === 0) {
            toast.error('Must enter phone');
        }
        else if (yourMessage.value.length === 0) {
            toast.error('Must enter password');
        }
        else if (subject.value.length === 0) {
            toast.error('Must enter subject');
        }

        else if (city.value.length === 0) {
            toast.error('Must enter city');
        }

        else {

            const params = {
                fullName: fullName.value,
                phone: phone.value,
                email: email.value,
                yourMessage: yourMessage.value,
                city: city.value,
                subject: subject.value,
            }


            axios.post(`${api_url}contact/create`, params).then((res) => {
                if (res.data.status === 'ok') {
                    toast.success('Your message submitted successfully!');
                }
                else {
                    toast.error(res.data.message);
                }
            })
        }

    }


    return (
        <>
            <TopNav />
            <BottomNav />
            <ToastContainer />
            <section className=''>

                <div className='container py-5' style={{
                }}>
                    <div className=''>
                        <div>
                            <h2>Let's Talk About Everything!</h2>
                            <p>Have a question or feedback? Feel at ease to contact us.
                            </p>
                        </div>

                    </div>
                    <div className='row'  >
                        <div className='col-md-7 pt-5' style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255,0.6),rgba(255, 255, 255, 0.6)),url('./assets/images/contactus.jpeg')" }}>
                            {/* <div className='d-flex align-items-center justify-content-between'>
                                <h6>Head Office</h6>
                                <p className='m-0'><i class="bi bi-telephone-fill me-2" style={{color:'#4DB749'}}></i>UAN: <Link className='text-dark' to='tel:+923311111049'>+923311111049</Link></p>
                                <p className='m-0'><i class="bi bi-envelope me-2" style={{color:'#4DB749'}}></i>Mail: <Link className='text-dark' to='mailto:info@makkaan.com'>info@makkaan.com</Link></p>
                            </div> */}
                            <img src={require('../../assets/images/contact page-min.png')} width='100%' height='100%' />


                        </div>
                        <div className='col-md-5'>
                            <div >




                                <div className='rounded-4 shadow-lg p-4 bg-white'>

                                    <form>
                                        <div className="mb-2">
                                            <label htmlFor="exampleInputName" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                id="fullName"
                                                aria-describedby="emailHelp"
                                                placeholder='Write Full Name'
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                id="emails"
                                                aria-describedby="emailHelp"
                                                placeholder='abc@xyz.com'
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                id="phone"
                                                aria-describedby="emailHelp"
                                                placeholder='+923-40000000000'
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                id="city"
                                                aria-describedby="emailHelp"
                                                placeholder='Your city'
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                id="subject"
                                                aria-describedby="emailHelp"
                                                placeholder='Inquiry'
                                            />
                                        </div>
                                        <div className="pt-1">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Your Message
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                id="yourMessage"
                                                aria-describedby="emailHelp"
                                                placeholder='Message body'
                                            />
                                        </div>



                                        <div className='text-end mt-5'>

                                            <button type='button' className='btn w-100 py-2 text-white' style={{ backgroundColor: '#4DB749', opacity: 0.8 }} onClick={submit}>SUBMIT</button>
                                        </div>
                                    </form>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-md-12'>
                            <div className='rounded-4 shadow bg-white container p-5  px-4'>
                                <div className='row'>
                                    <div className='col-md-4'>

                                        <h2>Are you an agent?</h2>
                                        <p>Endorse your real estate projects through Makkaan.com’s best packages. 
</p>
                                        <button className='btn shadow-sm btn-outline-success w-100 btn-md rounded-3 py-2 mt-3' onClick={()=>navigate('/plan')}>CHOOSE PLAN NOW</button>
                                    </div>
                                    <div className='col-md-5'></div>
                                    <div className='col-md-3 text-center'>
                                        <div className='my-3'>
                                            <img src={require('../../assets/images/are you an agent.jpg')} style={{ width: '200px', height: '200px' }} alt='img' />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='rounded-4 shadow bg-white container p-5  px-4'>
                                <div className='row'>
                                    <div className='col-md-4'>

                                        <h2>Are you an Agency?</h2>
                                        <p>Promote your digital presence with Makkaan.com's real estate marketing packages. 
</p>
                                        <button className='btn btn-md shadow-sm btn-outline-success w-100 py-2 mt-3' onClick={()=>navigate('/plan')}>CHOOSE PLAN NOW</button>
                                    </div>
                                    <div className='col-md-5'></div>
                                    <div className='col-md-3 text-center'>
                                        <div className='my-3'>
                                            <img src={require('../../assets/images/are you an agency.jpg')} style={{ width: '200px', height: '200px' }} alt='img' />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='rounded-4 shadow bg-white container p-5  px-4'>
                                <div className='row'>
                                    <div className='col-md-4'>

                                        <h2>Are you a Developer?</h2>
                                        <p>Elevate your projects and redefine success with Makkaan.com’s premium developer packages.
</p>
                                        <button className='btn btn-md shadow-sm btn-outline-success w-100 py-2 mt-3' onClick={()=>navigate('/plan')}>CHOOSE PLAN NOW</button>
                                    </div>
                                    <div className='col-md-5'></div>
                                    <div className='col-md-3 text-center'>
                                        <div className='my-3'>
                                            <img src={require('../../assets/images/are you a developer.jpg')} style={{ width: '200px', height: '200px' }} alt='img' />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Agencies