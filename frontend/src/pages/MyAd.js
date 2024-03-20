import React from 'react'
import './MyAd.css'

const MyAd = () => {
    return (
        <div className='bg-white w-100 my-4' style={{}}>
            <section className="ad bg-white w-100" style={{backgroundImage:`url(${require('../assets/images/myadv.jpg')})`,backgroundSize:'cover',height:'35vh'}}>
                {/* <div className="container d-flex" style={{clear:'both',padding:'1px 0px 0px 0px'}}>
                    <a href="/">
                        <div className="logo" alt="Timberland" style={{width:'283px',height:'50px',margin:'20px auto',backgroundImage:`url('http://www.seancrater.com/codepen/timb2.png')`,backgroundSize:'cover'}}></div>
                    </a>
                    {/* <a href='/' style={{color:'green',margin:'20px auto'}}>
                        <h2 className='rounded-3' style={{background:'white',padding:'10px'}}>Shop Now</h2>
                    </a> */}
                {/* </div> */} 
            </section>


        </div>
    )
}

export default MyAd
