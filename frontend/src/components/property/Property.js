import React from 'react'
import { useNavigate } from 'react-router-dom'

const Property = () => {

  const navigate=useNavigate()


  return (
    <>
      <div className='property'>
        <div className='container   py-4'>
          <h3>Property by City</h3>
          <p>Where dreams meet your ideal property in any city in Pakistan.</p>
          <div class="containerm">
            <div class="row g-5">
              <div class="col-md-8 ">
                <div className='flip-btm' onClick={()=>navigate(`/all_properties/Rawalpindi`)}>
                  <div className='rounded-3' style={{ overflow: 'hidden' }}>
                    <img className='flip_file' src={require('../../assets/images/rawalpindi.jpg')} />
                  </div>
                  <div class="flipBtmDiv text-white d-flex justify-content-center align-items-center">
                    <div>
                      <h4 className='m-0 text-white'>Rawalpindi</h4>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 ">
                <div className='flip-btm' onClick={()=>navigate(`/all_properties/Karachi`)}>
                  <div className='rounded-3' style={{ overflow: 'hidden' }}>
                    <img className='flip_file' src={require('../../assets/images/KARACHI.jpg')} />
                  </div>
                  <div class="flipBtmDiv text-white d-flex justify-content-center align-items-center">
                    <div>
                      <h4 className='m-0 text-white'>Karachi</h4>
                      
                    </div>
                  </div>
                </div>
              </div>



              <div class="col-md-4 ">
                <div className='flip-btm' onClick={()=>navigate(`/all_properties/Islamabad`)}>
                  <div className='rounded-3' style={{ overflow: 'hidden' }}>
                    <img className='flip_file' src={require('../../assets/images/Islamabad.jpg')} />
                  </div>
                  <div class="flipBtmDiv text-white d-flex justify-content-center align-items-center">
                    <div>
                      <h4 className='m-0 text-white'>Islamabad</h4>
                      
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-8 ">
                <div className='flip-btm' onClick={()=>navigate(`/all_properties/Lahore`)}>
                  <div className='rounded-3' style={{ overflow: 'hidden' }}>
                    <img className='flip_file' src={require('../../assets/images/lahore.jpg')} />
                  </div>
                  <div class="flipBtmDiv text-white d-flex justify-content-center align-items-center">
                    <div>
                      <h4 className='m-0 text-white'> Lahore</h4>
                      
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Property