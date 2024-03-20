import React from "react";
import { Link } from "react-router-dom";
import "./tables.css";
import { BiPhoneCall } from "react-icons/bi";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import Footer from "../../components/footer/Footer";
import {BsFillRecordCircleFill} from 'react-icons/bs';
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
const TableDetails = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="capital_city">
        <div className="container-fluid pt-5">
          <div className="row pt-5" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h1>Rudn Enclave</h1>
            </div>
            <div className="col-md-6 text-end">
              <div className="">
                <h6 className="text-white">
                  {" "}
                  <Link state={{ color: "#4DB749" }}>Home </Link> {`>`} Rudn Enclave
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Rudn Enclave:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Rudn-Enclave-Rawalpindi-Introduction.jpg")}
              width="100%"
            />
          </div>

        </div>
      </section>
      <section>
        <div className="container">
          
          <div className="row">
            <div className="col-md-5">
              <div className="bg-dark p-5 rounded-3">
                <h3 className="text-white">REQUEST A CALL BACK</h3>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div class="mb-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label text-white"
                        >
                          Name
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div class="mb-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          placeholder="  Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div class="mb-3">
                        <label
                          for="exampleInputEmail1"
                          class="form-label text-white"
                        >
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
                    <div className="col-md-12">
                      <button class="btn btn-primary w-100 py-1">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7">
              <div>
              <h2>Rudn Enclave Overview:</h2>
                <p>
                Rudn Enclave Rawalpindi is a modern housing scheme that features high-end amenities and facilities. With its advanced infrastructure and splendid features, the mega project is expected to become a benchmark in the real estate market. It offers all the necessary amenities and is built with modernist architecture for maximum comfort and convenience. Along with international standard facilities and all of the modern conveniences, Rudn enclave is dedicated to meeting the needs of its residents.
                </p>
                <p className="pt-3">
                <bold>Rudn Enclave Rawalpindi</bold> offers a variety of investment and payment options that are easy, affordable, and fast. Both local and foreign investors will find Rudn an ideal investment destination Don’t know how to invest and pay? No problem! Makkaan is here to help you.
                </p>
                     
               
              </div>
            </div>
          </div>
          <div className="text-center pt-3">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Blue World Trade Center
              </button>
            </div>
          

               
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h1>Rudn Enclave Location:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Rudn-Enclave-Rawalpindi-Location.jpg")}
              width="100%"
            />
          </div>
          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Rudn Enclave housing society is located near Adyala road, adjacent to Bahria Town Phase 8, Rawalpindi ring road, and the M2 motorway.
                  away.</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
Thalian interchange is Rudn Enclave's closest landmark.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
The society is only 36 minutes away from Islamabad International Airport.</li>
           
          </ul>


          <h5>Rudn Enclave is located at a distance of:</h5>
          <div
  className="eael-data-table-wrap bg-dark"
  data-table_id="df1b731 "
  data-custom_responsive="false"
