import React from 'react'
import TopNav from '../components/TopNav'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const SellerWrapper = () => {
    return (
        <div>
            <TopNav />
            <Navbar />
            <Sidebar>
                <Outlet />

            </Sidebar>

        </div>
    )
}

export default SellerWrapper
