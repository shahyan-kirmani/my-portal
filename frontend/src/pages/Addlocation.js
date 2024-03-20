import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import { FaHospitalUser, FaUserTimes } from 'react-icons/fa';
import { MdOutlineLocationCity } from 'react-icons/md';
import { BsFillHouseFill } from 'react-icons/bs'
import { BiBuildingHouse } from 'react-icons/bi';
import axios from 'axios';
import api_url from '../ApiUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer';


const Addlocation = () => {


    const [images, setImages] = useState([]);


    const imageHandler = (e) => {
      setImages([...images, e.target.files[0]]);
    };
  
    console.log(images, '==================>upload images')
  
    const handleRemoveItem = (id) => {
      setImages(images.filter(item => item !== id));
    };

    const navigate = useNavigate()
    const myId = localStorage.getItem('mainUserId')

    const [purpose, setPurpose] = useState(null)
    const [activeFeat, setActiveFeat] = useState(false)
    const [activeVid, setActiveVid] = useState(false)
    const [activeBed, setActiveBed] = useState(false)
    const [beds, setBeds] = useState('');
    const [type, setType] = useState('');
    const [baths, setBaths] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [title, setTitle] = useState('');
    const [featuress, setFeature] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [landline, setLandline] = useState('');
    const [email, setEmail] = useState('');


    const toggleActiveFeat = () => {
        setActiveFeat(!activeFeat)
    }


    const toggleActiveVid = () => {
        setActiveVid(!activeVid)
    }


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };


    const handleVideoChange = (event) => {
        const file = event.target.value;
        setVideo(file);
    };


    const submit = async() => {

       

        if (myId.length === 0) {
            toast.error('Must sign in before add property');
        }
        else if (!purpose) {
            toast.error('Must enter purpose');
        }
        else if (title.length === 0) {
            toast.error('Must enter title');
        }
        else if (featuress.length === 0) {
            toast.error('Must add features');
        }
        else if (type.length === 0) {
            toast.error('Must select type');
        }
        else if (price.length === 0) {
            toast.error('Must enter price');
        } else if (location.length === 0) {
            toast.error('Must enter address');
        } else if (description.length === 0) {
            toast.error('Must enter description');
        } else if (size.length === 0) {
            toast.error('Must enter size');
        } else if (city.length === 0) {
            toast.error('Must enter city');
        } else if (phone.length === 0) {
            toast.error('Must enter phone');
        }


        else {
            
            


            // const para = new FormData();
            // para.append('purpose', purpose)
            // para.append('beds', beds);
            // para.append('baths', baths);
            // images.map(ite=>{
            //     para.append('image', ite);
            // })
            // para.append('video', video);
            // para.append('title', title);
            // para.append('price', price);
            // para.append('description', description);
            // para.append('size', size);
            // para.append('city', city);
            // para.append('location', location);
            // para.append('phone', phone);
            // para.append('landline', landline);
            // para.append('email', email);
            // para.append('feature', featuress);
            // para.append('type', type);
            // para.append('userId', myId);



            // console.log((para));
            

            let profilephoto = " "

            try {

                // alert('click')
      
              let param = new FormData();
              images.map(ite=>{
                  param.append("images",ite);
            })
            // param.append("file",document.getElementById('image').files[0]);
      
              profilephoto = await axios.post(`${api_url}property/image`, param);
              
              console.log(profilephoto,'========== ======== ==== ==');
      
            } catch (error) {
              
              console.log(error);
            }


            const para={
                title:title,
                type:type,
                feature:featuress,
                image:profilephoto.data.data,
                video:video,
                price:price,
                description:description,
                size:size,
                location:location,
                city:city,
                phone:phone,
                landline:landline,
                beds:beds,
                baths:baths,
                purpose:purpose,
                email:email,
                userId:myId,
                

            }

            // fetch(`${api_url}property/create`, {
            //     method: 'POST',
            //     body: para,
            // }).then(response => response.json()).then(data => {
            //     console.log(data)
            //     if (data.status === 'ok') {
            //         toast.success('Property created successfully!');
            //         // navigate('/')

            //     } else if (data.status === 'fail') {
            //         toast.error(data.message);
            //     }
            // }).catch(err => {
            //     console.log(err)
            // })

            console.log(image, 'image======>')

            let response=await axios.post(`${api_url}property/create`, para)
            if (response.data.status === 'ok') {
                console.log(response.data);
                toast.success('Property created successfully!');
                navigate('/')
            }
            else {
                toast.error(response.data.message);
            }
        }

    }


    return (
        <div className='position-relative add_location' style={{ backgroundColor: '#F3F7F9' }}>
            <div className='position-fixed  w-100' style={{ zIndex: '999999' }}>
                <TopNav />
                <BottomNav />
            </div>

            <ToastContainer />
           
            <div className='location  pt-5'>
                <br></br>
                <br></br>
                <br></br>
            <div
            id="intro-example"
            class="p-5 text-center bg-image"
            style={{backgroundImage:`url('${require("./../img/banner/Group 22 (9).png")}')`,height:"170px"}}
        >
        </div>
                {/* <div className='about_us3 mt-5'>

                </div> */}

<br></br>
<br></br>
<br></br>
<div className='container  px-4 my-4 '>
                <div className='row'>

                    <div className='rounded-5 col-md-12 mb-4 bg-white border-0 shadow row p-3 py-5'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex  mb-2'>
                                <img src={require('../assets/images/Group 3786.png')} width="40px" alt='' height="40px" />
                                <h5 className='ps-2 mt-2' >LOCATION & PURPOSE</h5>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Select Purpose
                                    </label>
                                </div>
                                {/* <div className='text-end'>

                                    <FaUserTimes style={{ color: '#40C057' }} size={20} />

                                </div> */}
                            </div>
                            <div className='mb-4'>
                              
                                <span id='prent' className=' rounded-5  border px-4 py-1 me-3' onClick={() => {
                                    document.getElementById('prent').style.backgroundColor = '#4DB749'
                                    document.getElementById('psell').style.backgroundColor = 'white'
                                    setPurpose('rent')
                                }}>RENT</span>
                                <span id='psell' className=' rounded-5 border px-4 py-1 me-3 ' onClick={() => {
                                    document.getElementById('prent').style.backgroundColor = 'white'
                                    document.getElementById('psell').style.backgroundColor = '#4DB749'
                                    setPurpose('sell')
                                }}>SELL</span>
                            </div>


                            <div className='d-flex pt-4 justify-content-between align-items-center'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Select Property Type
                                    </label>
                                </div>
                                {/* <div className='text-end'>

                                    <i className='fa fa-user text-success'></i>
                                </div> */}
                            </div>




                            <div className='mb-4'>

                                <>
                                    <ul className="nav nav-pills mb-3 border-bottom border-dark" id="pills-tab" role="tablist">
                                        <li className="nav-item me-4" role="presentation">
                                            <button
                                                className="nav-link border px-4 py-1 me-3 active text-dark bg-white "
                                                id="pills-home-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-home"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-home"
                                                aria-selected="true"
                                            >
                                                Home
                                            </button>
                                        </li>
                                        <li className="nav-item me-4" role="presentation">
                                            <button
                                                className="nav-link text-dark fw-bold border px-4 py-1 me-3 bg-white"
                                                id="pills-profile-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-profile"
                                                aria-selected="false"
                                            >
                                                Plots
                                            </button>
                                        </li>
                                        <li className="nav-item me-4" role="presentation">
                                            <button
                                                className="nav-link text-dark border px-4 py-1 me-3 bg-white"
                                                id="pills-contact-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-contact"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-contact"
                                                aria-selected="false"
                                            >
                                                Commercial
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active "
                                            id="pills-home"
                                            role="tabpanel"
                                            aria-labelledby="pills-home-tab"
                                            tabIndex={0}
                                        >
                                            <div className='d-flex flex-wrap'>

                                                {type==='house'?<div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:'#4DB749'}} onClick={() => setType('house')}>House</div>:<div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' onClick={() => setType('house')}>House</div>}


                                                {type==='flat'?<div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:'#4DB749'}} onClick={() => setType('flat')}>Flat</div>:<div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' onClick={() => setType('flat')}>Flat</div>}

                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='upperPortion'?'#4DB749':'white'}} onClick={() => setType('upperPortion')}>Upper Portion</div>

                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='lowerPortion'?'#4DB749':'white'}} onClick={() => setType('lowerPortion')}>Lower Portion</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='room'?'#4DB749':'white'}} onClick={() => setType('room')}>Room</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='farmHouse'?'#4DB749':'white'}} onClick={() => setType('farmHouse')}>Farm House</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='pentHouse'?'#4DB749':'white'}} onClick={() => setType('pentHouse')}>Pent House</div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="pills-profile-tab"
                                            tabIndex={0}
                                        >
                                            <div className='d-flex flex-wrap'>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='resedentialPlot'?'#4DB749':'white'}} onClick={() => setType('resedentialPlot')}>Resedential Plot</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='commercialPlot'?'#4DB749':'white'}} onClick={() => setType('commercialPlot')}>Commercial Plot</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='agriculturalLand'?'#4DB749':'white'}} onClick={() => setType('agriculturalLand')}>Agricultural Land</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='industrialLand'?'#4DB749':'white'}} onClick={() => setType('industrialLand')}>Industrial Land</div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-contact"
                                            role="tabpanel"
                                            aria-labelledby="pills-contact-tab"
                                            tabIndex={0}
                                        >
                                            <div className='d-flex flex-wrap'>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='office'?'#4DB749':'white'}} onClick={() => setType('office')}>Office</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='shop'?'#4DB749':'white'}} onClick={() => setType('shop')}>Shop</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='warehouse'?'#4DB749':'white'}} onClick={() => setType('warehouse')}>Warehouse</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='factory'?'#4DB749':'white'}} onClick={() => setType('factory')}>Factory</div>
                                                <div className=' rounded-5 border px-4 py-1 me-3 mb-2 ' style={{backgroundColor:type==='building'?'#4DB749':'white'}} onClick={() => setType('building')}>Building</div>
                                            </div>
                                        </div>

                                    </div>
                                </>



                            </div>




                           


                            <div className='row'>
                                <div className='col-md-6'>
                                <div className='mb-3'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        City
                                    </label>
                                </div>
                                {/* <select class="form-select py-2 border-0 rounded-1" aria-label="Default select example" id='city' onChange={(e) => setCity(e.target.value)}> */}
                                <select class="form-select py-2 border-0 rounded-1" aria-label="Default select example" id='city' onChange={(e) => setCity(e.target.value)}>
                                    <option value="" disabled selected>Select The City</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="" disabled>Punjab Cities</option>
                                    <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                                    <option value="Ahmadpur East">Ahmadpur East</option>
                                    <option value="Ali Khan Abad">Ali Khan Abad</option>
                                    <option value="Alipur">Alipur</option>
                                    <option value="Arifwala">Arifwala</option>
                                    <option value="Attock">Attock</option>
                                    <option value="Bhera">Bhera</option>
                                    <option value="Bhalwal">Bhalwal</option>
                                    <option value="Bahawalnagar">Bahawalnagar</option>
                                    <option value="Bahawalpur">Bahawalpur</option>
                                    <option value="Bhakkar">Bhakkar</option>
                                    <option value="Burewala">Burewala</option>
                                    <option value="Chillianwala">Chillianwala</option>
                                    <option value="Chakwal">Chakwal</option>
                                    <option value="Chichawatni">Chichawatni</option>
                                    <option value="Chiniot">Chiniot</option>
                                    <option value="Chishtian">Chishtian</option>
                                    <option value="Daska">Daska</option>
                                    <option value="Darya Khan">Darya Khan</option>
                                    <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                    <option value="Dhaular">Dhaular</option>
                                    <option value="Dina">Dina</option>
                                    <option value="Dinga">Dinga</option>
                                    <option value="Dipalpur">Dipalpur</option>
                                    <option value="Faisalabad">Faisalabad</option>
                                    <option value="Ferozewala">Ferozewala</option>
                                    <option value="Fateh Jhang">Fateh Jang</option>
                                    <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                                    <option value="Gojra">Gojra</option>
                                    <option value="Gujranwala">Gujranwala</option>
                                    <option value="Gujrat">Gujrat</option>
                                    <option value="Gujar Khan">Gujar Khan</option>
                                    <option value="Hafizabad">Hafizabad</option>
                                    <option value="Haroonabad">Haroonabad</option>
                                    <option value="Hasilpur">Hasilpur</option>
                                    <option value="Haveli Lakha">Haveli Lakha</option>
                                    <option value="Jatoi">Jatoi</option>
                                    <option value="Jalalpur">Jalalpur</option>
                                    <option value="Jattan">Jattan</option>
                                    <option value="Jampur">Jampur</option>
                                    <option value="Jaranwala">Jaranwala</option>
                                    <option value="Jhang">Jhang</option>
                                    <option value="Jhelum">Jhelum</option>
                                    <option value="Kalabagh">Kalabagh</option>
                                    <option value="Karor Lal Esan">Karor Lal Esan</option>
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
                                    <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                                    <option value="Mian Channu">Mian Channu</option>
                                    <option value="Mianwali">Mianwali</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Murree">Murree</option>
                                    <option value="Muridke">Muridke</option>
                                    <option value="Mianwali Bangla">Mianwali Bangla</option>
                                    <option value="Muzaffargarh">Muzaffargarh</option>
                                    <option value="Narowal">Narowal</option>
                                    <option value="Nankana Sahib">Nankana Sahib</option>
                                    <option value="Okara">Okara</option>
                                    <option value="Renala Khurd">Renala Khurd</option>
                                    <option value="Pakpattan">Pakpattan</option>
                                    <option value="Pattoki">Pattoki</option>
                                    <option value="Pir Mahal">Pir Mahal</option>
                                    <option value="Qaimpur">Qaimpur</option>
                                    <option value="Qila Didar Singh">Qila Didar Singh</option>
                                    <option value="Rabwah">Rabwah</option>
                                    <option value="Raiwind">Raiwind</option>
                                    <option value="Rajanpur">Rajanpur</option>
                                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                    <option value="Rawalpindi">Rawalpindi</option>
                                    <option value="Sadiqabad">Sadiqabad</option>
                                    <option value="Safdarabad">Safdarabad</option>
                                    <option value="Sahiwal">Sahiwal</option>
                                    <option value="Sangla Hill">Sangla Hill</option>
                                    <option value="Sarai Alamgir">Sarai Alamgir</option>
                                    <option value="Sargodha">Sargodha</option>
                                    <option value="Shakargarh">Shakargarh</option>
                                    <option value="Sheikhupura">Sheikhupura</option>
                                    <option value="Sialkot">Sialkot</option>
                                    <option value="Sohawa">Sohawa</option>
                                    <option value="Soianwala">Soianwala</option>
                                    <option value="Siranwali">Siranwali</option>
                                    <option value="Talagang">Talagang</option>
                                    <option value="Taxila">Taxila</option>
                                    <option value="Toba Tek Singh">Toba Tek Singh</option>
                                    <option value="Vehari">Vehari</option>
                                    <option value="Wah Cantonment">Wah Cantonment</option>
                                    <option value="Wazirabad">Wazirabad</option>
                                    <option value="" disabled>Sindh Cities</option>
                                    <option value="Badin">Badin</option>
                                    <option value="Bhirkan">Bhirkan</option>
                                    <option value="Rajo Khanani">Rajo Khanani</option>
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
                                    <option value="Naushahro Feroze">Naushahro Feroze</option>
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
                                    <option value="Shahpur Chakar">Shahpur Chakar</option>
                                    <option value="Shikarpaur">Shikarpaur</option>
                                    <option value="Sukkur">Sukkur</option>
                                    <option value="Tangwani">Tangwani</option>
                                    <option value="Tando Adam Khan">Tando Adam Khan</option>
                                    <option value="Tando Allahyar">Tando Allahyar</option>
                                    <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                                    <option value="Thatta">Thatta</option>
                                    <option value="Umerkot">Umerkot</option>
                                    <option value="Warah">Warah</option>
                                    <option value="" disabled>Khyber Cities</option>
                                    <option value="Abbottabad">Abbottabad</option>
                                    <option value="Adezai">Adezai</option>
                                    <option value="Alpuri">Alpuri</option>
                                    <option value="Akora Khattak">Akora Khattak</option>
                                    <option value="Ayubia">Ayubia</option>
                                    <option value="Banda Daud Shah">Banda Daud Shah</option>
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
                                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                                    <option value="Doaba">Doaba</option>
                                    <option value="Dir">Dir</option>
                                    <option value="Drosh">Drosh</option>
                                    <option value="Hangu">Hangu</option>
                                    <option value="Haripur">Haripur</option>
                                    <option value="Karak">Karak</option>
                                    <option value="Kohat">Kohat</option>
                                    <option value="Kulachi">Kulachi</option>
                                    <option value="Lakki Marwat">Lakki Marwat</option>
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
                                    <option value="Saidu Sharif">Saidu Sharif</option>
                                    <option value="Shorkot">Shorkot</option>
                                    <option value="Shewa Adda">Shewa Adda</option>
                                    <option value="Swabi">Swabi</option>
                                    <option value="Swat">Swat</option>
                                    <option value="Tangi">Tangi</option>
                                    <option value="Tank">Tank</option>
                                    <option value="Thall">Thall</option>
                                    <option value="Timergara">Timergara</option>
                                    <option value="Tordher">Tordher</option>
                                    <option value="" disabled>Balochistan Cities</option>
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
                                    <option value="Killa Abdullah">Killa Abdullah</option>
                                    <option value="Killa Saifullah">Killa Saifullah</option>
                                    <option value="Kohlu">Kohlu</option>
                                    <option value="Lasbela">Lasbela</option>
                                    <option value="Lehri">Lehri</option>
                                    <option value="Loralai">Loralai</option>
                                    <option value="Mastung">Mastung</option>
                                    <option value="Musakhel">Musakhel</option>
                                    <option value="Nasirabad">Nasirabad</option>
                                    <option value="Nushki">Nushki</option>
                                    <option value="Panjgur">Panjgur</option>
                                    <option value="Pishin Valley">Pishin Valley</option>
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
                                <div className='col-md-6'>
                                <div class="mb-3">
                            <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Location
                                    </label>
                                </div>
                                <input type="text" class="form-control border-0 py-2" id="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
                            </div>
                                </div>
                            </div>



                        </div>
                        

                    </div>



                    <div className='rounded-5 col-md-5 mb-4 bg-white border-0 shadow mx-auto p-3 py-5 '>
                        
                       <div className='row'>
                       <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex'>
                                <img src={require('../assets/images/moneys.png')} width="40px" alt='' height="40px" />
                                <h5 className='ps-2 mt-2'>PRICE & AREA</h5>
                            </div>

                        </div>
                        
                        <div className='col-lg-12 col-md-12 col-sm-12 p-5'>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Area Size
                                    </label>
                                </div>
                                {/* <div className='text-end'>

                                    <BsFillHouseFill style={{ color: '#40C057' }} size={20} />
                                </div> */}
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control py-2 border-0" id="size" placeholder="Enter Unit" onChange={(e) => setSize(e.target.value)} />

                                <select class="form-select border-0 w-25" aria-label="Default select example">
                                    <option selected>Marla</option>
                                    <option value="Sq.Yd.">Sq. Yd.</option>
                                    <option value="Sq.M.">Sq. M.</option>
                                    <option value="Sq.Ft.">Sq. Ft.</option>
                                </select>
                            </div>





                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Total {purpose==='sell'?'Price':"Rent"}
                                    </label>
                                </div>
                                {/* <div className='text-end'>

                                    <img src={require('../assets/images/destination.png')} width="25px" height="25px" alt='' />
                                </div> */}
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control py-2 border-0" id="price" placeholder={purpose==='sell'?"Enter Price":"Enter Rent"} onChange={(e) => setPrice(e.target.value)} />

                                <input type="text" class="form-control w-25 py-2 border-0" id="price" placeholder="PKR" disabled/>
                            </div>



                        </div>
                       </div>

                    </div>





                    <div className='rounded-5 col-md-6 mb-4 bg-white border-0 shadow mx-auto  p-3 py-5'>
                      <div className='row'>
                      <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex'>
                                <img src={require('../assets/images/notification-status.png')} width="40px" alt='' height="40px" />
                                <h5 className='ps-2 mt-2'>FEATURE & AMENITIES</h5>
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 p-5 col-sm-12'>


                            <div className='row'>
                                <div className='col-md-6'>
                                <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Bedrooms
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex flex-wrap">
                            {/* {beds==='Studio'?<div className=' rounded-5  border px-4 py-1 me-3 mb-2' onClick={() => setBeds('Studio')} style={{  borderRadius: '20px',backgroundColor:'#4DB749' }}><span style={{fontSize:"10px"}}>Studio</span></div>:<div className=' rounded-5  border px-3 py-1 me-1 mb-2' onClick={() => setBeds('Studio')} style={{ borderRadius: '20px' }}><span style={{fontSize:"12px"}}>Studio</span></div>} */}

                                {beds===1?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(1)} style={{ width: '60px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>Studio</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(1)} style={{ width: '60px', height: '20px', borderRadius: '20px' }}>Studio</div>}
                                {beds===1?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(1)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>1</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(1)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>1</div>}

                                {beds===2?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(2)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>2</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(2)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>2</div>}

                                {beds===3?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(3)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>3</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(3)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>3</div>}

                                {beds===4?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(4)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>4</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(4)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>4</div>}

                                {beds===5?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(5)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>5</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(5)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>5</div>}

                                {/* {beds===6?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(6)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>6</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(6)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>6</div>}

                                {beds===7?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(7)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>7</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(7)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>7</div>}

                                {beds===8?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(8)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>8</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(8)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>8</div>}

                                {beds===9?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(9)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>9</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(9)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>9</div>}

                                {beds===10?<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(10)} style={{ width: '20px', height: '20px', borderRadius: '20px',backgroundColor:'#4DB749' }}>10</div>:<div className='border me-3 mb-2 d-flex align-items-center  justify-content-center' onClick={() => setBeds(10)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>10</div>}


                                <div className='border location_btn me-3 mb-2 d-flex align-items-center location_btn justify-content-center' onClick={() => setBeds(11)} style={{ width: '20px', height: '20px', borderRadius: '20px' }}>10+</div> */}
                            </div>
                                </div>
                                <div className='col-md-6'>
                                <div className='d-flex  justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Bathrooms
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex">
                                
                                {baths===1?<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(1)} style={{ width: '20px', height: '20px', borderRadius: '50%',backgroundColor:'#4DB749' }}>1</div>:<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(1)} style={{ width: '20px', height: '20px', borderRadius: '50%' }}>1</div>}

                                {baths===2?<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(2)} style={{ width: '20px', height: '20px', borderRadius: '50%',backgroundColor:'#4DB749' }}>2</div>:<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(2)} style={{ width: '20px', height: '20px', borderRadius: '50%' }}>2</div>}

                                {baths===3?<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(3)} style={{ width: '20px', height: '20px', borderRadius: '50%',backgroundColor:'#4DB749' }}>3</div>:<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(3)} style={{ width: '20px', height: '20px', borderRadius: '50%' }}>3</div>}

                                {baths===4?<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(4)} style={{ width: '20px', height: '20px', borderRadius: '50%',backgroundColor:'#4DB749' }}>4</div>:<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(4)} style={{ width: '20px', height: '20px', borderRadius: '50%' }}>4</div>}

                                {baths===5?<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(5)} style={{ width: '20px', height: '20px', borderRadius: '50%',backgroundColor:'#4DB749' }}>5</div>:<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(5)} style={{ width: '20px', height: '20px', borderRadius: '50%' }}>5</div>}

                                {/* {baths===6?<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(6)} style={{ width: '20px', height: '20px', borderRadius: '50%',backgroundColor:'#4DB749' }}>6</div>:<div className='border  me-3 mb-2 d-flex align-items-center justify-content-center' onClick={() => setBaths(6)} style={{ width: '20px', height: '20px', borderRadius: '50%' }}>6</div>} */}


                            </div>
                                </div>
                            </div>


                            


                            





                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        <h6>Feature & Amenities</h6>
                                    </label>
                                </div>
                            </div>


                            <div className='mb-3'>
                                <small>Add aditional features e.g parking spaces, waste disposal, internet etc.</small>
                            </div>



                            <div>
                                <button className='btn text-white py-1' style={{ backgroundColor: '#4DB749' }} onClick={toggleActiveFeat}>Add Amenities</button>
                            </div>








                            {activeFeat ? <div className='col-lg-12 col-md-12 col-sm-12 mt-2'>
                                <textarea class="form-control location_btn"
                                    rows="8"
                                    placeholder="Add Feature here" id="feature" style={{ height: '160px' }} onChange={(e) => setFeature(e.target.value)}></textarea>
                            </div> : null}
                        </div>
                      </div>

                    </div>




                    <div className='rounded-5 col-md-5 mx-auto mb-4 bg-white border-0 shadow row p-3 py-5'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex'> 
                            <img src={require('../assets/images/info-circle.png')} width="40px" alt='' height="40px" />
                                {/* <i><FaHospitalUser size={35} color='#4DB749' /></i> */}
                                <h5 className='ps-2 mt-2'>ADD INFORMATION</h5>
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12 p-5'>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Title
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control border-0" id="title" placeholder="Enter Beautiful Title" onChange={(e) => setTitle(e.target.value)} />
                            </div>





                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Description
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3">
                                <div class="form-group">
                                    <textarea class="form-control location_btn"
                                        rows="8"
                                        placeholder="Describe your property, its features, area in it. etc." id="description" style={{ height: '160px' }} onChange={(e) => setDescription(e.target.value)}></textarea>
                                 
                                </div>

                            </div>



                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-12'></div>

                    </div>



                    <div className='rounded-5 col-md-6 mx-auto mb-4 bg-white border-0 shadow row p-3 py-5'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex'>
                                <img src={require('../assets/images/gallery-add.png')} width="40px" alt='' height="40px" />
                                <h5 className='ps-2 mt-2'>PROPERTY IMAGES & VIDEOS</h5>
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12'>




                            <div className='d-flex justify-content-between align-items-center mb-4'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Upload Images of your property
                                    </label>
                                </div>
                            </div>


                            <div className='row rounded-3 p-4 ' >
                                <div>
                                <label>Upload Images of your property</label>
                                <input id='image' className='form-control' type='file'  onChange={(e) => imageHandler(e)} />
                                <p>Max Size: 5MB,.jpg,.png format only
                                    <br></br>
                                    Ads with pictures get 5x more views and leads
                                </p>
                                </div>
                                {/* <p>Max Size: 5MB,.jpg,.png format only</p> */}
                                {/* <div className='col-md-6'>
                                    <small>Ads with pictures get 5x more views and leads</small>
                                    <br />
                                    <br />
                                    <small>Upload good quality pictures with proper lighting.</small>
                                    <br />
                                    <br />
                                    <small>Cover all areas of your property</small>
                                </div> */}

                                <div className="col-md-12 d-flex gap-2 my-3">
                                    {images && images?.map(i => {
                                        return (<>
                                            <div className='col-md-2  position-relative'>
                                                <img src={URL.createObjectURL(i)} width='90px' height='90px' className='border rounded-3' />
                                                <span className='border position-absolute p-1 py-0 rounded-circle bg-dark text-white' style={{ left: '80px', lineHeight: '15px', fontSize: 'x-small', cursor: 'pointer' }} onClick={() => handleRemoveItem(i)}>x</span>
                                            </div>
                                        </>)
                                    })}
                                </div>

                            </div>




                            <div className='row p-4 rounded-3 '>
                                <div className='col-md-12 '>
                                    <h6>Add videos of your property(Optional)</h6>
                                   
                                    {/* <p style={{ Color: '#CACACA' }}>Add videos of your property from youtube. Upload on youtube and paste the link below.</p> */}
                                    {/* <button className='btn bg-white px-5 ' style={{backgroundColor:type==='upperPortion'?'#4DB749':'white'}} onClick={toggleActiveVid}>Add Video</button> */}

                                    {activeVid?<input type="text" class="form-control border-0 mt-3" placeholder="Enter youtube video link" id='video'   onChange={(e) => handleVideoChange(e)} />: <input id='image' className='form-control' type='file'  onChange={(e) => toggleActiveVid(e)} />}
                                </div>
                                
                            </div>




                        </div>
                        

                    </div>




                    <div className='rounded-5 col-md-5 mx-auto mb-4  bg-white border-0 shadow  p-4 py-5'>
                       <div className='row'>
                       <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className='d-flex'>
                                <img src={require('../assets/images/route-square.png')} width="40px" alt='' height="40px" />
                                <h5 className='ps-2 mt-2'>CONTACT  INFORMATION</h5>
                            </div>

                        </div>
                        <div className='col-lg-12 col-md-12 col-sm-12'>


                                    <br></br>

                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Email
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control border-0" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                            </div>




                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Mobile
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control border-0" id="code" placeholder="+92" style={{ width: '15%' }} />
                                <input type="text" class="form-control border-0" id="phone" onChange={(e) => setPhone(e.target.value)} />
                            </div>



                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div>
                                    <label htmlFor="exampleInputName" className="form-label text-dark fw-bold">
                                        Landline(Optional)
                                    </label>
                                </div>
                            </div>


                            <div class="mb-3 d-flex gap-3">
                                <input type="text" class="form-control border-0" id="code" placeholder="051" style={{ width: '15%' }} />
                                <input type="text" class="form-control  py-2 border-0" id="landline" onChange={(e) => setLandline(e.target.value)} />
                            </div>



                            <div className='text-end'>
                                <button type='button' className='btn text-white px-5 py-2 rounded-3' style={{ backgroundColor: '#4DB749' }} onClick={submit}>SUBMIT</button>
                            </div>




                        </div>
                       </div>
                        

                    </div>
                    <div className='col-md-6 mx-auto'></div>


                </div>
                </div>

            </div>

          
          <Footer/>

        </div>
    )
}

export default Addlocation