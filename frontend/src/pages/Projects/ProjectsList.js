import React, { useEffect, useRef, useState } from "react";
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import ProjectList from '../../components/ProjectList/ProjectList'
import Footer from '../../components/footer/Footer'

const ProjectsList = () => {

    return (
      <>
      <TopNav />  
            <BottomNav />
            <ProjectList/>
            <Footer />
      </>
      )
    }
    
    export default ProjectsList