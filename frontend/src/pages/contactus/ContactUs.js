import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {

  const navigate=useNavigate()
  return (
    <>
    <section className='professional py-3'>
        <div className='container py-3'>
            <div className='row py-3'>
                <div className='col-md-9'>
                  <div className='row align-items-center'>
                    <div className='col-md-7'>
                    <div>
                    <h5 className='text-black'>LOOKING TO SELL OR RENT YOUR PROPERTY?</h5>
                    <h1 className='text-bold'>Enlist your <br/> Property for <span className='' style={{color:'#4DB749',fontWeight:'bold'}}>FREE</span> </h1>
                    </div>
                    </div>
                    <div className='col-md-5'>

                            
                    <div className='ps-4 pt-4'>
  
  <button className='btn  mt-3 btn-primary btn-lg py-2 px-5' onClick={()=>navigate('/addLocation')}>Add Property</button>
  </div>


                    </div>
                  </div>
                   

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactUs