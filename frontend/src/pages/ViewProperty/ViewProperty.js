import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import Footer from '../../components/footer/Footer';
import ThermerSlider from '../../components/ThermerSlider';
import { MdCall, MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram,AiOutlineHeart ,AiFillHeart} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiChatSmile2Fill } from 'react-icons/ri'
import { FiCheck } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_url from '../../ApiUrl';

const ViewProperty = () => {

    const { id } = useParams()

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);


    const [myPost, setMyPost] = useState([])


    useEffect(() => {
        axios.get(api_url + `property/get/${id}`).then(res => {
            console.log(res.data, '==========>img')
            setMyPost(res.data.data)
        })
    }, [])


    const submitForm = () => {
        const name = document.getElementById('name').value
        const email = document.getElementById('sendemail').value
        const phone = document.getElementById('phone').value
        const message = document.getElementById('message').value
        if (name.length < 0) {
            toast.error('Must enter name');
        }
        else if (email.length < 0) {
            toast.error('Must enter email');
        }
        else if (phone.length < 0) {
            toast.error('Must enter phone');
        }
        else if (message.length < 0) {
            toast.error('Must enter message');
        }
        else {

            const params = {
                'name': name,
                'email': email,
                'phone': phone,
                'message': message,
                'propertyId':id,
                'propertymail':myPost?.users?myPost?.users?.email:'newsletter@makkaan.com',
            }

            axios.post(api_url + `enquiry/create`, params).then(res => {
                if (res.data.status === 'ok') {
                    toast.success('Enquiry created successfully');
                }
            })
        }
    }



    const feature = myPost?.feature && myPost?.feature.split(',');

    console.log(feature, '===========================>>>>>>>>>>>')


    return (<>
        {myPost && myPost ? <div className='position-relative view_property'>
            <ToastContainer />
            <div className='position-fixed w-100' style={{ zIndex: '999999' }}>
                <TopNav />
                <BottomNav />
            </div>

            <section style={{ backgroundColor: '#3F4040' }}>
                <div className='container-fluid px-lg-5 px-3' style={{ paddingTop: '8%' }}>




                    <div className='pb-4 pt-5'>


                        <div className='row'>
                            <div className='col-md-8'>
                                {/* <Carousel>
                            <div>
                                <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt='first'/>
                            </div>
                            <div>
                                <img src='https://img.freepik.com/free-photo/living-room-with-blue-couch-white-wall-with-painting-it_1340-23237.jpg?w=740&t=st=1681994652~exp=1681995252~hmac=49f1e1d6abbae60a251c29d6b778d7e74d134d726ab075b601d3cf6ccbe65e12' alt='second'/>
                            </div>
                            <div>
                                <img src='https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg' alt='third'/>
                            </div>
                        </Carousel> */}
                                <ThermerSlider id={id} />
                            </div>
                            <div className='col-md-4'>
                                <div>
                                    <h5 className='text-center text-white'>MAKE AN ENQUIRY</h5>
                                    <div>
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <div class="mb-3">

                                                    <input
                                                        type="text"
                                                        class="form-control rounded-1"
                                                        id="name"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="mb-3">

                                                    <input
                                                        type="email"
                                                        class="form-control rounded-1"
                                                        id="sendemail"
                                                        placeholder=" Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="mb-3">

                                                    <input
                                                        type="text"
                                                        class="form-control rounded-1"
                                                        id="phone"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div class="mb-3">

                                                    <textarea class="form-control rounded-1" placeholder='Message' id="message" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button class="btn btn-primary w-100 py-1" onClick={() => submitForm()}>Send</button>
                                            </div>

                                            <div className='col-md-12 pt-4'>
                                                <div className='d-flex justify-content-center ' style={{ gap: '12px' }}>
                                                    <a href={`tel:${myPost?.phone}`}>
                                                        <button class="btn btn-danger  py-1 px-5"> <MdCall color="#fff" /> Call</button>
                                                    </a>
                                                    <a href={`mailto:${myPost?.email}`}>
                                                        <button class="btn btn-primary  py-1 px-5"> <MdEmail color="#fff" /> Email</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>



                        
                    <div className='d-flex justify-content-between align-items-center border-bottom pb-3 mt-5'>
                        <div>
                            <h3 className='text-white'>{myPost?.title}</h3>
                            <i className='fa fa-map-marker fs-4 text-success me-3'></i>
                            <span className='fs-4 fw-normal text-white'>Address: {myPost?.type}, {myPost?.location}, {myPost?.city}</span>
                        </div>
                        <div className='text-end'>
                            <h3 className='text-white' style={{ color: '#8AC17C' }}>RS. {myPost?.price}</h3>
                            <span className='fs-4 fw-normal text-white'>For {myPost?.purpose}</span>
                        </div>
                    </div>


                    <div className='d-flex justify-content-between align-items-center my-3 flex-wrap'>
                        <div>
                            <h4 className='fw-normal text-white'>PROPERTY ID: {myPost?.id}</h4>
                        </div>
                        {/* <div className='d-flex justify-content-between align-items-center gap-2'>
                            <h4 className='fw-normal text-white'>Add to Favorites:</h4>


                            {myPost?.myLike?.includes(localStorage.getItem('mainUserId')) ?  <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',display:'flex'
                        }}
                        
                        onClick={() => {


                            const params = {

                              userId: localStorage.getItem('mainUserId'),
                            //   productId:
                            };
          
                            axios
                              .put(`${api_url}property/like/${myPost?.id}`, params)
                              .then(res => {
                                console.log(res.data);
          
                                if (res.data.status === 'ok') {
                                   
                                    toast.success(res.data.message);
          
                                }
                              })
                              .catch(error => {
                                console.log(error);
                              });
                          }}
                          

                        
                        >
                                <AiOutlineHeart size={20}  />
                            </div>:
                             <div style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',display:'flex'
                            }}
                            
                            onClick={() => {
    
    
                                const params = {
    
                                  userId: localStorage.getItem('mainUserId'),
                                //   productId:
                                };
              
                                axios
                                  .put(`${api_url}property/like/${myPost?.id}`, params)
                                  .then(res => {
                                    console.log(res.data);
              
                                    if (res.data.status === 'ok') {
                                       
                                        toast.success(res.data.message)
              
                                    }
                                  })
                                  .catch(error => {
                                    console.log(error);
                                  });
                              }}
                              
    
                            
                            >
                                    <AiFillHeart size={20} color={'red'}   />
                                </div>}
                            

                           
                            

                       
{/*               
                            <img 
                            
                           
                            
                            src={require('../../assets/images/header-contect icons/On-favorite.png')} width="30px" alt='' /> */}
                        {/* </div> */} 
                        {/* <div className='d-flex justify-content-between align-items-center gap-2'>
                            <h4 className='fw-normal text-white'>Share:</h4>
                            <i><IoLogoWhatsapp color='#fff' size={25} onClick={() => {
                                window.location.href = 'https://web.whatsapp.com/'
                            }} /></i>
                            <i><AiFillInstagram color='#fff' size={25} onClick={() => {
                                window.location.href = 'https://www.instagram.com/'
                            }} /></i>
                            <i><BsFacebook color='#fff' size={25} onClick={() => {
                                window.location.href = 'https://www.facebook.com/'
                            }} /></i>
                        </div> */}
                    </div>
                    </div>





                </div>
            </section>

            <section style={{ backgroundColor: '#F4FBFF' }}>
                <div className='container-fluid py-5'>

                    <div className='bg-white p-5 shadow mb-5 rounded-4'>
                        <h2 className='text-bold'>Description</h2>



                        <div className='row pt-4'>
                            <div className='col-md-4 mb-5 ' >
                                <div className='d-flex justify-content-start align-items-center gap-2' >
                                    <i className='fa fa-home fs-3 '></i>
                                    <div className='d-flex align-items-center ms-5'>
                                        <p className='m-0 p-0 fw-normal  ' style={{color:'black'}}>Area: </p>
                                        <p className='fw-normal p-0 m-0 ps-2'> {myPost?.size} </p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className='col-md-4 mb-5'>
                                <div className='d-flex justify-content-start align-items-center gap-2' >
                                    <img src={require('../../assets/images/header-contect icons/Bedrooms.png')} width="28px" alt='' />
                                    <div className='d-flex align-items-center ms-5'>
                                        <p className='m-0 p-0 fw-normal'>Beds:</p>
                                        <p className='fw-normal p-0 m-0 ps-2'>{myPost?.beds} Bedrooms</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className='col-md-4 mb-5' >
                                <div className='d-flex justify-content-start align-items-center gap-2' >
                                    <img src={require('../../assets/images/header-contect icons/Bathrooms.png')} width="30px" alt='' />
                                    <div className='d-flex align-items-center ms-5'>
                                        <p className='m-0 p-0'>Baths:</p>
                                        <p className='fw-normal p-0 m-0 ps-2'>{myPost?.baths} Baths</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                            <div className='col-md-4 mb-5'>
                                <div className='d-flex justify-content-start align-items-center gap-2'>
                                    <i className='fa fa-home fs-3 text-success'></i>
                                    <div className='d-flex align-items-center ps-5'>
                                        <p className='m-0 p-0'>Rooms:</p>
                                        <p className='fw-normal p-0 m-0 ps-2'>4 Rooms</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                           
                            <div className='col-md-4 mb-5'>
                                <div className='d-flex justify-content-start align-items-center gap-2'>
                                    <i className='fa fa-bed fs-3 text-success'></i>
                                    <div className='d-flex align-items-center ps-5'>
                                        <p className='m-0 p-0'>Floors:</p>
                                        <p className='fw-normal p-0 m-0 ps-2'>3 Floors</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                         
                             
                            <div className='col-md-4 mb-5'>
                                <div className='d-flex justify-content-start align-items-center gap-2'>
                                    <i className='fa fa-bath fs-3 text-success'></i>
                                    <div className='d-flex align-items-center ps-5'>
                                        <p className='m-0 p-0'>Garage:</p>
                                        <p className='fw-normal p-0 m-0 ps-2'>1 Garage</p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                       
                        </div>
                     
                          
                           
                  


                        <div className='my-4'>
                            <p>
                                {myPost?.description}
                            </p>
                        </div>
                    </div>

                    <div className='bg-white p-5 shadow mb-5 rounded-4'>
                        <h2 className='text-bold'>Features</h2>

                        <div className='px-5'>

                            <div className='row'>
                                {feature && feature.length > 0 ? feature.map(i => {
                                    return (<>
                                        <div className='col-md-4 mb-5'>
                                            <div className='d-flex align-items-center gap-2'>
                                                {/* <i className='fa fa-check fs-2 text-success'></i> */}
                                                <FiCheck color="#4DB749" size={30} />
                                                <div>
                                                    <p className='m-0 p-0 fw-normal'>{i}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }) : null}





                            </div>



                        </div>
                    </div>
                </div>




            </section>



            <Footer />

        </div> :
            <h2>No Property Found</h2>
        }
    </>
    )
}

export default ViewProperty