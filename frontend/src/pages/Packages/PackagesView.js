import React from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
const PackagesView = () => {

  const navigate=useNavigate()
  return (
    <>
     <TopNav />
      <BottomNav />
      <div
            id="intro-example"
            class="p-5 text-center bg-image"
            style={{backgroundImage:`url('${require("./../../img/banner/Group 22 (7).png")}')`,height:"170px"}}
        >
        </div>
      <br />
<div class="container p-5">
	<div class="row">
		<div class="col-md-12">
			<div class="card-group">
  <div class="card">
    <div class="card-header">
    	<h3>PRODUCTS</h3>
    </div>
    <div class="card-body">
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">First</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Mark</td>
    
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr><tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr><tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>

  </tbody>
</table>
    </div>
  </div>
  <div class="card">
     <div class="card-header bg-success bg-gradient">
    	<h4 class="text-white">PACKAGES FOR INDIVIDUALS</h4>
    	<p class="text-white">Per Months Annually</p>
    </div>
    <div class="card-body">
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">First</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
    
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr><tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr><tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>
      <button type="button" class="btn btn-outline-success">INQURE NOW</button>
      </td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
  <div class="card">
    <div class="card-header bg-warning">
    	<h3 class="text-white">PACKAGES FOR AGENCIES</h3>
    	<p class="text-white">Per Months Annually</p>
    </div>
    <div class="card-body">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">First</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
    
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr><tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr><tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>Jacob</td>
     
    </tr>
    <tr>
      <td>
      <button type="button" class="btn btn-outline-success mx-auto">INQURE NOW</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</div>
		</div>
	</div>
</div>
      <Footer />
    </>
  )}
export default PackagesView