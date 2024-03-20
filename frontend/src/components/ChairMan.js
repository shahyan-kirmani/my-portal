import React from 'react'

const ChairMan = () => {
  return (
    <>
      <div className='container pt-3'>
        <h3>Chairman's Message</h3>
      </div>
      <section className='chairMan' style={{ backgroundColor: '#e8ffe7' }}>
        <div className='container py-4'>

          <div className='row' style={{ alignItems: 'center' }}>
            <div className='col-md-5'>
              <div className='border-0 text-center'>
                <img src={require('../assets/imagenew/home-chairmain.png')} width="200px" height="200px" alt='' className='shadow rounded-4' />
              </div>
            </div>
            <div className='col-md-7'>

              <p className=''>We have followed best practices and will continue to pursue a similar path. Our main objective is to provide Dream Homes to the 20 Million population of Pakistan.
                I'm happy to say that we have achieved this goal so far, and looking forward to pursuing this goal with incredible zeal in the future.</p>

            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default ChairMan