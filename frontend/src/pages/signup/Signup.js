
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosBed } from 'react-icons/io';
import { MdOutlineBathroom } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
// import required modules
import { Pagination, Navigation } from "swiper";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import api_url from "../../ApiUrl";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()

    const [signAs, setSignAs] = useState('')
    const [agencyLogoss, setAgencyLogo] = useState([])

    const [myImage,setMyImage]=useState('')

    const submit = async() => {

        const fullName = document.getElementById('fullName')
        const phone = document.getElementById('phone')
        const city = document.getElementById('city')
        const email = document.getElementById('emails')
        const password = document.getElementById('passwords')
        const cpassword = document.getElementById('cpasswords')
        // const agencyLogo = document.getElementById('agencyLogo')
        const agencyName = document.getElementById('agencyName')
        const serviceArea = document.getElementById('serviceArea')
        const agencyDescription = document.getElementById('agencyDescription')

        console.log(agencyName,'====================aggregated')

        if (fullName.value.length === 0) {
            toast.error('Must enter name');
        }
        else if (phone.value.length === 0) {
            toast.error('Must enter phone');
        }
        else if (email.value.length === 0) {
            console.log(email.value)
            toast.error('Must enter email');
        }
        else if (password.value.length === 0) {
            toast.error('Must enter password');
        }
        else if (cpassword.value.length === 0) {
            toast.error('Must enter confirm password');
        }
        else if (password.value !== cpassword.value) {
            toast.error('Password and confirm password must be same');
        }
        else if (city.value.length === 0) {
            toast.error('Must enter city');
        }

        else {

        
            if(agencyLogoss.length > 0) {

                let profilephoto = " "

            try {
      
              let param = new FormData();

              param.append("avatars",agencyLogoss[0]);
      
              profilephoto = await axios.post(`${api_url}blog/image`, param);

              setMyImage(profilephoto?.data?.data[0]?.url)
              
            //   console.log(profilephoto?.data[0]?.url,'image');
      
            } catch (error) {
              
              console.log(error);
            }
        }

            let params={
                'city': city.value,
                'fullName': fullName.value,
                'phone': phone.value,
                'email': email.value,
                'password': password.value,
                'signAs': signAs,
                'agencyName':agencyName?agencyName.value:null,
                'serviceArea':serviceArea?serviceArea.value:null,
                'agencyDescription':agencyDescription?agencyDescription.value:null,
                'agencyLogo':myImage.length>0?myImage:null,
            }



            axios.post(`${api_url}user/create`, params).then((res) => {
                console.log(res.data)
                if (res.data.status === 'ok') {
                    document.getElementById('gologin').click()
                    toast.success('Register successfully!');

                    window.location.reload(true)

                    
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
            <section className="Signup_card">
                <ToastContainer />
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-7">
                            <Swiper

                                spaceBetween={60}
                                navigation
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Navigation]}
                                className="mySwiper overflow-hidden"




                            >
                                <SwiperSlide>
                                    <div className="">
                                        <img src={require('../../assets/images/ad property image.jpg')} width="100%" alt="" />
                                    </div>
                                </SwiperSlide>
                                {/* <SwiperSlide>
                                    <div className="">
                                        <img src={require('../../assets/images/ad property image.jpg')} width="100%" alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="">
                                        <img src={require('../../assets/images/ad property image.jpg')} width="100%" alt="" />
                                    </div>
                                </SwiperSlide> */}

                            </Swiper>
                        </div>
                        <div className="col-md-5 pt-5">
                            <div className='position-relative formimg'>
                                <div className=''><img src={require('../../1.png')} /></div>
                                <div className='row card_row position-absolute top-0 w-100'>
                                    <div className='col-md-11 mx-auto'>
                                        <div className=''>
                                            <div className='mx-3'>
                                                <h4 className=''>Sign Up</h4>
                                            </div>

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
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                            id="passwords"
                                                            aria-describedby="emailHelp"
                                                            placeholder='Create a strong password'
                                                        />
                                                    </div>
                                                    <div className="pt-2">
                                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                            id="cpasswords"
                                                            aria-describedby="emailHelp"
                                                            placeholder='Confirm your password'
                                                        />
                                                    </div>
                                                    <div className="pt-2">
                                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="Number"
                                                            className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                            id="phone"
                                                            aria-describedby="emailHelp"
                                                            placeholder='+923-0000000'
                                                        />
                                                    </div>
                                                    <div className="pt-2" >
                                                        <label htmlFor="exampleInputEmail1" className="form-label m-0">
                                                            City
                                                        </label>
                                                        <select class="form-select form-select-md m-0 border-0 rounded-0 p-0 border-bottom"
                                                            aria-label=".form-select-md example" name="city" id="city" required>
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




                                                    <div className='pt-2' >
                                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                                            Signing up as
                                                        </label>
                                                        <div className="form-check d-flex justify-content-between align-items-center">

                                                            {/* <div onClick={() => setSignAs('buyer')}>
                                                                <input type="radio" className="form-check-input" id="buyer" name='signmeas' />
                                                                <label className="form-check-label" htmlFor="buyer">
                                                                    Buyer
                                                                </label>
                                                            </div> */}
                                                            <div onClick={() => setSignAs('seller')}>
                                                                <input type="radio" name='signmeas' className="form-check-input" id="seller" />
                                                                <label className="form-check-label" htmlFor="seller">
                                                                    Seller
                                                                </label>
                                                            </div>
                                                            <div onClick={() => setSignAs('agency')}>
                                                                <input type="radio" name='signmeas' className="form-check-input" id="agency" />
                                                                <label className="form-check-label" htmlFor="agency">
                                                                    Agency
                                                                </label>
                                                            </div>
                                                            <div onClick={() => setSignAs('developer')}>
                                                                <input type="radio" name='signmeas' className="form-check-input" id="developer" />
                                                                <label className="form-check-label" htmlFor="developer">
                                                                    Developer
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    {signAs === 'agency' ? <div>

                                                        <div className="pt-2">
                                                            <label htmlFor="exampleInputagencyname" className="form-label">
                                                                Agency Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                                id="agencyName"
                                                                aria-describedby="agencyHelp"
                                                                placeholder='Titanium'
                                                            />
                                                        </div>
                                                        <div className="pt-2" >
                                                            <label htmlFor="exampleInputEmail1" className="form-label m-0">
                                                                Service Area
                                                            </label>
                                                            <select class="form-select form-select-md m-0 border-0 rounded-0 p-0 border-bottom"
                                                                aria-label=".form-select-md example" name="serviceArea" id="serviceArea" required>
                                                                <option value="" disabled selected>Select The service area</option>
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

                                                        <div class="pt-2">
                                                            <label htmlFor="exampleInputagencyname" className="form-label">
                                                                Agency Description
                                                            </label>
                                                            <div class="form-floating">
                                                                <textarea class="form-control location_btn"
                                                                    rows="8"
                                                                    placeholder="Leave a comment here" id="agencyDescription" style={{ height: '150px' }} name="agencyDescription"></textarea>
                                                            </div>

                                                        </div>


                                                        <div className="pt-2">
                                                            <label htmlFor="exampleInputagencyname" className="form-label">
                                                                Agency Logo
                                                            </label>
                                                            <input
                                                                type="file"
                                                                className="form-control bg-transparent border-0 rounded-0 p-0 border-bottom mytex"
                                                                id="agencyLogo" name="agencyLogo"
                                                                aria-describedby="agencyHelp"
                                                                placeholder='Titanium'
                                                                onChange={(e)=>setAgencyLogo(e.target.files)}
                                                            />
                                                        </div>

                                                    </div> : null}



                                                    <div className='text-end' >

                                                        <button type="button" className='btn px-4 mt-2 text-white' style={{ backgroundColor: '#4DB749' }} onClick={submit} >Sign Up</button>
                                                        <button id="gologin" type="button" className='btn' style={{ opacity: '0' }} data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal">Any</button>
                                                    </div>
                                                </form>


                                            </div>

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
    );
}


export default Signup;



