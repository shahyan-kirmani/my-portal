import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colotlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addblog from "./pages/Addblog";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import Couponlist from "./pages/Couponlist";
import AddCoupon from "./pages/AddCoupon";
import ViewEnq from "./pages/ViewEnq";
import ViewOrder from "./pages/ViewOrder";
import AddProperty from "./pages/AddProperty";
import AddProject from "./pages/AddProject";
import PropertyList from "./pages/PropertyList";
import ProjectList from "./pages/ProjectList";
import Payments from "./pages/Payments";
import Contactus from "./pages/Contactus";
import Faq from "./pages/Faq";
import OurTeam from "./pages/OurTeam";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import AddFaq from "./pages/AddFaq";
import AddOurTeam from "./pages/AddOurTeam";
import AddEvents from "./pages/AddEvents";
import Buyer from "./pages/Buyer";
import Seller from "./pages/Seller";
import Agency from "./pages/Agency";
import Advertisement from "./pages/Advertisement";
import FavoriteList from "./pages/FavoriteList";
import AddAgency from "./pages/AddAgency";
import AgencyList from "./pages/AgencyList";
import EditFaq from "./pages/EditFaq";
import Add_Addvertisement from "./pages/Add_Addvertisement";
import AddPackages from "./pages/AddPackages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="blog" element={<Addblog />} />
        
          
          <Route path="add_property" element={<AddProperty />} />
          <Route path="property_list" element={<PropertyList />} />

          <Route path="add_project" element={<AddProject />} />
          <Route path="project_list" element={<ProjectList />} />
     
          <Route path="contact_us" element={<Contactus />} /> 
          <Route path="faq" element={<Faq />} />
          <Route path="add_faq" element={<AddFaq />} />
          <Route path="edit_faq/:id" element={<EditFaq />} />
          <Route path="our_team" element={<OurTeam />} />
          <Route path="add_team" element={<AddOurTeam />} />
          <Route path="events" element={<Events />} />
          <Route path="add_events" element={<AddEvents />} />
          <Route path="blogs" element={<Bloglist />} />
          <Route path="buyer" element={<Buyer />} />
          <Route path="seller" element={<Seller />} />
          <Route path="agency" element={<Agency />} />
          <Route path="advertisement" element={<Advertisement />} />
          <Route path="add_packages" element={<AddPackages />} />
          <Route path="add_advertisement/:id" element={<Add_Addvertisement />} />
          <Route path="favoriteList" element={<FavoriteList />} />
          <Route path="add_agency" element={<AddAgency />} />
          <Route path="agency_list" element={<AgencyList />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