>
  <table
    className="table table-dark"
    id="eael-data-table-df1b731"
  >
    <thead>
      <tr className="table-header">
        <th className="" id="" colSpan="">
          <span className="data-table-header-text">
            {" "}
            19 Minutes from Saddar Rawalpindi
          </span>
        </th>
        <th className="" id="" colSpan="">
          <span className="data-table-header-text"> 51 minutes from Rawat</span>
        </th>
        <th className="" id="" colSpan="">
          <span className="data-table-header-text">
            39 minutes from Bahria Phase 7
          </span>
        </th>
        <th className="" id="" colSpan="">
          <span className="data-table-header-text">
            55 minutes from Chakri Interchange
          </span>
        </th>
        <th className="" id="" colSpan="">
          <span className="data-table-header-text">
            36 minutes from Islamabad International airport
          </span>
        </th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

        </div>
      </section>
      <section>
        <div className="container py-5">
          <h3>Rudn Enclave Nearby Locations:</h3>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Rudn-Enclave-Rawalpindi-Nearby-Places.jpg")}
              width="100%"
            />
          </div>
          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>Islamabad International Airport</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            Bahria Phase 8</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Thalian interchange</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            Saddar Rawalpindi</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            DHA phase 2</li>
           
          </ul>
          <div className="text-center pt-3">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Blue World City
              </button>
            </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Rudn Enclave Location Map:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Location.jpg")}
              width="100%"
            />
          </div>

        
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h1>Rudn Enclave NOC Approval:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Rudn-Enclave-Rawalpindi-NOC.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>We are excited to announce the most thrilling news about the Rudn Enclave NOC. Have you heard something awesome happen?</p>
            <p>Yes! Let’s Wrap the News into a Gift. The Rudn Enclave housing society is a modern venture with high-end facilities and amenities. This mega project now authentically sets its benchmark in the real estate industry. Recently, Rudn Enclave NOC requires an endorsement, yet, still, the society reached heights of fame, and the development work has been accomplished in many positions. Finally, the grand announcement to hear that RDA has approved the NOC.</p>
            <p>Now Rudn Enclave is no longer illegal; it is not a lie as the RDA under process societies. Rudn Enclave NOC is authentically approved by RDA, especially for investors. It’s time to take the triumph and celebrate the profitable victory with the Rudn venture.</p>
          </div>

          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/noc-pics.jpg")}
              width="100%"
            />
          </div>
          
<h4>Rudn Enclave Plot Categories</h4>
          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Residential
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
            Commercial</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
Farmhouses</li>
           
          </ul>

          <div className="text-center pt-3">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Blue World City
              </button>
            </div>
<h4>Rudn Enclave Blocks</h4>
          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  General block   
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
            Executive block</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
            Farmhouses</li>
           
          </ul>



        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Rudn Enclave General Block:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Rudn-Enclave-Rawalpindi-General-Block.jpg")}
              width="100%"
            />
          </div>

          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  General block  
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
            Executive block</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
            Farmhouses</li>
           
          </ul>


          <h5>5 Marla plots</h5>
          <p className="pt-4">The general block offers 5 Marla affordable and high-quality plots. These plots are available under a 4-year payment plan.</p>
          <h5>7 Marla Plots</h5>
          <p className="pt-4">The 7 Marla plots in the General block are suitable for people seeking a comfortable lifestyle. They are situated nearby parks, bazaars, schools, and more.</p>
          <h5>10 Marla Plots</h5>
          <p className="pt-4">The 10 Marla residential plots are ideal for those who seek a luxurious lifestyle and are looking for more space and privacy. You can purchase these plots on a four-year / 48-month instalment plan.</p>

          <h5>1 Kanal Plots</h5>
          <p className="pt-4">The commercial plots at Rudn Enclave Rawalpindi will mainly be used for the following purposes:</p>


          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Office spaces that will be fully secured and monitored
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
            Markets that will feature fashion and food brands, supermarkets, roadside cafes, and more.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
            5-star luxury hotel</li>

            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
           Malls with top-tier fashion brands, food courts, Cineplex, hypermarkets, gaming zones, restaurants, and cafes.</li>
           
          </ul>

<h2>Rudn Enclave Residential Plots Price Plan</h2>
          <div className="responsive-table" >
          <table class="table  table-bordered  " >
  <thead  class="table-light"> 
    <tr >
      <th scope="col">Size</th>
      <th scope="col">Total price</th>
      <th scope="col">15% booking</th>
      <th scope="col">5% confirmation</th>
      <th scope="col">48 monthly installments</th>
      <th scope="col">10% possession</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
   
    
  </tbody>
</table>
          </div>

          <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall />
                
