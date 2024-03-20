import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import api_url from "../../ApiUrl";
import { ToastContainer, toast } from 'react-toastify';
import {GrFormClose} from 'react-icons/gr';
import {BsCheckLg} from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

const Plan = () => {

  const [myPost, setMyPost] = useState([])


  useEffect(() => {
    axios.get(api_url + `package/get`).then(res => {
      console.log(res.data, '==========>img')
      setMyPost(res.data.data)
    })
  }, [])


  const buyPackage=()=>{
    axios.get(api_url + `package/buy/${localStorage.getItem('mainUserId')}`).then(res => {
      if(res.data.status==='ok'){
        toast.success('Buy Package Success')
      }
      else{
        toast.error(res.data.message)
      }
  }
    )
}

  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="about_us">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7">
              <h1>Choose Starter Package Plan</h1>
              <p>
                <span></span> is Pakistan's Largest Online Real Estate Portal
                Connecting Buyers with Sellers within $ outside the country{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#fff" }} className="py-5">
        <div className="container-fluid pe-md-5 pe-0 ">
          <div className="row align-items-center">
            <div className="col-md-3">
               <div className="" style={{paddingTop:'150px'}}>
               <h3 className="">Products</h3>
               <ul className="p-0">
                <li className="my-4">
                 <p>Normal Listing</p>
                </li>  
                <li className="my-4">
                 <p>Hot Listings</p>
                </li>  

                <li className="my-4">
                 <p>Super Hot Listings</p>
                </li>  

                <li className="my-4">
                 <p>Logo</p>
                </li>  

                <li className="my-4">
                 <p>Leaderboard impression</p>
                </li>  
                <li className="my-4">
                 <p>Splash Ads</p>
                </li>  
                <li className="my-4">
                 <p>Leaderboard Bottom Add</p>
                </li>  
                <li className="my-4">
                 <p>Refresh Credits</p>
                </li>  
                <li className="my-4">
                 <p>Whatsapp Blast</p>
                </li>  
                <li className="my-4" >
                 <p>Area Wall Paper</p>
                </li>  
                <li className="my-4">
                 <p>Side Banner</p>
                </li>  
                <li className="my-4">
                 <p>MOU Commission</p>
                </li>  
                <li className="my-4">
                 <p>Makkaan On Mic Exclusive Content</p>
                </li>  
                <li className="my-4">
                 <p>Makkaan k Mehman Sponsored Ad</p>
                </li>  
                <li className="my-4">
                 <p>Prices per month</p>
                </li>  
                <li className="my-4">
                 <p>Prices per year</p>
                </li>  
              </ul> 
               </div>
            </div>
            <div className="col-md-9">
            <div className="row">
            {/* {myPost.length > 0 ?
              myPost.map((i,index)=> {
                return ( */}
                  <>
                    <div className="col-md-4 my-2" >

                      <div className="p-3 rounded-4 text-center" style={{ backgroundColor:'#FDF8EF',border:'1px solid green' }}>
                        <div>
                        <h4>Business Lite</h4>
                        {/* <h3><span className="fs-4">PKR</span> {i?.price}</h3> */}
                        <p className="text-muted fw-bold">Per Month (Billed Annually)</p>
                        
                        </div>
                       
                         
                        <button className="btn btn-success fw-bold w-100 fs-5 p-2" style={{ background: '#4DB749' }} onClick={()=>buyPackage()}>Inquire now</button>

                        {/* {i?.addProperty}  */}
                        <p className="my-4"><span className="me-3 fw-bold"></span>100</p>
                        <p className="my-4"> 3 </p>
                        <p className="my-4">2 </p>
                        <p className="my-4">1</p>
                        <p className="my-4">10,000</p>
                        <p className="my-4">500</p>
                        <p className="my-4">10,000</p>
                        <p className="my-4">400</p>
                           <p className="my-4"><BsCheckLg/></p>
                           <p className="my-4">1</p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><GrFormClose/></p>
                        <p className="my-4"><GrFormClose/></p>
                        <p className="my-4">50,000</p>
                        <p className="my-4">60,000</p>


                      </div>
                    </div>
                    <div className="col-md-4 my-2" >

                      <div className="p-3 rounded-4 text-center" style={{ backgroundColor:'#F5FAF8',border:'1px solid green' }}>
                        <div>
                        <h4>Platinum</h4>
                        {/* <h3><span className="fs-4">PKR</span> {i?.price}</h3> */}
                        <p className="text-muted fw-bold">Per Month (Billed Annually)</p>
                        
                        </div>
                       
                         
                        <button className="btn btn-success fw-bold w-100 fs-5 p-2" style={{ background: '#4DB749' }} onClick={()=>buyPackage()}>Inquire now</button>

                        {/* {i?.addProperty}  */}
                        <p className="my-4"><span className="me-3 fw-bold"></span>250</p>
                        <p className="my-4">10</p>
                        <p className="my-4">10</p>
                        <p className="my-4">1</p>
                        <p className="my-4">20,000</p>
                        <p className="my-4">1,500</p>
                        <p className="my-4">20,000</p>
                        <p className="my-4">800</p>
                           <p className="my-4"><BsCheckLg/></p>
                           <p className="my-4">3</p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4">85,000</p>
                        <p className="my-4">1,020,000</p>


                      </div>
                    </div>
                    <div className="col-md-4 my-2" >

                      <div className="p-3 rounded-4 text-center" style={{ backgroundColor:'#FDF8EF',border:'1px solid green' }}>
                        <div>
                        <h4>Titanium</h4>
                        {/* <h3><span className="fs-4">PKR</span> {i?.price}</h3> */}
                        <p className="text-muted fw-bold">Per Month (Billed Annually)</p>
                        
                        </div>
                       
                         
                        <button className="btn btn-success fw-bold w-100 fs-5 p-2" style={{ background: '#4DB749' }} onClick={()=>buyPackage()}>Inquire now</button>

                        {/* {i?.addProperty}  */}
                        <p className="my-4"><span className="me-3 fw-bold"></span>600</p>
                        <p className="my-4"> 35 </p>
                        <p className="my-4">20 </p>
                        <p className="my-4">1</p>
                        <p className="my-4">40,000</p>
                        <p className="my-4">3,000</p>
                        <p className="my-4">50,000</p>
                        <p className="my-4">1300</p>
                           <p className="my-4"><BsCheckLg/></p>
                           <p className="my-4">10</p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4"><BsCheckLg/></p>
                        <p className="my-4">150,000</p>
                        <p className="my-4">1800,000</p>


                      </div>
                    </div>

                  </>
              {/* )

               })

               : <h3>No property found!!!</h3>} */}


          </div>

            </div>
          </div>
      




        </div>
      </section>
      <Footer />
    </>
  );
};

export default Plan;
