import React from "react";
import { Link } from "react-router-dom";
import "./capital.css";
import { BiPhoneCall } from "react-icons/bi";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import Footer from "../../components/footer/Footer";
import {BsFillRecordCircleFill} from 'react-icons/bs';
import AskedQuestion from "../../components/AskedQuestion/AskedQuestion";
const CapitalCity = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="capital_city">
        <div className="container-fluid pt-5">
          <div className="row pt-5" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h1>Capital Smart City Islamabad</h1>
            </div>
            <div className="col-md-6 text-end">
              <div className="">
                <h6 className="text-white">
                  {" "}
                  <Link state={{ color: "#4DB749" }}>Home </Link> {`>`} Capital
                  Smart City Islamabad
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Capital Smart City:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Project.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
              Pakistan’s first and most popular housing society is the “smart
              city,” which lies on 4th all around Asia. A smart capital city is
              an excellent, meticulous, state-of-the-art project in Pakistan.
              This iconic project appeals to investors from all over the world.
              This one has been the most appealing project ever in the past
              years. Its premium location is near Islamabad International
              Airport, on M-2 Lahore -Islamabad Motorway.
            </p>
            <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall /> Read More About Taj Residencia Islamabad
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Owner & Developers of Capital Smart City:</h2>
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
                <p>
                  A smart capital city is being developed by the collaboration
                  of Habib Rafiq (Pvt) and the Future Holding Development. Habib
                  Rafiq (Pvt) is famous for his excellent quality work in the
                  industry of real estate in Pakistan. Their well-known
                  successful projects are DHA in Islamabad and the Bahria
                  developers. They accomplished and succeeded by making their
                  housing societies in Multan, Sargodha, and Sahiwal; the
                  successful projects that led them towards the smart capital
                  city are Royal Orchard Multan, Royal Orchard Sahiwal, and
                  Royal Orchard Sargodha. They are still on their upcoming new
                  projects in Pakistan.
                </p>

               
              </div>
            </div>
          </div>
          <h3 className="pt-4">Habib Rafiq Pvt. Ltd:</h3>
                <p>For the past five decades, Pakistan’s well-known development and construction group has been working with the most prestigious engineering projects and constructions in the real estate industry. Its achievements have been shown the consequences of the hardworking, passionate about their quality work on customers’ demands wherever they work, either in Pakistan or in foreign countries. They are certified with their best quality management work and earned ISO 9000.</p>
                <p>Their passion, honesty, hardworking, and trust consider equivalent to their name, Habib Rafiq; the development group of any real estate industry seems to be lucky and gets extremely privileged once they work with HRL.</p>
                <p> The HRL group has been responsible for their well-developed housing projects such as DHA in Islamabad and Bahria Town, with the complete infrastructure and design that any society needs, the roads, mechanical work, electrical work, gas pipelines, water storage, and all services done with keen responsibilities.</p>

                <h3>The Expertise of HRL Company:</h3>
               <div className="row">
                <div className="col-md-5">
                <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Buildings
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
           
Water resources management</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Electricity and power backup</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
Housing infrastructure</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
            Oil and gas resources</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
            Airports & Aviation</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
       
Roads</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
       

            Petrochemicals and chemicals</li>
           
          </ul>
                </div>
                <div className="col-md-7">
                <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Acrylic Fiber Plant
                  </span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
           
            Urea Fertilizer Plant</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Convention center</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