SCHEDULE A CALL
              </button>
            </div>



            <h2>Rudn Enclave Commercial Plots Price Plan</h2>
          <div className="responsive-table" >
          <table class="table  table-bordered  " >
  <thead  class="table-light"> 
    <tr >
      <th scope="col">Size</th>
      <th scope="col">Total price</th>
      <th scope="col">15% booking</th>
      <th scope="col">5% confirmation</th>
      <th scope="col">48 monthly installments</th>
      <th scope="col">10% possession</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
    <tr>
      <th scope="row">5 Marla</th>
      <th scope="">1200,000</th>
      <td>180,000</td>
      <td>60,000</td>
      <td>17,500</td>
      <td>12,500</td>
    </tr>
   
    
  </tbody>
</table>
          </div>



          <h4>5 Marla Plot</h4>
          <ul className="p-0">

            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Residential plots of 5 Marla are available for Rupees 12 Lacs with a 15% booking fee of 1 lac 80 thousand rupees. 
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
            There is a 5% confirmation payment of 60,000 rupees.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
            48 months installments period, 17500 rupees each month.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
        
The possession cost is 1 lac 20 thousand rupees.</li>
           
          </ul>
          <h4>7 Marla Plot</h4>
          <ul className="p-0">

            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  7-Marla plots are available for 15 Lac 20 thousand rupees with a 15% booking fee of 2, 43,400 rupees.
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
            Payment can be made over 48 months in installments of 22 thousand and 750 rupees each month.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            The confirmation fee is 78,000 rupees.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
        
            The possession cost is 10% of the total price, 1 lac 56 thousand rupees.</li>
           
          </ul>
          <h4>10 Marla Plot</h4>
          <ul className="p-0">

            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span> 
10 Marla plots are available for Rupees 21 Lac 65 thousand with a 15% booking cost of 3 lac 24 thousand rupees.
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
           
5% confirmation payment is 1 lac 8,250 rupees.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          
48 months installments period, 31 thousand and 573 rupees each month.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
        
           
Possession cost is 3 lac 52,800 Rupees.</li>
           
          </ul>
          <h4>10 Marla Plot</h4>
          <ul className="p-0">

            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span> 
10 Marla plots are available for Rupees 21 Lac 65 thousand with a 15% booking cost of 3 lac 24 thousand rupees.
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
           
