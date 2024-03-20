import React, { useEffect, useState } from 'react'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import AgencyDetail from '../../components/agencyDetails/AgencyDetail'
import Footer from '../../components/footer/Footer'
import Features from '../../components/features/Features'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import api_url from '../../ApiUrl'
import AgencySlider from '../../components/agencySlider/AgencySlider'
import { Swiper, SwiperSlide } from "swiper/react";
import { MdWifiCalling3 } from 'react-icons/md'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const AgencyProfile = () => {

    const { id } = useParams()

    const [myPost, setMyPost] = useState()


    // useEffect(() => {
    //     axios.get(api_url + `user/get/${id}`).then(res => {
    //         console.log(res.data, '==================>>>>>>')
    //         setMyPost(res.data.data)
    //     })
    // }, [])


    return (
        <>



            <TopNav />
            <BottomNav />
            <AgencyDetail/>

            <Footer />
        </>

    )
}

export default AgencyProfile