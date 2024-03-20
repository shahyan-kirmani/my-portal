import React, { useEffect, useState } from "react";
import {BsQuestionLg} from 'react-icons/bs'
import api_url from "../../ApiUrl";
import axios from "axios";
const AskedQuestion = () => {


  const [myPost, setMyPost] = useState([])


  useEffect(() => {
    axios.get(api_url + `question/get`).then(res => {
      console.log(res.data, '==========>img')
      setMyPost(res.data.data)
    })
  }, [])



  return (
    <>
      <div className="p-5 container">
  <div className="text-center">
    <h2 style={{fontWeight:"600",fontSize:"24px",lineHeight:"28.8px"}}>FREQUENTY ASKED QUESTIONS</h2>
    <img src={require('./../../img/arrow.png')} />
  </div>
  <br/>


  <div className="row">
    <div className="col-md-12">
    <div class="accordion" id="accordionExample">
 
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <b style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>Can I choose my house?</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{fontWeight:"400",fontSize:"16px",lineHeight:"22.4px"}}>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
        et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
        heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>

  <div class="accordion-item mt-2">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>When will recevie my doucments?</b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{fontWeight:"400",fontSize:"16px",lineHeight:"22.4px"}}>
        
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
        et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
        heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="accordion-item mt-2">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>Can I skip a package?</b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{fontWeight:"400",fontSize:"16px",lineHeight:"22.4px"}}>
        
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
        et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
        craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
        heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  );
};

export default AskedQuestion;