5% confirmation payment is 1 lac 8,250 rupees.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          
48 months installments period, 31 thousand and 573 rupees each month.</li>
           
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

           
        
           
Possession cost is 3 lac 52,800 Rupees.</li>
           
          </ul>
          

        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Executive Block:</h1>
          <p>A smart capital city is divided into different blocks and sectors; the executive block provides the opportunity for conversion of the block from the general block, but time was limited only to 24 May 2019, which was the last date for application submission, after which clients have to pay 30% additional amount should be paid for the conversion of the plot from general block to executive, or even wants to book a new plot. The plot price in the model city executive block is 30% higher than the General block. After the deadline, those who want to convert their plots have to pay a fixed fee and additional costs.</p>
          <h2>General Block:</h2>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-General-Block.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            The capital smart city initially started its project from a general block; it became vast in different blocks. The society lies on other residential and commercial plots for sale in a capital smart city of various sizes, starting from 5 Marla to 1&2 Kanal plots.
            </p>
            

            <h2>Premium location of General Block:</h2>
            <p>
            After the prime location of the overseas block, the next one is the general block; if you have any concerns about the site, you can check the respective master plan to get the exact idea of where the general block is located. 
            </p>
            
            
            <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Park View City
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Smart Villas:</h1>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Smart-Villas-Capital-Smart-City-Islamabad.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            The Capital smart city also launched the collaboration of Trivelle’s International to develop leading property after the investment in the UK, established the Smart Villas in Pakistan first ever in their project, and named it “Trivelle’s Lake Boulevard.” The best smart feature is up-scale innovative features for their residents. 
            </p>
            

            
            
            <div className="text-center">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                <span className="ps-2">Read More About Abdullah City Islamabad</span>
              </button>
            </div>
            
            <h2>The prime location of Smart Villas:</h2>
            <p>
            The location of smart villas is placed between the Crystal Lake and 18-hole Golf Course strategically in Trivelle’s Lake Boulevard in the overseas block of smart city Islamabad. These smart villas are placed in a splendid scenic view, with elegant, smart features
            </p>

            <h2>Capital Smart City Payment Plans:</h2>
            <p>The smart city provides detailed information about each block’s capital city, Islamabad payment plans, and smart villas.</p>
            <h4>Overseas block of Capital Smart City Payment Plan</h4>
            <p>This grand society led to their aim as launched the smart city, having different sizes of plots, either residential, commercial, or villas. The overseas block is plots starting from 7 Marla to 2 Kanal with affordable payment plans of 3.5 years quarterly. </p>
            <p>This grand society led to their aim as launched the smart city, having different sizes of plots, either residential, commThe capital smart city plots for sale ercial, or villas. The overseas block is plots starting from 7 Marla to 2 Kanal with affordable payment plans of 3.5 years quarterly.</p>
            <p>The capital smart city commercial plots offer the best opportunity and range starting from 4 Marla to 8 Marla with affordable, easy three-year payment plans.</p>
            <h4>Residential plot of 3.5 Marla at Harmony Park:</h4>
            <p>As per the clients’ demand, the most reasonable and affordable payment plan, capital smart city, offers a 3.5 Marla plot at harmony park. It’s a futuristic opportunity for investors to invest in this housing project. The interested buyer will fulfill their wish and don’t lose the chance; this 3.5 Marla plot is located at the harmony park block, next to the model city executive block in the smart city Islamabad. The development standards and superb facilities are the same compared to the rest of the society. But this plot price is comparatively low with easy installments.</p>
          </div>

          <div className="responsive-table" >
          <table class="table  table-bordered  " >
  <thead  class="table-light"> 
    <tr >
      <th scope="col">Sr.no</th>
      <th scope="col">Plot type</th>
      <th scope="col">plot size</th>
      <th scope="col">price PKR</th>
      <th scope="col">No. of Inst</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope="">Residential</th>
      <td>05 Marla</td>
      <td>24,1000</td>
      <td>14</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <th scope="">Residential</th>
      <td>05 Marla</td>
      <td>24,1000</td>
      <td>14</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <th scope="">Residential</th>
      <td>05 Marla</td>
      <td>24,1000</td>
      <td>14</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <th scope="">Residential</th>
      <td>05 Marla</td>
      <td>24,1000</td>
      <td>14</td>
    </tr>
    
  </tbody>
</table>
          </div>

          <div className="text-center">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                <span className="ps-2">Schedule a call</span>
              </button>
            </div>

          <div className="responsive-table py-3" >
          <table class="table  table-bordered  " >
  <thead  class="table-light"> 
    <tr >
      <th scope="col">Sr.no</th>
      <th scope="col">Installments details</th>
      <th scope="col">5 Marla</th>
      <th scope="col">7 Marla</th>
      <th scope="col">10 Marla</th>
      <th scope="col">	12 Marla</th>
      <th scope="col">		1 Kanal</th>
      <th scope="col">	2 Kanal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <th scope="">	Booking</th>
      <th scope="">	23,0000</th>
      <td>24,000</td>
      <td>315,000</td>
      <td>30000</td>
      <td>56,000</td>
      <td>49,0000</td>
      <td>22,000</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <th scope="">	Booking</th>
      <th scope="">	23,0000</th>
      <td>24,000</td>
      <td>315,000</td>
      <td>30000</td>
      <td>56,000</td>
      <td>49,0000</td>
      <td>22,000</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <th scope="">	Booking</th>
      <th scope="">	23,0000</th>
      <td>24,000</td>
      <td>315,000</td>
      <td>30000</td>
      <td>56,000</td>
      <td>49,0000</td>
      <td>22,000</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <th scope="">	Booking</th>
      <th scope="">	23,0000</th>
      <td>24,000</td>
      <td>315,000</td>
      <td>30000</td>
      <td>56,000</td>
      <td>49,0000</td>
      <td>22,000</td>
    </tr>
    
    
    
  </tbody>
