import React, { useEffect, useRef, useState } from "react";
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import ProjectViews from '../../components/ProjectList/ProjectViews'
import Footer from '../../components/footer/Footer'
const ProjectView = () => {
    return (
      <>
      <TopNav />
            <BottomNav />
            <ProjectViews/>
            <Footer />
      </>
      )
    }
    
    export default ProjectView