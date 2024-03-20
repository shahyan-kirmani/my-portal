import React from 'react'
import { useNavigate } from 'react-router-dom';

const Addvertise = () => {
  const navigate=useNavigate()
  return (
    <>
    <section className='addvertise py-3'>
        <div className='container py-5 text-center'>
            <div className='row pt-5'>
                <div className='col-md-9 mx-auto'>
                    {/* <h1>Advertise with Makkaan</h1> */}

                    <button className='btn  mt-3 btn-primary btn-lg py-2 px-5' onClick={()=>{navigate('/plan')}}>Choose Plan Now</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Addvertise;