</table>
          </div>

          <div className="text-center">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                <span className="ps-2">Schedule a call</span>
              </button>
            </div>
            <h2>Important notice:</h2>
            <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>If you pay the half amount, then a 5% discount will be offered.</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            If you pay the total amount, then a 10% discount will be offered</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Prices of plots are exclusive of development charges</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            If you book the Main Boulevard plot, then a 15% extra amount will be applicable</li>
            
          </ul>

          <div className="text-center">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                <span className="ps-2">
Read More About New City Paradise</span>
              </button>
            </div>
        </div>

            
        
      </section>
      <section>
        <div className="container py-5">
          <h1>Capital Smart City Villa Apartments:</h1>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Villas-And-Apartments-Capital-Smart-City-Islamabad.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            From the first time, after the plots, smart villas, and farmhouses, Capital smart city Islamabad offered the meticulous Villas Apartments with a futuristic and innovative vision; these are assembled in Harmony Park block. These luxurious villa apartments allow you to experience this innovative and revolutionary project—ultra-advanced modern apartments with smart resources at the most reasonable prices.
            </p>
            

            <div className="text-center">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                <span className="ps-2">
                Read More About New Metro City Gujar Khan</span>
              </button>
            </div>

          <h3>The prime location of villa Apartments:</h3>
            <p>
            These smart city villa apartments are located at The Harmony Park, an affordable and splendid living block which having the villas apartments and a 3.5 Marla residential plot as well; this one block is hopefully placed beside the executive block with high tech amenities and scenic views, the best option for the investor or home buyers. 
            </p>



          <h3>Kinds of Villas Apartments:</h3>
            <p>
            Smart city Islamabad introduces these villa apartments:
            </p>
           
            <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>The villa apartments, located at harmony park, are offered in an easy, affordable payment plan of 4year.</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            Booking is begun with a 10% down payment.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Confirmation charges are 10% followed after 30 days.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            The rest amount will be payable according to your feasibility.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

      
On 50% payment, a 2.5% discount will be offered.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            On full payment, a 5% discount will be offered.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          
Prices become inclusive of the development charges.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          

An extra amount should be paid on category plots.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          

            For example, a 7.5% extra amount will be taken for the corner plot, 5% additional amount will be taken for the park facing, and the central Boulevard.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          

      
These fantastic villas and residential plots are available at the most affordable prices for a limited time; it's a golden opportunity to grab your plot and lavish villas.</li>
            
          </ul>
          <h3>Required credentials for booking a plot:</h3>
            <p>
            The following documentation will be required for booking a plot:
            </p>
           
            <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>Copy of CNIC</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
         
Next to kin CNIC copy</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
           
Passport size photograph</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            Booking amount</li>
            
          </ul>


                







          <div className="text-center">
              <button className="btn btn-dark px-4 rounded-5">
                {" "}
                <BiPhoneCall />
                <span className="ps-2">
               
Read More About New Citi Housing Kharian</span>
              </button>
            </div>

          <h3>Developmental process in Capital Smart City:</h3>
            <p>
            The developmental process in a smart capital city seems to be going speedily. Society has proven to provide high-end features and futuristic technology. The establishment of the internationally based 18-hole golf course and the construction of the new campus has also been signed by National Defense University with MOU. The meticulous and ultra-advanced resort and the hotel will construct by the Movenpick with splendid hospitality in this housing society. Over the last couple of months, their development process has become fast and effective—the plotting of land and leveling completion with the help of ultra-modern machinery. For the water needs, the society operational working on the four-tube well; for the society’s initial work, more than 200 machines were worked day and night. The capital smart city makes sure that there should not be any compromise on the quality of work. Some of the notable developments are:
            </p>

        
           
            <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>Main Boulevard</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            
