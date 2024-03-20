import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import api_url from "../../ApiUrl";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
    const [myPost, setMyPost] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchProjects();
    }, [keyword, city]);

    const fetchProjects = () => {
        let url = api_url + "project/get";
        const params = {};

        if (keyword) {
            params.keyword = keyword;
        }
        if (city) {
            params.city = city;
        }

        axios.get(url, { params })
            .then(res => {
                console.log(res.data, '==========>img');
                setMyPost(res.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    
    const handleSearch = () => {
        fetchProjects();
    };

    return (
        <>
            <div id="intro-example" className="text-center bg-image" style={{backgroundImage:`url('${require('./../../img/banner/bg_rectangle.png')}')`}}>
            <div className="container">
                    <center><h3 className="text-white my-2 pt-4" style={{fontWeight:"700",fontSize:"36px",lineHeight:"43.2px"}}>Find New Projects</h3></center>
                    <center><h5 className="text-white pb-4" style={{fontWeight:"400",fontSize:"36px",lineHeight:"43.2px"}}>Find exciting new real estate projects and investment opportunities</h5></center>
                    <div className="card p-2">
                        <div className="row p-2">
                            <div className="col-md-5 mx-auto">
                                <input
                                    className="form-control py-2"
                                    type="text"
                                    placeholder="Keyword"
                                    id="title"
                                    style={{height:"50px",borderRadius:"4px"}}
                                />
                            </div>
                            <div className='col-md-5 mx-auto'>
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
                            <div className="col-md-1 mx-auto">
                                <button type="button" className="btn btn-light bg_makkan text-white btn-lg mx-auto" style={{backgroundColor:'#4DB749'}}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            {myPost.map((i, index) => (
                                <div className="col-md-12" style={{padding:"5px"}} key={index}>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <img
                                                style={{width:"100%",height:"230px"}}
                                                src={i?.image}
                                                alt="Image Text"
                                                className="img-fluid rounded-start"
                                            />
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card-body">
                                                <div>{i?.category}</div>
                                                <h6 className="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
                                                <Link className="nav-link bg_color_maken" to={`projectdetails/${i?.id}`} style={{color: "#4DB749"}}>
                                                    <h5 className="card-title" style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}>{i?.title}</h5>    
                                                </Link>
                                                <ul style={{listStyle:"none",paddingLeft:"0px"}} className="nav">
                                                    <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i className="far fa-building text-muted"></i> <span>{i?.size} Marla</span></li>
                                                    <li style={{marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><span><i className="fas fa-bed text-muted"></i> {i?.beds} Beds</span></li>
                                                    <li style={{marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i className="fab fa-docker text-muted"></i>  <span>{i?.baths} Baths</span></li>
                                                </ul>
                                                <div className="mt-3">
                                                    <h6 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>PKR {i?.price}</h6>
                                                    <a href={`tel:${i?.phone}`} className="btn bg_makkan text-white" style={{backgroundColor:'#4DB749',marginRight:"5px"}}><i className="fas fa-phone-flip"></i> Call</a>
                                                    <a href={`mailto:${myPost?.email}`} className="btn btn-outline-success" style={{marginRight:"5px"}}><i className="far fa-envelope"></i> Mail</a>
                                                    <a href={`whatsapp://send?abid=${i?.phone}`} className="btn btn-outline-success" style={{marginRight:"5px"}}><i className="fab fa-whatsapp"></i> Whatsapp</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <a href="">
                                    <img src={require('./../../img/ads/Group 10099.png')} style={{width:"100%",height:"230px"}} alt="Advertisement" />
                                </a>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            {/* Additional content here */}
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <br/><br/>
                        <img src={require('./../../img/ads/Group 10098 (1).png')} className="w-100" alt="Advertisement" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectList;
