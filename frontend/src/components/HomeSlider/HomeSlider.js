import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const navigate = useNavigate();

  const [pricePop, setPricePop] = useState(false);
  const [bedPop, setBedPop] = useState(false);

  const [showdrop, setShowDrop] = useState();

  return (
    <>
      <Swiper
        spaceBetween={60}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <div
            className="home_slider pt-5"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 139, 136,0.3),rgba(139, 139, 136,0.3)),url(${require("../../img/headerbg.png")})`,
              width: "100%",
              height: "700px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}
          >
            <div
              id="home_slider_content"
              className="container  justify-content-center align-items-center d-flex"
              style={{ height: "100vh", width: "100%" }}
            >
              <div className="row w-100 pt-0">
                <div className="col-md-12 pt-0 pt-sm-5">
                  <div className="text-center text-white pt-0 pt-sm-5">
                    <div
                      className="home_text"
                
                    >
                    
                    </div>
                    <div className="row mx-auto" >
                      <div
                        className="py-4 col-md-9 mx-auto  rounded-3 mt-3 "
                        style={{backgroundColor:`rgba(0, 0, 0, 0.8)`}}
                      >
                        <div className="row">
                          <div className="col-md-12">
                          <h1 style={{ fontSize: "36px", fontWeight: "800",letterSpacing:"0em" }}
>
                            “Your Makkaan Awaits You”
                          </h1>
                          <ul class="nav justify-content-center">
                          <li class="nav-item">
                              <a class="nav-link" style={{color:"#4DB749"}} href="#">BUY</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link text-white"  href="#">RENT</a>
                            </li>
                            
                           
                          </ul>
                          </div>
                        </div>
                        <br/>
                        <div className="row g-2 px-2 px-md-2 mx-auto">
                          <div className="col-md-3">
                            <div>
                              <select
                                class="form-select form-select-md mb-3 py-2"
                                aria-label=".form-select-md example"
                                name="city"
                                id="city"
                                style={{height:"50px",borderRadius:"4px"}}
                                required
                              >
                                <option value="" disabled>
                                  Select The City
                                </option>
                                <option value="Islamabad" selected>
                                  Islamabad
                                </option>
                                <option value="" disabled>
                                  Punjab Cities
                                </option>
                                <option value="Ahmed Nager Chatha">
                                  Ahmed Nager Chatha
                                </option>
                                <option value="Ahmadpur East">
                                  Ahmadpur East
                                </option>
                                <option value="Ali Khan Abad">
                                  Ali Khan Abad
                                </option>
                                <option value="Alipur">Alipur</option>
                                <option value="Arifwala">Arifwala</option>
                                <option value="Attock">Attock</option>
                                <option value="Bhera">Bhera</option>
                                <option value="Bhalwal">Bhalwal</option>
                                <option value="Bahawalnagar">
                                  Bahawalnagar
                                </option>
                                <option value="Bahawalpur">Bahawalpur</option>
                                <option value="Bhakkar">Bhakkar</option>
                                <option value="Burewala">Burewala</option>
                                <option value="Chillianwala">
                                  Chillianwala
                                </option>
                                <option value="Chakwal">Chakwal</option>
                                <option value="Chichawatni">Chichawatni</option>
                                <option value="Chiniot">Chiniot</option>
                                <option value="Chishtian">Chishtian</option>
                                <option value="Daska">Daska</option>
                                <option value="Darya Khan">Darya Khan</option>
                                <option value="Dera Ghazi Khan">
                                  Dera Ghazi Khan
                                </option>
                                <option value="Dhaular">Dhaular</option>
                                <option value="Dina">Dina</option>
                                <option value="Dinga">Dinga</option>
                                <option value="Dipalpur">Dipalpur</option>
                                <option value="Faisalabad">Faisalabad</option>
                                <option value="Ferozewala">Ferozewala</option>
                                <option value="Fateh Jhang">Fateh Jang</option>
                                <option value="Ghakhar Mandi">
                                  Ghakhar Mandi
                                </option>
                                <option value="Gojra">Gojra</option>
                                <option value="Gujranwala">Gujranwala</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Gujar Khan">Gujar Khan</option>
                                <option value="Hafizabad">Hafizabad</option>
                                <option value="Haroonabad">Haroonabad</option>
                                <option value="Hasilpur">Hasilpur</option>
                                <option value="Haveli Lakha">
                                  Haveli Lakha
                                </option>
                                <option value="Jatoi">Jatoi</option>
                                <option value="Jalalpur">Jalalpur</option>
                                <option value="Jattan">Jattan</option>
                                <option value="Jampur">Jampur</option>
                                <option value="Jaranwala">Jaranwala</option>
                                <option value="Jhang">Jhang</option>
                                <option value="Jhelum">Jhelum</option>
                                <option value="Kalabagh">Kalabagh</option>
                                <option value="Karor Lal Esan">
                                  Karor Lal Esan
                                </option>
                                <option value="Kasur">Kasur</option>
                                <option value="Kamalia">Kamalia</option>
                                <option value="Kamoke">Kamoke</option>
                                <option value="Khanewal">Khanewal</option>
                                <option value="Khanpur">Khanpur</option>
                                <option value="Kharian">Kharian</option>
                                <option value="Khushab">Khushab</option>
                                <option value="Kot Addu">Kot Addu</option>
                                <option value="Jauharabad">Jauharabad</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Lalamusa">Lalamusa</option>
                                <option value="Layyah">Layyah</option>
                                <option value="Liaquat Pur">Liaquat Pur</option>
                                <option value="Lodhran">Lodhran</option>
                                <option value="Malakwal">Malakwal</option>
                                <option value="Mamoori">Mamoori</option>
                                <option value="Mailsi">Mailsi</option>
                                <option value="Mandi Bahauddin">
                                  Mandi Bahauddin
                                </option>
                                <option value="Mian Channu">Mian Channu</option>
                                <option value="Mianwali">Mianwali</option>
                                <option value="Multan">Multan</option>
                                <option value="Murree">Murree</option>
                                <option value="Muridke">Muridke</option>
                                <option value="Mianwali Bangla">
                                  Mianwali Bangla
                                </option>
                                <option value="Muzaffargarh">
                                  Muzaffargarh
                                </option>
                                <option value="Narowal">Narowal</option>
                                <option value="Nankana Sahib">
                                  Nankana Sahib
                                </option>
                                <option value="Okara">Okara</option>
                                <option value="Renala Khurd">
                                  Renala Khurd
                                </option>
                                <option value="Pakpattan">Pakpattan</option>
                                <option value="Pattoki">Pattoki</option>
                                <option value="Pir Mahal">Pir Mahal</option>
                                <option value="Qaimpur">Qaimpur</option>
                                <option value="Qila Didar Singh">
                                  Qila Didar Singh
                                </option>
                                <option value="Rabwah">Rabwah</option>
                                <option value="Raiwind">Raiwind</option>
                                <option value="Rajanpur">Rajanpur</option>
                                <option value="Rahim Yar Khan">
                                  Rahim Yar Khan
                                </option>
                                <option value="Rawalpindi">Rawalpindi</option>
                                <option value="Sadiqabad">Sadiqabad</option>
                                <option value="Safdarabad">Safdarabad</option>
                                <option value="Sahiwal">Sahiwal</option>
                                <option value="Sangla Hill">Sangla Hill</option>
                                <option value="Sarai Alamgir">
                                  Sarai Alamgir
                                </option>
                                <option value="Sargodha">Sargodha</option>
                                <option value="Shakargarh">Shakargarh</option>
                                <option value="Sheikhupura">Sheikhupura</option>
                                <option value="Sialkot">Sialkot</option>
                                <option value="Sohawa">Sohawa</option>
                                <option value="Soianwala">Soianwala</option>
                                <option value="Siranwali">Siranwali</option>
                                <option value="Talagang">Talagang</option>
                                <option value="Taxila">Taxila</option>
                                <option value="Toba Tek Singh">
                                  Toba Tek Singh
                                </option>
                                <option value="Vehari">Vehari</option>
                                <option value="Wah Cantonment">
                                  Wah Cantonment
                                </option>
                                <option value="Wazirabad">Wazirabad</option>
                                <option value="" disabled>
                                  Sindh Cities
                                </option>
                                <option value="Badin">Badin</option>
                                <option value="Bhirkan">Bhirkan</option>
                                <option value="Rajo Khanani">
                                  Rajo Khanani
                                </option>
                                <option value="Chak">Chak</option>
                                <option value="Dadu">Dadu</option>
                                <option value="Digri">Digri</option>
                                <option value="Diplo">Diplo</option>
                                <option value="Dokri">Dokri</option>
                                <option value="Ghotki">Ghotki</option>
                                <option value="Haala">Haala</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Islamkot">Islamkot</option>
                                <option value="Jacobabad">Jacobabad</option>
                                <option value="Jamshoro">Jamshoro</option>
                                <option value="Jungshahi">Jungshahi</option>
                                <option value="Kandhkot">Kandhkot</option>
                                <option value="Kandiaro">Kandiaro</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Kashmore">Kashmore</option>
                                <option value="Keti Bandar">Keti Bandar</option>
                                <option value="Khairpur">Khairpur</option>
                                <option value="Kotri">Kotri</option>
                                <option value="Larkana">Larkana</option>
                                <option value="Matiari">Matiari</option>
                                <option value="Mehar">Mehar</option>
                                <option value="Mirpur Khas">Mirpur Khas</option>
                                <option value="Mithani">Mithani</option>
                                <option value="Mithi">Mithi</option>
                                <option value="Mehrabpur">Mehrabpur</option>
                                <option value="Moro">Moro</option>
                                <option value="Nagarparkar">Nagarparkar</option>
                                <option value="Naudero">Naudero</option>
                                <option value="Naushahro Feroze">
                                  Naushahro Feroze
                                </option>
                                <option value="Naushara">Naushara</option>
                                <option value="Nawabshah">Nawabshah</option>
                                <option value="Nazimabad">Nazimabad</option>
                                <option value="Qambar">Qambar</option>
                                <option value="Qasimabad">Qasimabad</option>
                                <option value="Ranipur">Ranipur</option>
                                <option value="Ratodero">Ratodero</option>
                                <option value="Rohri">Rohri</option>
                                <option value="Sakrand">Sakrand</option>
                                <option value="Sanghar">Sanghar</option>
                                <option value="Shahbandar">Shahbandar</option>
                                <option value="Shahdadkot">Shahdadkot</option>
                                <option value="Shahdadpur">Shahdadpur</option>
                                <option value="Shahpur Chakar">
                                  Shahpur Chakar
                                </option>
                                <option value="Shikarpaur">Shikarpaur</option>
                                <option value="Sukkur">Sukkur</option>
                                <option value="Tangwani">Tangwani</option>
                                <option value="Tando Adam Khan">
                                  Tando Adam Khan
                                </option>
                                <option value="Tando Allahyar">
                                  Tando Allahyar
                                </option>
                                <option value="Tando Muhammad Khan">
                                  Tando Muhammad Khan
                                </option>
                                <option value="Thatta">Thatta</option>
                                <option value="Umerkot">Umerkot</option>
                                <option value="Warah">Warah</option>
                                <option value="" disabled>
                                  Khyber Cities
                                </option>
                                <option value="Abbottabad">Abbottabad</option>
                                <option value="Adezai">Adezai</option>
                                <option value="Alpuri">Alpuri</option>
                                <option value="Akora Khattak">
                                  Akora Khattak
                                </option>
                                <option value="Ayubia">Ayubia</option>
                                <option value="Banda Daud Shah">
                                  Banda Daud Shah
                                </option>
                                <option value="Bannu">Bannu</option>
                                <option value="Batkhela">Batkhela</option>
                                <option value="Battagram">Battagram</option>
                                <option value="Birote">Birote</option>
                                <option value="Chakdara">Chakdara</option>
                                <option value="Charsadda">Charsadda</option>
                                <option value="Chitral">Chitral</option>
                                <option value="Daggar">Daggar</option>
                                <option value="Dargai">Dargai</option>
                                <option value="Darya Khan">Darya Khan</option>
                                <option value="Dera Ismail Khan">
                                  Dera Ismail Khan
                                </option>
                                <option value="Doaba">Doaba</option>
                                <option value="Dir">Dir</option>
                                <option value="Drosh">Drosh</option>
                                <option value="Hangu">Hangu</option>
                                <option value="Haripur">Haripur</option>
                                <option value="Karak">Karak</option>
                                <option value="Kohat">Kohat</option>
                                <option value="Kulachi">Kulachi</option>
                                <option value="Lakki Marwat">
                                  Lakki Marwat
                                </option>
                                <option value="Latamber">Latamber</option>
                                <option value="Madyan">Madyan</option>
                                <option value="Mansehra">Mansehra</option>
                                <option value="Mardan">Mardan</option>
                                <option value="Mastuj">Mastuj</option>
                                <option value="Mingora">Mingora</option>
                                <option value="Nowshera">Nowshera</option>
                                <option value="Paharpur">Paharpur</option>
                                <option value="Pabbi">Pabbi</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Saidu Sharif">
                                  Saidu Sharif
                                </option>
                                <option value="Shorkot">Shorkot</option>
                                <option value="Shewa Adda">Shewa Adda</option>
                                <option value="Swabi">Swabi</option>
                                <option value="Swat">Swat</option>
                                <option value="Tangi">Tangi</option>
                                <option value="Tank">Tank</option>
                                <option value="Thall">Thall</option>
                                <option value="Timergara">Timergara</option>
                                <option value="Tordher">Tordher</option>
                                <option value="" disabled>
                                  Balochistan Cities
                                </option>
                                <option value="Awaran">Awaran</option>
                                <option value="Barkhan">Barkhan</option>
                                <option value="Chagai">Chagai</option>
                                <option value="Dera Bugti">Dera Bugti</option>
                                <option value="Gwadar">Gwadar</option>
                                <option value="Harnai">Harnai</option>
                                <option value="Jafarabad">Jafarabad</option>
                                <option value="Jhal Magsi">Jhal Magsi</option>
                                <option value="Kacchi">Kacchi</option>
                                <option value="Kalat">Kalat</option>
                                <option value="Kech">Kech</option>
                                <option value="Kharan">Kharan</option>
                                <option value="Khuzdar">Khuzdar</option>
                                <option value="Killa Abdullah">
                                  Killa Abdullah
                                </option>
                                <option value="Killa Saifullah">
                                  Killa Saifullah
                                </option>
                                <option value="Kohlu">Kohlu</option>
                                <option value="Lasbela">Lasbela</option>
                                <option value="Lehri">Lehri</option>
                                <option value="Loralai">Loralai</option>
                                <option value="Mastung">Mastung</option>
                                <option value="Musakhel">Musakhel</option>
                                <option value="Nasirabad">Nasirabad</option>
                                <option value="Nushki">Nushki</option>
                                <option value="Panjgur">Panjgur</option>
                                <option value="Pishin Valley">
                                  Pishin Valley
                                </option>
                                <option value="Quetta">Quetta</option>
                                <option value="Sherani">Sherani</option>
                                <option value="Sibi">Sibi</option>
                                <option value="Sohbatpur">Sohbatpur</option>
                                <option value="Washuk">Washuk</option>
                                <option value="Zhob">Zhob</option>
                                <option value="Ziarat">Ziarat</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <input
                              className="form-control py-2"
                              type="search"
                              placeholder="Location"
                              id="title"
                              style={{height:"50px",borderRadius:"4px"}}
                            />
                          </div>
                          <div className="col-md-3">
                            <button
                              className="btn w-100 text-white px-5 py-2"
                              style={{
                                backgroundColor: "#4db749",
                                opacity: "0.8",
                                width:"95px",
                                height:"50px",
                                borderRadius:"4px"
                              }}
                              onClick={() => {
                                localStorage.setItem(
                                  "searchcity",
                                  document.getElementById("city").value
                                );
                                localStorage.setItem(
                                  "searchtitle",
                                  document.getElementById("title").value
                                );
                                localStorage.setItem(
                                  "searchtype",
                                  document.getElementById("type").value
                                );
                                localStorage.setItem(
                                  "searchminprice",
                                  document.getElementById("minPrice")
                                    ? document.getElementById("minPrice").value
                                    : "0"
                                );
                                localStorage.setItem(
                                  "searchmaxprice",
                                  document.getElementById("maxPrice")
                                    ? document.getElementById("maxPrice").value
                                    : "999999999999"
                                );
                                localStorage.setItem(
                                  "searchminarea",
                                  document.getElementById("minArea")
                                    ? document.getElementById("minArea").value
                                    : "0"
                                );
                                localStorage.setItem(
                                  "searchmaxarea",
                                  document.getElementById("maxArea")
                                    ? document.getElementById("maxArea").value
                                    : "9999999999999999999"
                                );
                                localStorage.setItem(
                                  "searchbeds",
                                  document.getElementById("beds").value
                                );
                                navigate("/#");
                              }}
                            >
                              FIND
                            </button>
                          </div>
                        </div>

                        <div
                          class="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div class="accordion-item ">
                            <h2 class="accordion-header" id="flush-headingOne">
                              <button
                                class="accordion-button  collapsed "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                                style={{
                                  color: "white",
                                  textDecoration: "none",
                                  fontWeight:"600",
                                  fontSize:"14px",
                                  lineHeight:"16.8px"
                                }}
                              >
                                <i class="fas fa-angle-down "></i>  &nbsp; More Options
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              class="accordion-collapse collapse"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body p-0">
                                {" "}
                                <div className="container">
                                  <div className="row ">
                                    <div className="col-md-3">
                                      <div>
                                        <select
                                          class="form-select form-select-md mb-3 py-2"
                                          aria-label=".form-select-md example"
                                          id="type"
                                          name="type"
                                        >
                                          <option selected>Any Type</option>
                                          <option value="house">House</option>
                                          <option value="flat">Flat</option>
                                          <option value="upperPortion">
                                            Upper Portion
                                          </option>
                                          <option value="lowerPortion">
                                            Lower Portion
                                          </option>
                                          <option value="room">Room</option>
                                          <option value="farmHouse">
                                            Farm House
                                          </option>
                                          <option value="pentHouse">
                                            Pent House
                                          </option>
                                          <option value="resedentialPlot">
                                            Resedential Plot
                                          </option>
                                          <option value="commercialPlot">
                                            Commercial Plot
                                          </option>
                                          <option value="agriculturalLand">
                                            Agricultural Land
                                          </option>
                                          <option value="industrialLand">
                                            Industrial Land
                                          </option>
                                          <option value="office">Office</option>
                                          <option value="shop">Shop</option>
                                          <option value="warehouse">
                                            WareHouse
                                          </option>
                                          <option value="factory">
                                            Factory
                                          </option>
                                          <option value="building">
                                            Building
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                      <div
                                        className="bg-white"
                                        onClick={() => setPricePop(!pricePop)}
                                      >
                                        <input
                                          className="form-control  p-0 bg-white border-0 px-3 "
                                          type="text"
                                          placeholder="Search Price"
                                          disabled
                                        />
                                        <div className="d-flex justify-content-between align-items-center m-0 p-0 px-3">
                                          <p className="p-0 m-0 pb-1">0</p>
                                          <p className="p-0 m-0 pb-1">to</p>
                                          <p className="p-0 m-0 pb-1">Any</p>
                                          <p className="p-0 m-0 pb-1">▼</p>
                                        </div>
                                      </div>

                                      {pricePop ? (
                                        <div className="rounded-2  bg-white p-2  row my-2">
                                          <div className="col-md-6">
                                            <h6>MIN</h6>
                                            
                                            <input 
                                            className="form-control py-2"
                                            type="number"
                                            />

                                          </div>
                                          <div className="col-md-6">
                                            <h6>MAX</h6>
                                            {/* <input
                                              type="text"
                                              className="form-control"
                                              placeholder="ANY"
                                              id="maxPrice"
                                              defaultValue={1000000000}
                                            /> */}
                                             <input 
                                            className="form-control py-2"
                                            type="number"
                                            />
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                    <div className="col-md-3 mb-3 position-relative">
                                      <div
                                        className="bg-white"
                                        onClick={() => setBedPop(!bedPop)}
                                      >
                                        <input
                                          className="form-control  p-0 bg-white border-0 px-3 "
                                          type="text"
                                          placeholder="Search Area"
                                          disabled
                                        />
                                        <div className="d-flex justify-content-between align-items-center m-0 p-0 px-3">
                                          <p className="p-0 m-0 pb-1">0</p>
                                          <p className="p-0 m-0 pb-1">to</p>
                                          <p className="p-0 m-0 pb-1">Any</p>
                                          <p className="p-0 m-0 pb-1">▼</p>
                                        </div>
                                      </div>

                                      {bedPop ? (
                                        // <div className="rounded-2 bg-white p-2 d-flex justify-content-between align-items-center my-2">
                                        //   <div>
                                        //     <h6>MIN</h6>
                                        //     <input
                                        //       type="text"
                                        //       className="form-control"
                                        //       placeholder="0"
                                        //       id="minArea"
                                        //       defaultValue={0}
                                        //     />
                                        //   </div>
                                        //   <div>
                                        //     <h6>MAX</h6>
                                        //     <input
                                        //       type="text"
                                        //       className="form-control"
                                        //       placeholder="ANY"
                                        //       id="maxArea"
                                        //       defaultValue={10000000000}
                                        //     />
                                        //   </div>
                                        // </div>
                                        <div className="rounded-2 bg-white p-2  row my-2">
                                          <div className="col-md-6">
                                            <h6>MIN</h6>
                                            
                                            <input 
                                            className="form-control py-2"
                                            type="number"
                                            />

                                          </div>
                                          <div className="col-md-6">
                                            <h6>MAX</h6>
                                            {/* <input
                                              type="text"
                                              className="form-control"
                                              placeholder="ANY"
                                              id="maxPrice"
                                              defaultValue={1000000000}
                                            /> */}
                                             <input 
                                            className="form-control py-2"
                                            type="number"
                                            />
                                          </div>
                                        </div>
                                      ) : null}
                                    </div>
                                    <div className="col-md-3 ">
                                      <div>
                                        <select
                                          class="form-select form-select-md mb-3 py-2"
                                          aria-label=".form-select-md example"
                                          id="beds"
                                          name="beds"
                                        >
                                          <option selected>All Beds</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                          <option value="6">6</option>
                                          <option value="7">7</option>
                                          <option value="8">8</option>
                                          <option value="9">9</option>
                                          <option value="10">10</option>
                                          <option value="10+">10+</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
