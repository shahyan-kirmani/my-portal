import axios from "axios";
import React, { useEffect, useState } from "react";
import {FaRegUser} from 'react-icons/fa'
import {GiCombinationLock} from 'react-icons/gi'
import api_url from "../../ApiUrl";
import { toast } from "react-toastify";
const UserSettings = () => {
  const [user,setUser]=useState({})
  useEffect(()=>{
    axios.get(`${api_url}user/get/${localStorage.getItem('mainUserId')}`).then(res=>{
      console.log(res.data)
      setUser(res.data.data)
    })
  },[])


  const updateprofile=()=>{
    const fullName=document.getElementById('fullName').value
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    const phone=document.getElementById('phone').value


    const param={
      'fullName': fullName,
      'email': email,
      'password': password,
      'phone': phone
    }

    axios.put(`${api_url}user/update/${localStorage.getItem('mainUserId')}`,param).then(res=>{
      toast.success('user updated successfully')
    })


  }


  const changepass=()=>{
    const password = document.getElementById('mypassword').value
    const newPassword = document.getElementById('newPassword').value
    const confirmPassword = document.getElementById('confirmPassword').value
console.log(password, newPassword, confirmPassword,user?.password)
    if(password===user?.password){
      if(newPassword===confirmPassword){

        const param={
          'password': newPassword
        }

        axios.put(`${api_url}user/updatepass/${localStorage.getItem('mainUserId')}`,param).then(res=>{
          toast.success('Password updated successfully')
        })

      }
      else{
        toast.error('New password and confirmation password do not match')
      }
    }
    else{
      toast.error('Old password is incorrect')
    }
  }


  return (
    <>
      <section className="user_setting bg-color py-5" >
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div
                class="nav pt-4 pb-5 flex-column nav-pills me-3  bg-white rounded-2"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <GiCombinationLock color="#4DB749" size={20}/>
                    Change Password
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                <FaRegUser  />  Profile
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className=" bg-white p-4 rounded-3">
                    <div>
                      <h4>Change Password</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-9 ms-auto">
                        <div className="row">
                          <div className="col-md-12">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Enter Your Password
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="mypassword"
                                placeholder="Old password"
                              />
                            
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Enter New  Password
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="newPassword"
                                placeholder="New password"
                                // defaultValue={user?.password}
                              />
                            
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Confirm password
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="confirmPassword"
                                placeholder="Confirm password"
                              />
                            
                            </div>
                          </div>
                          <div className="col-md-6 mt-4">
                          <button className='btn w-100 text-white' style={{ backgroundColor: '#4DB749' }} onClick={changepass}>Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="bg-white p-4 rounded-3">
                    <h5 style={{color:'#4DB749'}}>Profile</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="text-dark m-0">{user?.fullName} Here</h4>
                            <p className="m-0 text-dark">{user?.email}</p>
                        </div>
                        <div>
                           {/* <img  src={require('../../assets/images/thumbnail.png')} width="110px" height="110px" style={{borderRadius:'50%'}} alt="" /> */}
                        </div>
                    </div>
                    <hr />

                    <div className="">
                        <div className="row">
                            <div className="col-md-6">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="fullName"
                                placeholder="Name"
                                defaultValue={user?.fullName}
                              />
                            
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="abc@xyz.com"
                                defaultValue={user?.email}
                                disabled
                              />
                            
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Mobile
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="phone"
                                placeholder="+92"
                                defaultValue={user?.phone}
                              />
                              
                            
                            </div>

                            
                            
                            </div>

                           
                            
                            <div className="col-md-6">
                            {/* <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                               Landing
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="+92"
                                defaultValue={user?.landi}
                              />
                            
                            </div> */}

<div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                               City
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="city"
                                placeholder="City"
                                defaultValue={user?.city}
                              />
                            
                            </div>
                            </div>
                            {/* <div className="col-md-6">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                               Whatsapp
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="+92"
                              />
                            
                            </div>
                            </div> */}
                            {/* <div className="col-md-12">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                               Address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter full address"
                              />
                            
                            </div>
                            </div> */}
                            <div className="col-md-6">
                            {/* <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                               Country
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="Country"
                              />
                            
                            </div> */}
                            </div>
                            {/* <div className="col-md-6">
                            <div class="mb-3">
                              <label
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                               City
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                placeholder="City"
                                defaultValue={user?.city}
                              />
                            
                            </div>
                            </div> */}
                            <div className="col-md-6">
                            
                            </div>
                            <div className="col-md-6">
                            <button className='btn w-100 btn-md text-white' style={{ backgroundColor: '#4DB749' }} onClick={updateprofile}>Save Changes</button>
                            </div>
                           
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserSettings;