Housing infrastructure</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            Tannery pollution control</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
            Airports & Aviation</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

   
       
            Water Reservoir Dams</li>
        
           
          </ul>



       
                </div>
                <h3>Future Development Holdings (Pvt.) Limited</h3>
          <p>DHL is considered Pakistan’s top real estate management and developer company that contributes to dealing with futuristic and luxurious upscale smart cities in profitable investment to their clients.</p>
          <p>DHL group registered in 1948 under the company’s ordinance. Many International and multiple national companies involved their business entities in coming together to make a firm organization. This organization combines two leading companies with their expertise in technical and leadership skills. These are Engineering Dimension (Pvt) Limited (EDL) and the China Liaoning International Economic and Technical cooperation Group Corporation Ltd (CLIC).</p>
          <p>The organization aims to provide a meticulous modern living standard to its residents and industrial perspective. The accessible routes link with the CPEC route and Lahore Islamabad Motorway (M2), and it’s easier to get direct access through designated interchanges.</p>
               </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h1>Master Plan of Capital Smart City:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Master-Plan.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
              Every housing society has its unique master plan in which they
              construct and design their building, entrance, with full and
              fledge amenities and facilities, and also with the advanced
              technological system to make the society distinguishable from
              other hosing society, but CSC master plan was given to the
              Singapore consultancy named as Surbana Jurong, which was designed
              by the Norman Foster.
            </p>
            <div className="">
              <h4>Surbana Jurong (SJ)</h4>
              <p>
                Surbana Jurong (SJ) is the one which has concerned with
                developing the master plan of the capital smart city; it’s well
                known for its infrastructure development and engineering firm.
                It is one of Asia -based urban largest firms, comprising
                globally 16,000 employee teams, indulged with more than 120
                offices, including the designer, planners, architects, and other
                specialists.
              </p>
              <p>
                The (SJ) company aims to develop the cities into beautiful homes
                with employment opportunities, where they can flourish their
                business. This project methodology was planned cohesively and
                included convivence facilities like all-in-one residential,
                commercial areas, and entertainment in a smart city.
              </p>
              <p>
                The primary purpose is to enhance the natural features in a
                smart city; they plan to include the new infrastructure like
                public transport, high-rise cascade buildings, and a central
                Boulevard with world-class facilities at their doorstep. The
                handcrafted sculpture also enhances the scenic view for
                inhabitants and visitors too.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Capital Smart City NOC:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-NOC-Approved.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
              Legal approval of any residential society is a core
              responsibility; the capital smart city Islamabad NOC was legally
              approved by the (RDA) Rawalpindi Development Authority. It is the
              registered housing society. Currently, their first NOC is granted
              because of additional land acquired, and the NOC will be revised
              soon for the extension of the blocks. Hopefully, it will be
              quickly presented.
            </p>
            <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Blue World City Islamabad
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Capital Smart City Location:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Location.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
              The location of the smart capital city is in the Rawalpindi Region
              of Islamabad, which is close to the Islamabad International
              Airport. The society is located at the M-2 Lahore Islamabad
              Motorway at 9.2 km. Thalian interchange near the toll plaza,
              connected with the eastern CPEC route. Just a few minutes far away
              from New Islamabad Airport. The different societies are also
              placed near CSI, the Al Miraj Housing society, Lahore smart city,
              Blue World City, and Eighteen Islamabad.
            </p>
            <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Pearl Square Residency
              </button>
            </div>
            <div>
              <h2>Total Area of CSC:</h2>
              <p>
                The total area of the smart capital city is 55,000 Kanal, which
                seems to be ten times bigger than the respective neighboring
                society of University Town. It’s just 5-6 minutes away from the
                new Islamabad International Airport. Several projects and land
                area blocks will be included in CSC in the future. The
                requestion had submitted to authorities for land extension in
                August 2019. The fantastic thing to hear is that in June 2020,
                after the extension approval, the total land area becomes equal
                to 80,000 Kanal, and it becomes one of the largest housing
                societies in respective close regions.
              </p>
              <h2>Access points:</h2>
              <span>The following accessible areas near CSC are:</span>
          
              <ul className="p-0">
            <li className="d-flex align-items-center" style={{gap:6}}>
                <BsFillRecordCircleFill  />  
<span>  Lahore – Islamabad Motorway M-2 is almost 5 minutes' drive
                  away.</span></li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  />  
            Ranial Gali Jagir Road nearly 1 minute drive away</li>
            <li className="d-flex align-items-center" style={{gap:6}}>
            <BsFillRecordCircleFill  /> 
            Airport Avenue almost 20 minute drive away.</li>
            <li className="d-flex align-items-center" style={{gap:6}}>

            <BsFillRecordCircleFill  /> 

            Thalian road almost 15 minutes drive away</li>
           
          </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h1>Capital Smarts City Blocks:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Islamabad-Blocks.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>The Capital smart city is divided into different blocks:</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h1>Overseas Block:</h1>
          <div className="pt-3">
            <img
              src={require("../../assets/imagenew/Capital-Smart-City-Overseas-Prime-Block.jpg")}
              width="100%"
            />
          </div>

          <div className="des pt-4">
            <p>
              The capital smart city overseas prime block is the most
              prestigious. It becomes the heart of the smart city, its
              meticulous features, and smart ideas, especially for overseas
              residents. For them, a Pakistani who lives abroad is a valuable
              and secure golden opportunity to grab a smart city plot in the
              overseas block. The capital smart city launched as of this
              overseas block in society at the London Dorchester on 20 February
              2018. Its prime location and high-tech facilities have become
              desirable places for Pakistanis. They required just the overseas
              national identity card copy along with respective credentials.
            </p>
            <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall /> Read More About Rudn Enclave
              </button>
            </div>

            <h2>The prime location of the overseas block:</h2>
            <p>
              Capital Smart City, the overseas block, is located on the primary
              Boulevard right side of the society, next to M-2 Motorway. This
              block will be more convenient directly from the motorway
              interchange.
            </p>
            <h2>Capital smart city Payment plan of Overseas Block:</h2>
            <p>
              Overseas blocks are divided into different sizes of blocks 5
              Marla, 7 Marla, 10 Marla, 1 Kanal, and 2 Kanal.{" "}
            </p>
            <h2>Required credentials for booking of overseas plots:</h2>
            <p>
              Documentation is the essential ethic of any workplace. The
              required document for booking the Capital smart city plot for sale
              at an overseas block.
            </p>
            <ul>
              <li>Passport size two pictures</li>
              <li>NICOP 2 photocopies</li>
              <li>Nominee card or ID card of next to kin two photocopies</li>
              <li>Respective plot booking amount</li>
            </ul>
            <h2>Ownership of overseas block:</h2>
            <p>
              In the overseas block, the possession of the plots will be granted
              the first quarter of 2020. The investor gets to be ready with
              payment plans and just pay the installments of booked plots, avoid
              the delay and get the go-ahead to grab your plot.{" "}
            </p>

            <div className="text-center">
              <button className="btn btn-dark rounded-5">
                {" "}
                <BiPhoneCall />
                Read More About Blue World Trade Center
              </button>
            </div>
          </div>
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

export default CapitalCity;
