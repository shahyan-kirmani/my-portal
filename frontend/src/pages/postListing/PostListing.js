import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api_url from '../../ApiUrl'

const PostListing = () => {

  const [myPost, setMyPost] = useState([])


    useEffect(() => {
        axios.get(api_url + `property/get`).then(res => {
          console.log(res.data,'==========>img')
            setMyPost(res.data.data)
        })
    }, [])


  return (
    <>
      <section className="about_us py-3 m-4 bg-white ">
        <div className="container pb-3">
          <div className="row g-4">
            <div className="col-md-7">
              <h4 className='text-dark'>Looking to sell or <br /> Rent your Property</h4>
              <p>
                <span></span> is Pakistan's Largest Online Real Estate Portal<br />
                Connecting Buyers with Sellers within $ <br />outside the country{" "}
              </p>


              <div className='mt-5'>
                <Link to="/addLocation" className='btn w-50 text-white' style={{ backgroundColor: '#4DB749' }}>Post Now</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className=" py-3 m-4 bg-white ">
        <div className="container pb-3">
          <h3>My Recent Listings</h3>

          <div className='text-center py-5'>

            <table class="table">
              <thead class="table-light">
                <th>S.No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Location</th>
                <th>Beds</th>
                <th>Baths</th>
              </thead>
              <tbody>
                {myPost && myPost.map((i,index)=>{
                  if(i?.userId?(i?.userId).toString():null===localStorage.getItem('mainUserId'))
                {return(<>
                <tr>
                  <td>{index+1}</td>
                  <td><img src={i?.image[0]} alt={i?.title} width='35px' height='35px'/></td>
                  <td>{i?.title}</td>
                  <td>{i?.price}</td>
                  <td>{i?.location}</td>
                  <td>{i?.beds}</td>
                  <td>{i?.baths}</td>


                </tr>
                
                
                </>)}
                })}
              </tbody>
            </table>

          </div>
        </div>
      </section>
    </>
  )
}

export default PostListing