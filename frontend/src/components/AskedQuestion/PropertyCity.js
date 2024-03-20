import React, { useEffect, useState } from "react";
import { BsQuestionLg } from 'react-icons/bs'
import api_url from "../../ApiUrl";
import axios from "axios";
import { Link } from "react-router-dom";
const PropertyCity = () => {


  const [myPost, setMyPost] = useState([])


  useEffect(() => {
    axios.get(api_url + `question/get`).then(res => {
      console.log(res.data, '==========>img')
      setMyPost(res.data.data)
    })
  }, [])



  return (
    <>
      <section className="asked_Question my-5">
        <div className="container-fluid px-0 px-md-5" >
          <div className="row rounded-5" style={{ backgroundColor: '#e8ffe7' }}>
            <div className="col-md-12 mx-auto p-3 p-md-5">
              <h3>Popular Locations</h3>
              <div className="px-3 row">
                <div className="col-md-4 mb-2">
                  <Link to={(`/all_properties/Lahore`)}>
                    Houses for sale in Lahore City
                  </Link>
                </div>
                <div className="col-md-4 mb-2">
                  <Link to={(`/all_properties/Islamabad`)}>
                    Houses for sale in Islamabad City
                  </Link>
                </div>
                <div className="col-md-4 mb-2">
                  <Link to={(`/all_properties/Faislabad`)}>
                    Houses for sale in Faislabad City
                  </Link>
                </div>
                <div className="col-md-4 mb-2">
                  <Link to={(`/all_properties/Peshawar`)}>
                    Houses for sale in Peshawar City
                  </Link>
                </div>
                <div className="col-md-4 mb-2">
                  <Link to={(`/all_properties/Karachi`)}>
                    Houses for sale in Karachi City
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyCity;
