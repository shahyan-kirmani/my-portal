import React, { useEffect } from 'react'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
import api_url from '../../ApiUrl'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {


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
            <br/>
            <br/>
            <div class="container" >
      <div class="row">
        <div class="col-md-6">
<div class="row mx-auto mt-5">
  <div class="col-md-8 mx-auto">
  	<h1 style={{fontWeight:"800",fontSize:"48px",lineHeight:"61.53px"}}>
    Let's Talk About Everything!

  	</h1>
  	<p style={{fontWeight:"400",fontSize:"30px",lineHeight:"36px"}}>Have a question or feedback? Feel at ease to contact us.</p>
   <div class="card p-5">
   	 <ul class="list-group list-group-light mb-4">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
    <i className="fas fa-phone"></i>
      <div class="ms-3">
        <p class=" mb-1" style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}>0300 1234567</p>
      </div>
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
    <i className="fab fa-whatsapp"></i>
      <div class="ms-3">
        <p class=" mb-1" style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}>0300 1234567</p>
      </div>
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
    <i className="fas fa-envelope"></i>
      <div class="ms-3">
        <p class=" mb-1" style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}>makkan@gmail.com</p>
      </div>
    </div>
  </li>
 
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
    <i className="fas fa-map-marker-alt"></i>

      <div class="ms-3">
        <p class=" mb-1" style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}>2nd Floor Jackson Heights, 
G.T. Rd, Rawalpindi, 46000	</p>
      </div>
    </div>
  </li>
 
</ul>
   </div>
   <br/><br/>
   <p style={{fontWeight:"400",fontSize:"18px",lineHeight:"21.6px"}}>
   	Hello there! If you'd like to ask us something, you can get in touch with us here! We'd love to address any and all concerns you may have.
   </p>
  </div>
</div>
        </div>
        <div class="col-md-6">
          <div class="card p-3">
        
        <div class="row">
  <div class="col-d-12 mt-3 ">
    
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example1" class="form-control border-bottom p-3" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example1">Your Name</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
    
    <div data-mdb-input-init class="form-outline">
      <input type="email" id="form8Example2" class="form-control border-bottom p-3" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example2">Phone Number</label>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-d-12 mt-3">
    
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example3" class="form-control border-bottom p-3" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example3">Email Address</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example4" class="form-control border-bottom p-3" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example4">Subject</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
   
  <div class="form-outline" data-mdb-input-init>
  <textarea class="form-control border-bottom" id="textAreaExample" rows="4"></textarea>
  <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="textAreaExample">Message</label>
</div>
  </div>
 
</div>
 <a href="" class="btn bg_makkan text-white mt-3 btn-lg" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px",backgroundColor:'#4DB749'}}>SEND YOUR QUESTION</a>
<br/>
      </div>
        </div>
      </div>

    <div class="container p-5">
    	 
			<div class="">
			  <div class="row">
			    <div class="col-md-12">
			      <a href="">
			        <img src={require('./../../img/ads/Group 10109.png')} style={{width:"100%",height:"230px"}} />
			      </a>
			    </div>
			  </div>
			</div>
			<br/>
			<br/>

			<div class="">
			  <div class="row">
			    <div class="col-md-12">
			      <a href="">
			        <img src={require('./../../img/ads/Group 10110.png')} style={{width:"100%",height:"230px"}} />
			      </a>
			    </div>
			  </div>
			</div>
			
      <br/>
			<br/>
			<div class="">
			  <div class="row">
			    <div class="col-md-12">
			      <a href="">
			        <img src={require('./../../img/ads/Group 10111.png')} style={{width:"100%",height:"230px"}} />
			      </a>
			    </div>
			  </div>
			</div>
    </div>
	

    </div>
            
            <Footer />
        </>
    )
}

export default Contact