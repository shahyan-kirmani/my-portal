import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/Login/Login';
import Addlocation from './pages/Addlocation';
import AgencyProfile from './pages/Agency/AgencyProfile';
import PackagesView from './pages/Packages/PackagesView';
import AgencyList from './pages/Agency/AgencyList';
import ProjectsList from './pages/Projects/ProjectsList';
import ProjectView from './pages/Projects/ProjectView';
import DeveloperList from './pages/Developers/DeveloperList';
import DeveloperDetails from './pages/Developers/DeveloperDetails';
import ViewProperty from './pages/ViewProperty/ViewProperty';
import AllProperties from './components/property/AllProperties';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/About/AboutUs';
import Agencies from './pages/Agencies/Agencies';
import Blogs from './pages/Blogs/Blogs';
import Events from './pages/Events/Events';
import Career from './pages/Career/Career';
import OurTeam from './pages/ourTeam/OurTeam';
import AllPropertiesCity from './components/property/AllPropertiesCity';
import SellerWrapper from './pages/SellerWrapper';
import UserSettings from './pages/userSettings/UserSettings';
import PropertyManagements from './pages/Managemnets/PropertyManagemnets';
import Plan from './pages/Plan/Plan';
import PostListing from './pages/postListing/PostListing'
import ViewBlogs from './pages/Blogs/ViewBlogs';
import CapitalCity from './pages/CapitalCity/CapitalCity';
import TableDetails from './pages/TableDetails/TableDetails';
import News from './components/news/News';
import ViewInvest from './pages/ViewInvest';
import FavoriteProperty from './pages/FavoriteProperty/FavoriteProperty';
import ContentBank from './pages/ContentBank/ContentBank';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/news' element={<News />} />
          <Route path='/addProject' element={<Addlocation />} />
          <Route path='/agenciesdetails' element={<AgencyProfile />} />
          <Route path='/packages' element={<PackagesView />} />
          <Route path='/agency_list' element={<AgencyList />} />
          <Route path='/projects_list' element={<ProjectsList />} />
          <Route path='projects_list/projectdetails/:id' element={<ProjectView />} />
          <Route path='/developer_list' element={<DeveloperList />} />/
          <Route path='/developerdestails' element={<DeveloperDetails />} />
          <Route path='/view_property/:id' element={<ViewProperty />} />
          <Route path='/all_properties' element={<AllProperties />} />
          <Route path='/all_properties/:city' element={<AllPropertiesCity />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about_us' element={<AboutUs />} />
          {/* <Route path='/contact' element={<Agencies />} /> */}
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/viewBlog' element={<ViewBlogs />} />
          <Route path='/events' element={<Events />} />
          <Route path='/career' element={<Career />} />
          <Route path='/favorite_property' element={<FavoriteProperty />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/invest' element={<CapitalCity />} />
          <Route path='/bankContact' element={<ContentBank />} />
          <Route path='/our_team' element={<OurTeam />} />
          <Route path='/viewInvest' element={<ViewInvest />} />


          <Route element={<SellerWrapper />}>
            <Route path='/dashboard' element={<PostListing />} />
            <Route path='/property_managements' element={<PropertyManagements />} />
            <Route path='/post_listing' element={<PostListing />} />
            <Route path='/user_setting' element={<UserSettings />} />
          </Route>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