Establishment on overseas blocks 1&2</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Overseas prime and capital hills</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

          
Building structures</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            Villa's constructions</li>
        
            
          </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2>Amusement Park in Capital Smart City:</h2>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Amusement-Park.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            For the construction of the amusement parks, an MOU was signed by both parties Freij Entertainment & Capital smart city, on 23rd, 2019. The Freij company is famous because of their world’s largest, most influential, and most qualitative work, in which they organize games, funfairs, and carnival rides all over the world. Mr. Freij El Zein retained this contract, the CEO of Freij entertainment international, to build the amusement park for the first time in Pakistan at Capital Smart city (half).
            </p>
            <h2>Meticulous Amenities and Facilities of Capital Smart City:</h2>
            <p>The capital smart city provides an exclusive and futuristic smart way of living; their design, development, architecture, and management aim to ensure an advanced and luxurious lifestyle in an eco-friendly environment. The highly experienced and qualified developers hired for construction will shine like a top Pakistan real estate industry.</p>

            
           
           
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Grand Mosque:</h1>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Mosque-Capital-Smart-City.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            As the other facilities are necessary for making the resident’s life easier and more comfortable, where the Jamia Mosque is also essential as we are living in an Islamic country, so most important is to create a strong connection with Allah Almighty, who blessed us with good health and wealth, so first offer the prayer at the most peaceful environment, and the smart capital city is developing the mosque in each block. 
            </p>
           

            
           
           
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Recreational parks:</h1>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Park.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            Health is an essential factor of any individual, so the smart city launched outdoor and healthy indoor activities, the qualified staff available 24/7 in any case of emergency. Health always comes first; make your life healthy and active with the smart features of Capital smart city.
            </p>
            <h2>    Health Care Centers:</h2>
            <p></p>
           

            
           
           
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2>Basic Utilities 24/7:</h2>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Basic-Utilities.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            Health is an essential factor of any individual, so the smart city launched outdoor and healthy indoor activities, the qualified staff available 24/7 in any case of emergency. Health always comes first; make your life healthy and active with the smart features of Capital smart city.
            </p>
          
            <p></p>
           

            
           
           
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2>Safe Society:</h2>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Security.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
            The safety of every society always comes first, they installed CCTV cameras in the building and houses to provide quick and comprehensive safety. At each entry and exit point, facial recognition is monitored to ensure safe entry and exit. The trained experienced staff is assisted by the security guard.
            </p>
          
            <p></p>
           

            
           
           
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h2>Benefits of Investing in Capital Smart City:</h2>
         
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Benefits-Of-Investing-In-Capital-Smart-City.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            
          <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>Upgraded and ultra-modern living standards.</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            Easy and affordable payment plan.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            First ever-reliable and trustworthy smart city in Pakistan</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            Safe investment plans</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Provision of smart apps and diversity of careers and jobs</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Eco-friendly transport system</li>
            <li className="d-flex align-items-center" style={{gap:6}}   >
            <BsFillRecordCircleFill  />  
            Opportunity to get a high return investment</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
Availability of effective resources and load-shedding free zone</li>
          </ul>
           



                
          <div className="text-center">
              <button className="btn btn-dark px-4 py-1 rounded-5">
                {" "}
                 <BiPhoneCall />
                                   Read More About Faisal Town Phase 2
              </button>
            </div>


<h2>Conclusion:</h2>
<p>The important factor is to maintain the reputation of this housing project is their developer and owner. The well-known name is Habib Rafiq the most reliable name in real estate. Most of the plots of this society have already been sold out at profitable rates. The master plan and development both look promising and will be planned to make the capital smart city an impressive project. This smart city will be different with all smart packages for all the residents. Their upgraded facilities and features make this society a significant structure and elegant place to live here. It will become the most successful smart housing society ever in this region. Grab your plot soon until its too late!</p>
            
           
           
          </div>
        </div>
      </section>
      <AskedQuestion/>
      <Footer />
    </>
  );
};

export default TableDetails;
